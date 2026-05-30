# Deployment Spec

## Stack
- **Web server**: nginx (static file serving)
- **Runtime**: None — no Node.js process running in production
- **Build output**: `output-site/dist/` (static HTML, CSS, JS, assets)
- **Build command**: `npm run prerender` (inside `output-site/`)

## Build Process

```bash
cd output-site
npm run prerender
# Outputs dist/ with pre-rendered index.html
```

Then copy `dist/` to the nginx web root (e.g. `/var/www/sahyogai/`).

## nginx Configuration

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name sahyogai.in www.sahyogai.in;

    # Redirect HTTP to HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name sahyogai.in www.sahyogai.in;

    ssl_certificate     /etc/letsencrypt/live/sahyogai.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/sahyogai.in/privkey.pem;

    root /var/www/sahyogai/dist;
    index index.html;

    # React SPA — all routes fall back to index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets aggressively (Vite hashes filenames)
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Do not cache index.html (updated on each deploy)
    location = /index.html {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        expires 0;
    }

    # SEO files — short cache
    location = /robots.txt  { expires 1d; }
    location = /sitemap.xml { expires 1d; }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header Referrer-Policy "strict-origin-when-cross-origin";

    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;
    gzip_min_length 1024;
}
```

## Deploy Checklist

Before each deploy:
- [ ] Run `npm run prerender` (not `npm run build`)
- [ ] Update `<lastmod>` in `public/sitemap.xml` to today's date
- [ ] Verify `siteConfig.url` in `src/content/site.js` matches the live domain
- [ ] Copy `dist/` to nginx web root
- [ ] `nginx -t && systemctl reload nginx`

## Why Static + nginx (not Node.js server)

- Zero cold starts, no process management
- nginx handles compression, caching headers, SSL termination natively
- Pre-rendered HTML means Googlebot sees full content on the first byte — no SSR server needed at runtime
- `dist/` can be copied to any CDN or object storage (S3, Cloudflare Pages, etc.) with no changes
