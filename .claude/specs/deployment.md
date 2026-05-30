# Deployment Spec

## Stack
- **Web server**: nginx (static file serving)
- **Runtime**: None — no Node.js process running in production
- **Build output**: `dist/` (static HTML, CSS, JS, assets)
- **Build command**: `npm run prerender` (inside `output-site/`)
- **Web root**: `/var/www/sahayogai/`

## Deploy Steps

```bash
# 1. Build
cd output-site
npm run prerender

# 2. Clear old files and copy new build
rm -rf /var/www/sahayogai/*
cp -r dist/* /var/www/sahayogai/

# 3. Reload nginx
nginx -t
systemctl reload nginx
```

## Deploy Checklist

Before each deploy:
- [ ] Run `npm run prerender` (not `npm run build`)
- [ ] Update `<lastmod>` in `public/sitemap.xml` to today's date
- [ ] Verify `siteConfig.url` in `src/content/site.js` matches live domain (`sahayogai.in`)
- [ ] Clear web root and copy dist: `rm -rf /var/www/sahayogai/* && cp -r dist/* /var/www/sahayogai/`
- [ ] `nginx -t && systemctl reload nginx`

## Why Static + nginx (not Node.js server)

- Zero cold starts, no process management
- nginx handles compression, caching headers, SSL termination natively
- Pre-rendered HTML means Googlebot sees full content on the first byte — no SSR server needed at runtime
- `dist/` can be copied to any CDN or object storage (S3, Cloudflare Pages, etc.) with no changes
