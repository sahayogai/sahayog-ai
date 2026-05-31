"""
bot.py — Pipecat pipeline for Arjun, SahyogAI's AI agent.

Entry point: python bot.py -t webrtc [--host 0.0.0.0] [--port 7860]

The Pipecat runner (pipecat.runner.run.main) starts its own FastAPI server,
handles the /start WebRTC handshake, and calls bot(runner_args) for every
connection. server.py is no longer needed when using this pattern.

Pipeline:
  SmallWebRTCTransport / DailyTransport (audio in)
    → SarvamSTTService  (saaras:v3, language=unknown — auto-detects Hindi/English/etc.)
    → context_aggregator.user()
    → AzureLLMService   (gpt-4o-mini, ~1.5s first token)
    → SarvamTTSService  (bulbul:v3, voice=aditya)
    → transport.output()
    → context_aggregator.assistant()
"""

import asyncio
import os

from loguru import logger

from pipecat.frames.frames import TTSSpeakFrame
from pipecat.pipeline.pipeline import Pipeline
from pipecat.pipeline.runner import PipelineRunner
from pipecat.pipeline.task import PipelineParams, PipelineTask
from pipecat.audio.turn.smart_turn.local_smart_turn_v3 import LocalSmartTurnAnalyzerV3
from pipecat.audio.vad.silero import SileroVADAnalyzer
from pipecat.audio.vad.vad_analyzer import VADParams
from pipecat.processors.aggregators.llm_context import LLMContext
from pipecat.processors.aggregators.llm_response_universal import (
    LLMContextAggregatorPair,
    LLMUserAggregatorParams,
)
from pipecat.turns.user_stop import TurnAnalyzerUserTurnStopStrategy
from pipecat.turns.user_turn_strategies import UserTurnStrategies
from pipecat.runner.run import main as runner_main
from pipecat.runner.types import RunnerArguments
from pipecat.runner.utils import create_transport
from pipecat.services.azure.llm import AzureLLMService
from pipecat.services.sarvam.stt import SarvamSTTService
from pipecat.services.sarvam.tts import SarvamTTSService
from pipecat.transports.daily.transport import DailyParams
from pipecat.transports.smallwebrtc.transport import TransportParams


SYSTEM_PROMPT = """You are Arjun, a friendly AI sales agent for SahyogAI — India's leading AI voice agent platform for businesses.

Your role:
- Greet visitors warmly in Hindi and English, then introduce SahyogAI.
- Explain that SahyogAI's AI voice agents call back every inbound lead within 60 seconds, qualify prospects, and book demos 24/7.
- Help qualify the visitor: ask about their business type, current lead follow-up process, and team size.
- Highlight key benefits: 60-second callback speed, 24/7 availability, multi-lingual support (Hindi, English, Tamil, Telugu, and 20+ Indian languages), CRM integration.
- Offer to book a free strategy call or connect them with the SahyogAI team.

Key facts:
- SahyogAI calls back leads 20x faster than any competitor.
- Handles 10+ simultaneous calls — no busy tones, no missed leads.
- Integrates with Zoho, HubSpot, Salesforce, GoHighLevel, and 100+ CRMs.
- Costs a fraction of a telecaller or BPO agent, performs round the clock.
- Free strategy call at sahayogai.in or call +91 93223 65844.

Style rules (voice call — critical):
- Keep every response under 3 short sentences.
- Never use bullet points, lists, or special characters.
- Be warm, confident, and solution-focused.
- If the visitor speaks Hindi or Hinglish, mirror their language."""


GREETING = "Namaste! I'm Arjun from SahyogAI. How can I help your business today?"


