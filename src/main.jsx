import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './i18n/LanguageContext'
import { initAnalytics } from './analytics/ga'
import './index.css'
import App from './App.jsx'

// Client-only: re-applies stored consent + logs status in debug mode.
// The base gtag.js tag already loaded + sent the first page_view from index.html.
initAnalytics()

const rootEl = document.getElementById('root')

const tree = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

// childElementCount > 0 means pre-rendered HTML is present (SSR build).
// A plain comment node (<!--ssr-outlet-->) is NOT an element, so dev / npm run build
// both fall through to createRoot and work as a normal React app.
if (rootEl.childElementCount > 0) {
  hydrateRoot(rootEl, tree)
} else {
  createRoot(rootEl).render(tree)
}
