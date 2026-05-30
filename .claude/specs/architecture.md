# Architecture Spec

## App Structure

```
BrowserRouter (main.jsx — client only)
└── HelmetProvider
    └── App.jsx
        └── Routes
            └── Route "/"
                └── SiteLayout
                    ├── Navbar
                    ├── Home.jsx (page)
                    │   ├── SEOHead (react-helmet-async)
                    │   ├── HeroSection
                    │   ├── ComparisonSection
                    │   ├── FeaturesSection
                    │   ├── HowItWorks
                    │   └── Suspense → BookingSection (lazy)
                    └── Footer
```

## SSR Pre-render Flow

```
npm run prerender
     │
     ├─ 1. vite build()          → dist/       (client bundle)
     │
     ├─ 2. vite build({ ssr })   → dist-ssr/   (Node.js bundle)
     │       entry: src/entry-server.jsx
     │       StaticRouter + HelmetProvider + App
     │
     ├─ 3. renderToString("/")
     │       BookingSection is lazy → Suspense fallback renders
     │       (CalCom code is never executed server-side)
     │
     ├─ 4. Inject rendered HTML into dist/index.html
     │       template.replace("<!--ssr-outlet-->", appHtml)
     │
     ├─ 5. rm -rf dist-ssr/
     │
     └─ dist/index.html now has full HTML + JSON-LD + meta tags
```

## Client Hydration Decision

```js
// main.jsx
if (rootEl.childElementCount > 0) {
  hydrateRoot(rootEl, tree)   // pre-rendered HTML present → hydrate
} else {
  createRoot(rootEl).render(tree)  // dev / plain build → fresh mount
}
```

`childElementCount` (not `hasChildNodes`) is used so the `<!--ssr-outlet-->` HTML comment node (present in index.html before pre-render) doesn't trigger hydration.

## Content Data Flow

```
src/content/site.js
       │
       ├── nav, hero, comparison, features, process, booking, footer
       ├── siteConfig  (url, name, description, ogImage)
       └── contact     (phone, phoneDisplay, phoneHref)
             │
             └── imported by every component that needs it
```

All content is co-located in `site.js`. Components are purely presentational.

## Adding a New Page

1. Create `src/pages/NewPage.jsx` — include `<SEOHead title="..." description="..." />`
2. Add `<Route path="/new-page" element={<NewPage />} />` in `App.jsx`
3. Add the route to `scripts/prerender.mjs` routes array: `const routes = ['/', '/new-page']`
4. Add a `<url>` entry to `public/sitemap.xml`

## Adding a New Component with Browser APIs

Wrap it with `React.lazy` + `Suspense` in the page file. Never statically import browser-only dependencies — they will crash the SSR build.

```jsx
const MyWidget = lazy(() => import('../components/MyWidget'))
// ...
<Suspense fallback={<div>Loading...</div>}>
  <MyWidget />
</Suspense>
```
