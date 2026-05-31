// ─────────────────────────────────────────────────────────────────────────────
// i18n — how it works (for developers)
//
//   • English lives in  ../content/site.js   ← single source of truth.
//   • Each other language is a TEXT-ONLY override file (./hin.js, ./mar.js).
//   • At load time we deep-merge the override on top of English, so any field a
//     translation does not provide automatically falls back to English.
//
// To ADD a language:
//   1. Copy hin.js → xx.js, translate the strings.
//   2. import it below and add it to `overrides` + `LANGUAGES`.
//   That's it — no component changes needed.
//
// To EDIT English copy:  edit src/content/site.js (nowhere else).
// To EDIT a translation: edit the matching key in hin.js / mar.js.
// ─────────────────────────────────────────────────────────────────────────────
import * as site from "../content/site"
import { hin } from "./hin"
import { mar } from "./mar"

// Languages shown in the picker. `code` is what appears in ?lang=<code>.
export const LANGUAGES = [
  { code: "en",  nativeLabel: "English", flag: "🇬🇧" },
  { code: "hin", nativeLabel: "हिंदी",   flag: "🇮🇳" },
  { code: "mar", nativeLabel: "मराठी",   flag: "🇮🇳" },
]

export const DEFAULT_LANG = "en"

// English content assembled from the single source of truth.
const en = {
  siteConfig:     site.siteConfig,
  nav:            site.nav,
  hero:           site.hero,
  trustBar:       site.trustBar,
  services:       site.services,
  uvp:            site.uvp,
  howItWorks:     site.howItWorks,
  aiServices:     site.aiServices,
  metrics:        site.metrics,
  testimonials:   site.testimonials,
  industriesData: site.industriesData,
  cta:            site.cta,
  footer:         site.footer,
  contact:        site.contact,
  booking:        site.booking,
  ui:             site.ui,
}

// Text-only overrides per language.
const overrides = { hin, mar }

// Deep-merge: objects merge by key, arrays merge element-by-element by index
// (so a translation only needs to supply the fields that change). Anything the
// override omits keeps the English value.
function deepMerge(base, override) {
  if (override === undefined || override === null) return base
  if (Array.isArray(base) && Array.isArray(override)) {
    return base.map((item, i) =>
      i < override.length ? deepMerge(item, override[i]) : item
    )
  }
  if (
    base && typeof base === "object" && !Array.isArray(base) &&
    override && typeof override === "object" && !Array.isArray(override)
  ) {
    const out = { ...base }
    for (const key of Object.keys(override)) {
      out[key] = deepMerge(base[key], override[key])
    }
    return out
  }
  // primitive (or shape mismatch) → override wins
  return override
}

// Pre-compute merged content for every language once.
const content = {
  en,
  hin: deepMerge(en, overrides.hin),
  mar: deepMerge(en, overrides.mar),
}

export function getContent(lang) {
  return content[lang] || content[DEFAULT_LANG]
}
