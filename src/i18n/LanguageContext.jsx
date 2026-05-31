import { createContext, useContext, useState, useEffect, useCallback, useRef } from "react"
import { LANGUAGES, DEFAULT_LANG, getContent } from "./translations"
import { trackLanguageChange } from "../analytics/events"
import { setUserLanguage } from "../analytics/ga"

const VALID_CODES = new Set(LANGUAGES.map((l) => l.code))

const LanguageContext = createContext(null)

function getLangFromURL() {
  if (typeof window === "undefined") return DEFAULT_LANG
  const param = new URLSearchParams(window.location.search).get("lang")
  return VALID_CODES.has(param) ? param : DEFAULT_LANG
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG)
  // Mirror of `lang` for use inside the stable setLang callback (avoids stale closure).
  const langRef = useRef(DEFAULT_LANG)
  useEffect(() => { langRef.current = lang }, [lang])

  // Sync from URL on mount (after hydration) so ?lang=hin works on shared links.
  useEffect(() => {
    const initial = getLangFromURL()
    setLangState(initial)
    // Record the language the visitor actually lands on (incl. shared ?lang= links)
    // as a GA4 user property, so every event is segmentable by language.
    setUserLanguage(initial)
  }, [])

  const setLang = useCallback((code) => {
    if (!VALID_CODES.has(code)) return
    const prev = langRef.current
    if (code !== prev) {
      trackLanguageChange(code, prev) // GA4: explicit user-initiated switch
      setUserLanguage(code)
    }
    setLangState(code)
    const url = new URL(window.location.href)
    if (code === DEFAULT_LANG) {
      url.searchParams.delete("lang")
    } else {
      url.searchParams.set("lang", code)
    }
    window.history.replaceState(null, "", url.toString())
  }, [])

  // `t` is the fully-merged content for the active language (same shape as site.js).
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: getContent(lang), LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
