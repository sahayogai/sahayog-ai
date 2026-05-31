# SahyogAI — Project Guide for Claude Code

## What This Is
SahyogAI is a marketing landing page for an AI voice agent product targeting Indian businesses. The site captures leads and books demos via Cal.com.

## Essential Commands
```bash
npm run dev          # Development — normal React SPA, HMR, no SSR
npm run build        # Standard Vite client build (SPA only, no pre-render)
npm run prerender    # PRODUCTION build — client + SSR pre-render → dist/
npm run preview      # Preview the dist/ folder locally after prerender
```

> **Always use `npm run prerender` for production builds**, not `npm run build`.
> nginx serves the `dist/` folder as static files.

## Content Changes (Single Source of Truth)
All copy, links, and configuration live in one file:
```
src/content/site.js
```
Change business name, phone, hero text, features, FAQ — everything is in `site.js`. Do not hardcode content in components.

`siteConfig.url` in `site.js` must match the live domain — it is used in canonical URLs, OG tags, sitemap, and JSON-LD.

## Internationalization (i18n)
The site supports **English (default), Hindi, Marathi** and is shareable per-language via a URL param: `?lang=hin`, `?lang=mar` (English = no param).

```
src/content/site.js     # English — single source of truth for ALL copy
src/i18n/translations.js # merge engine + LANGUAGES list (deep-merges overrides onto English)
src/i18n/hin.js          # Hindi  — TEXT ONLY (omitted fields fall back to English)
src/i18n/mar.js          # Marathi — TEXT ONLY
src/i18n/LanguageContext.jsx # provider + useLanguage() hook; syncs ?lang= in the URL
```

How components read content:
```jsx
import { useLanguage } from "../i18n/LanguageContext"
const { hero, services } = useLanguage().t   // same shape as site.js exports
```
`t` is the active language's content, deep-merged over English — so any field a
translation doesn't provide automatically shows English.

**To edit English copy** → edit `src/content/site.js` only.
**To fix a translation** → edit the matching key in `hin.js` / `mar.js`.
**To add a language** → copy `hin.js` → `xx.js`, translate, then add it to `overrides` and `LANGUAGES` in `translations.js`. No component changes needed.

> Translation files only contain *translatable text*. Structural fields (hrefs, image paths, colours, numbers, names) live solely in `site.js` and are shared across all languages.

## Project Structure
```
output-site/
├── src/
│   ├── components/       # UI components (one per section)
│   ├── content/site.js   # ALL editable content
│   ├── pages/Home.jsx    # Single page; imports all sections
│   ├── layouts/          # SiteLayout wraps pages
│   ├── entry-server.jsx  # SSR entry for pre-rendering
│   └── main.jsx          # Client entry; hydrates if SSR present
├── scripts/
│   └── prerender.mjs     # SSR pre-render script (Vite SSR build)
├── public/
│   ├── robots.txt
│   ├── sitemap.xml       # Update lastmod when deploying
│   └── assets/           # Images, logos
├── index.html            # Template; contains all JSON-LD + meta tags
└── CLAUDE.md             # This file
```

## Deployment Stack
- **Host**: nginx serving `dist/` as static files
- **Build command**: `npm run prerender` (outputs to `dist/`)
- **No Node.js server needed** at runtime — pure static hosting
- See `.claude/specs/deployment.md` for nginx config details

## SEO Architecture
- JSON-LD (4 blocks: Organization, Service, FAQPage, WebSite) lives in `index.html` — static, no JS needed
- `react-helmet-async` manages per-page `<head>` updates at runtime
- `SEOHead` component in `src/components/SEOHead.jsx` — use it in every page
- SSR pre-render injects full HTML into `dist/index.html` before deploy
- See `.claude/specs/seo.md` for full SEO spec

## Key Rules
1. All user-facing text goes in `src/content/site.js`, never hardcoded in JSX
2. Phone number uses `tel:+919322365844` href format for mobile tap-to-call
3. New components that use browser-only APIs (window, document) must be lazy-loaded with `React.lazy` + `Suspense` — otherwise they break the SSR pre-render
4. Do not add `npm run build` as a postbuild hook — the prerender script calls build internally
5. Update `public/sitemap.xml` `<lastmod>` date on each deploy
6. Tailwind classes only — no inline CSS unless overriding a Tailwind limitation
