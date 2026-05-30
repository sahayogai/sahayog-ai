# SEO Spec

## Strategy: Pre-rendered Static HTML

Google can render JavaScript, but pre-rendered HTML guarantees:
- Full content on the first byte (no render-blocking)
- Faster Largest Contentful Paint (LCP)
- JSON-LD structured data always visible, regardless of JS execution

## JSON-LD Blocks (in index.html — static, not JS-dependent)

| Schema | Purpose |
|---|---|
| `Organization` | Business name, phone, logo, URL |
| `Service` | AI Voice Agent service description, area served |
| `FAQPage` | 5 Q&A pairs → Google rich snippets in SERP |
| `WebSite` | Sitelinks searchbox eligibility |

To add/edit FAQ questions: edit the `FAQPage` block in `output-site/index.html` directly.

## Meta Tags (in index.html)

- `<title>` — keyword-rich, under 60 chars
- `<meta name="description">` — 150–160 chars, includes phone number
- `<meta name="keywords">` — secondary signal
- `<meta name="robots">` — `index, follow, max-snippet:-1, max-image-preview:large`
- `<link rel="canonical">` — always the production domain (no trailing variation)
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- Twitter Card (`twitter:card=summary_large_image`)

## Dynamic Head (react-helmet-async)

`SEOHead` component (`src/components/SEOHead.jsx`) overrides head tags per page:

```jsx
<SEOHead
  title="Page Title"          // → "Page Title | SahyogAI"
  description="..."           // overrides default
  canonical="https://..."     // overrides siteConfig.url
  ogImage="https://..."       // overrides siteConfig.ogImage
/>
```

Use `SEOHead` (with no props) on the home page for defaults, and with props on any new pages.

## Files to Keep Updated

| File | When to update |
|---|---|
| `public/sitemap.xml` | Every deploy — update `<lastmod>` |
| `public/robots.txt` | When adding/blocking new routes |
| `index.html` JSON-LD | When business info or FAQs change |
| `src/content/site.js` `siteConfig` | When domain or tagline changes |

## Core Web Vitals Considerations

- BookingSection (Cal.com) is lazy-loaded — does not block initial render
- Framer Motion animations start from `opacity: 0` in the pre-rendered HTML; React hydration restores them quickly (< 1s on fast connections)
- Images should have explicit `width` and `height` attributes to prevent layout shift (CLS)
- nginx serves `assets/` with 1-year cache + `immutable` — Vite fingerprints filenames

## Sitemap Strategy

`public/sitemap.xml` is a static file served by nginx.
Add a new `<url>` entry for every new page route.
Priority: home = 1.0, other pages = 0.8.

## Target Keywords

Primary:
- "AI voice agent India"
- "AI sales automation India"
- "automated lead follow-up India"

Secondary:
- "AI telecaller replacement"
- "lead qualification AI"
- "CRM AI integration India"
- "AI calling system"
