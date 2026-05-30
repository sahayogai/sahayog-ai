# Tech Stack Spec

## Frontend
| Package | Version | Role |
|---|---|---|
| React | 19 | UI framework |
| React DOM | 19 | Client + server rendering (`createRoot`, `hydrateRoot`, `renderToString`) |
| Vite | 8 | Build tool, dev server, SSR bundler |
| Tailwind CSS | 3 | Utility-first styling |
| Framer Motion | 12 | Animations (SSR-safe; renders initial state inline during pre-render) |
| React Router DOM | 7 | Client-side routing (library mode, not framework mode) |
| React Helmet Async | 3 | Dynamic `<head>` management; needs `HelmetProvider` in both `main.jsx` and `entry-server.jsx` |
| @calcom/embed-react | 1.5 | Cal.com booking widget — **browser-only**, must be `React.lazy` loaded |

## Build & Dev
| Tool | Role |
|---|---|
| `@vitejs/plugin-react` | JSX transform, Fast Refresh |
| PostCSS + Autoprefixer | Tailwind processing |
| ESLint | Linting |

## SSR / Pre-render (no runtime server)
- `react-dom/server` — `renderToString` in `src/entry-server.jsx`
- `react-router-dom` — `StaticRouter` for server-side routing (React Router v7 exports `StaticRouter` from the main entry, not `/server`)
- `scripts/prerender.mjs` — Node.js script that calls Vite's `build()` API twice (client + SSR), renders routes, writes `dist/index.html`

## Deployment
- **Runtime**: None — static files only
- **Web server**: nginx
- **Artifact**: `dist/` folder produced by `npm run prerender`

## Browser Support
Modern browsers + mobile Safari. No IE11. Tailwind's JIT output is the CSS constraint.
