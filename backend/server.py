"""
server.py - FastAPI server for SahyogAI Pipecat voice agent.

Routes:
  POST /api/offer   - WebRTC SDP offer -> SDP answer
  GET  /api/health  - liveness probe

nginx proxies /api/ -> http://127.0.0.1:8765
"""

import asyncio
import os
from contextlib import asynccontextmanager

from dotenv import load_dotenv
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from loguru import logger

from pipecat.transports.smallwebrtc.connection import IceServer, SmallWebRTCConnection
from pipecat.runner.types import SmallWebRTCRunnerArguments
from pipecat.transports.smallwebrtc.request_handler import (
    ConnectionMode,
    IceCandidate,
    SmallWebRTCPatchRequest,
    SmallWebRTCRequest,
    SmallWebRTCRequestHandler,
)

from bot import bot as run_bot

load_dotenv()


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("SahyogAI Pipecat server starting on port {}", os.environ.get("PORT", 8765))
    yield
    await webrtc_handler.close()
    logger.info("SahyogAI Pipecat server stopped")


app = FastAPI(title="SahyogAI Pipecat API", lifespan=lifespan)

_raw_origins = os.environ.get(
    "CORS_ORIGINS", "https://www.sahayogai.in,http://localhost:5173"
)
origins = [o.strip() for o in _raw_origins.split(",") if o.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PATCH", "OPTIONS"],
    allow_headers=["*"],
)

# STUN lets the server discover its public/NAT IP for ICE candidates.
# Critical for Docker: without STUN the container advertises 172.x.x.x
# (container IPs the browser can't reach) instead of a routable address.
_ice_servers = [
    IceServer(urls="stun:stun.l.google.com:19302"),
    IceServer(urls="stun:stun1.l.google.com:19302"),
]

webrtc_handler = SmallWebRTCRequestHandler(
    ice_servers=_ice_servers,
    connection_mode=ConnectionMode.MULTIPLE,
)


@app.patch("/api/offer")
async def offer_patch(request: Request):
    """Handle ICE candidate trickle from the browser (sent after initial SDP offer)."""
    body = await request.json()
    logger.debug("Received ICE candidate patch for pc_id={}", body.get("pc_id"))
    patch_request = SmallWebRTCPatchRequest(
        pc_id=body["pc_id"],
        candidates=[IceCandidate(**c) for c in body.get("candidates", [])],
    )
    await webrtc_handler.handle_patch_request(patch_request)
    return {"status": "ok"}


@app.get("/api/health")
async def health():
    return {"status": "ok", "service": "sahayogai-pipecat"}


@app.post("/api/offer")
async def offer(request: Request):
    body = await request.json()
    logger.info("Received WebRTC offer")

    webrtc_request = SmallWebRTCRequest.from_dict(body)

    async def on_connection(connection: SmallWebRTCConnection):
        asyncio.create_task(run_bot(SmallWebRTCRunnerArguments(webrtc_connection=connection)))

    answer = await webrtc_handler.handle_web_request(webrtc_request, on_connection)
    logger.info("Returning SDP answer (pc_id={})", answer.get("pc_id") if answer else None)
    return answer


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "server:app",
        host=os.environ.get("HOST", "0.0.0.0"),
        port=int(os.environ.get("PORT", 8765)),
        log_level="info",
    )