async def bot(runner_args: RunnerArguments) -> None:
    """Build and run the Pipecat pipeline for one WebRTC session.

    The runner discovers this function by name ('bot') and calls it for every
    new client connection. runner_args is a SmallWebRTCRunnerArguments instance
    when the client connects via WebRTC.
    """

    logger.info("Initialising Arjun pipeline…")

    api_key = os.environ["SARVAM_API_KEY"]

    # -- Transport ----------------------------------------------------------
    transport = await create_transport(
        runner_args,
        {
            "daily": lambda: DailyParams(audio_in_enabled=True, audio_out_enabled=True),
            "webrtc": lambda: TransportParams(audio_in_enabled=True, audio_out_enabled=True),
        },
    )

    # -- Sarvam AI services -------------------------------------------------
    stt = SarvamSTTService(
        api_key=api_key,
        settings=SarvamSTTService.Settings(
            model="saaras:v3",
            language="unknown",  # auto-detect: Hindi, Marathi, English, Kannada, …
        ),
    )

    llm = AzureLLMService(
        api_key=os.environ["AZURE_OPENAI_API_KEY"],
        endpoint=os.environ["AZURE_OPENAI_ENDPOINT"],
        api_version=os.environ.get("AZURE_OPENAI_API_VERSION", "2024-12-01-preview"),
        settings=AzureLLMService.Settings(
            model=os.environ.get("AZURE_OPENAI_DEPLOYMENT", "gpt-4o-mini"),
        ),
    )

    tts = SarvamTTSService(
        api_key=api_key,
        settings=SarvamTTSService.Settings(
            model="bulbul:v3",
            voice="shubh",
        ),
    )

    # -- LLM context --------------------------------------------------------
    # Pre-seed with system prompt + the greeting Arjun will speak on connect
    # so the LLM knows what was said when the user first replies.
    context = LLMContext(
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "assistant", "content": GREETING},
        ]
    )
    # -- Smart Turn + VAD configuration (per Pipecat Cloud docs) ---------------
    # stop_secs=0.2: VAD triggers Smart Turn after just 200ms of silence.
    # Smart Turn then decides if the user truly finished — this replaces the
    # default ~1s endpointing buffer with a model-driven decision, cutting
    # response latency while keeping natural turn-taking.
    user_aggregator, assistant_aggregator = LLMContextAggregatorPair(
        context,
        user_params=LLMUserAggregatorParams(
            user_turn_strategies=UserTurnStrategies(
                stop=[TurnAnalyzerUserTurnStopStrategy(
                    turn_analyzer=LocalSmartTurnAnalyzerV3()
                )]
            ),
            vad_analyzer=SileroVADAnalyzer(
                params=VADParams(start_secs=0.4, stop_secs=0.2)
            ),
        ),
    )

    # -- Pipeline -----------------------------------------------------------
    pipeline = Pipeline(
        [
            transport.input(),
            stt,
            user_aggregator,
            llm,
            tts,
            transport.output(),
            assistant_aggregator,
        ]
    )

    task = PipelineTask(
        pipeline,
        params=PipelineParams(allow_interruptions=True),
    )

    # -- Event handlers -----------------------------------------------------
    # on_client_connected: push the greeting TextFrame directly to TTS,
    # bypassing the LLM → ~1s latency instead of ~6s.
    @transport.event_handler("on_client_connected")
    async def on_client_connected(*_):
        # Wait 1.5 s before sending the greeting so the browser's WebRTC audio
        # output track is fully active and the AudioContext is running.
        # Without this delay the TTS audio is generated but the transport drops
        # it because the output track hasn't started yet, and the browser never
        # hears the opening Namaste.
        logger.info("Client connected — waiting for browser audio to be ready…")
        await asyncio.sleep(1.5)
        logger.info("Queuing greeting…")
        await task.queue_frames([TTSSpeakFrame(text=GREETING, append_to_context=True)])

    @transport.event_handler("on_client_disconnected")
    async def on_client_disconnected(*_):
        logger.info("Client disconnected — cancelling pipeline")
        await task.cancel()

    # -- Run ----------------------------------------------------------------
    runner = PipelineRunner()
    await runner.run(task)


if __name__ == "__main__":
    # python bot.py -t webrtc --host 0.0.0.0 --port 7860
    #
    # The runner starts its own uvicorn FastAPI server. Clients send a POST
    # to /start with {"transport": "webrtc"} plus SDP offer fields.
    # server.py is no longer needed when launching via this entry point.
    runner_main()
