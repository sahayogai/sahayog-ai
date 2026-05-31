import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { LanguageProvider } from "./i18n/LanguageContext"
import App from "./App"

export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </StaticRouter>
    </HelmetProvider>
  )
  return { html, helmet: helmetContext.helmet }
}
