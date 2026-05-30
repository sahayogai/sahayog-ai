# Deployment Spec

## Stack
- **Web server**: nginx (static files + proxy to Python backend)
- **Frontend runtime**: None — static files in `/var/www/sahayogai/`
- **Backend runtime**: Docker container (FastAPI + Pipecat), host network, port 8765
- **Build output**: `dist/` produced by `npm run prerender`
- **Web root**: `/var/www/sahayogai/`

---

## One-Time Server Setup

### nginx
```bash
# Install nginx config
cp output-site/nginx.conf /etc/nginx/sites-available/sahayogai
ln -s /etc/nginx/sites-available/sahayogai /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx

# Add SSL (Let's Encrypt — appends 443 block automatically)
certbot --nginx -d sahayogai.in -d www.sahayogai.in
```

### Backend (Docker)
```bash
# Build the image (run once, or after bot.py / server.py changes)
cd output-site/backend
docker build -t sahayogai-bot .

# Create .env from example and fill in all values
cp .env.example .env
# Edit .env — set SARVAM_API_KEY, all AZURE_OPENAI_* vars

# Run the container
# --network host is REQUIRED for WebRTC UDP — without it the container
# advertises its private 172.x.x.x IP and the browser can't reach it.
docker run -d \
  --name sahayogai-bot \
  --network host \
  --env-file .env \
  --restart unless-stopped \
  sahayogai-bot:latest
```

---

## Every Deploy

### Frontend changed
```bash
cd output-site
npm run prerender
rm -rf /var/www/sahayogai/*
cp -r dist/* /var/www/sahayogai/
```

### Backend changed (bot.py or server.py)
```bash
cd output-site/backend
docker build -t sahayogai-bot .
docker stop sahayogai-bot && docker rm sahayogai-bot
docker run -d \
  --name sahayogai-bot \
  --network host \
  --env-file .env \
  --restart unless-stopped \
  sahayogai-bot:latest
```

### nginx config changed
```bash
nginx -t && systemctl reload nginx
```

---

## Deploy Checklist

- [ ] `npm run prerender` (not `npm run build`)
- [ ] Update `<lastmod>` in `public/sitemap.xml` to today's date
- [ ] `rm -rf /var/www/sahayogai/* && cp -r dist/* /var/www/sahayogai/`
- [ ] Rebuild + restart Docker container if backend changed
- [ ] Smoke test: `curl https://www.sahayogai.in/api/health` → `{"status":"ok"}`
- [ ] Smoke test: open the site and click "Talk to Arjun" — widget should open

---

## Local Development

```bash
# Terminal 1 — Python backend (no Docker needed locally)
cd output-site/backend
python server.py   # runs on :8765

# Terminal 2 — React frontend
cd output-site
npm run dev        # Vite proxies /api → localhost:8765
```

---

## WebRTC + Docker — Why `--network host`

SmallWebRTC sends ICE candidates to the browser so it knows where to send
UDP audio. In a bridge-networked container those candidates advertise
`172.x.x.x` — private Docker IPs the browser can never reach.

`--network host` makes the container share the host's network stack, so it
advertises the real server IP. This is Linux-only; on macOS/Windows use
`host.docker.internal` or a TURN server instead.
