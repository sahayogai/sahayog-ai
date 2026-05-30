FROM python:3.12-slim

# System deps for audio processing (Silero VAD, WebRTC)
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
    libsndfile1 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Python deps first (layer cache)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Pre-download Silero VAD model so the container starts instantly
RUN python -c "from pipecat.audio.vad.silero import SileroVADAnalyzer; SileroVADAnalyzer()"

# Copy source
COPY server.py bot.py ./

# Port 8765 is the HTTP/signalling port (TCP).
# WebRTC media flows over UDP on ephemeral ports — use --network=host on Linux
# so the container shares the host's network stack (required for WebRTC UDP).
EXPOSE 8765

CMD ["python", "server.py"]
