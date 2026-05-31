import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './i18n/LanguageContext'
import './index.css'
import App from './App.jsx'

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
