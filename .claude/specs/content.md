# Content Spec

## Single Source of Truth

All editable content lives in:
```
output-site/src/content/site.js
```

Never hardcode business content in JSX components.

## Exported Objects

| Export | Contains |
|---|---|
| `siteConfig` | Domain URL, site name, default meta description, OG image URL |
| `contact` | Phone number (raw, display format, `tel:` href) |
| `nav` | Brand name, nav links, CTA button |
| `hero` | Heading lines, subheading, CTA |
| `comparison` | Left column (old way) + right column (FutureFlow system) |
| `integrations` | Heading, logos list |
| `features` | Heading, 6 feature cards (title, body, image path) |
| `process` | 3 steps (number, title, body) |
| `booking` | Section heading |
| `footer` | Brand, links, copyright text |

## Phone Number

```js
export const contact = {
  phone: "9322365844",
  phoneDisplay: "+91 93223 65844",
  phoneHref: "tel:+919322365844",
}
```

Changing the phone number here updates: Navbar (desktop + mobile), Footer, and JSON-LD in `index.html` (update separately — it's a static `<script>` block).

## Images

All images live in `output-site/public/assets/`. Reference as `/assets/filename.png` in JSX and in `site.js`.

Feature card images: `/assets/features/<name>.png`

## Updating the Domain

When the production domain changes:
1. `siteConfig.url` in `site.js`
2. All `<meta>` og/twitter/canonical tags in `index.html`
3. All `@context` JSON-LD entries in `index.html`
4. `public/sitemap.xml` — all `<loc>` values
5. `public/robots.txt` — `Sitemap:` line
