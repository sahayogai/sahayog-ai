/**
 * ga.js — Core Google Analytics 4 engine for SahyogAI.
 *
 * Design goals (matches this codebase's conventions):
 *   • Config-driven  — the Measurement ID comes from VITE_GA_MEASUREMENT_ID,
 *                       never hardcoded. No ID → every call is a silent no-op.
 *   • SSR-safe       — zero top-level `window` access. The pre-render
 *                       (entry-server.jsx) imports components that import this
 *                       module; nothing here runs until a real event fires.
 *   • Single config  — the base gtag.js tag + initial `config` live in
 *                       index.html (loads before React). This module only
 *                       SENDS events, updates consent, and sets user props.
 *
 * The browser-side gtag function and dataLayer are bootstrapped in index.html.
 * Here we just push to them when they exist.
 */

// Public GA4 Measurement ID. This is NOT a secret — it's exposed in the page
// source on every site that uses GA — so it's committed as the production
// default. That way the tag works on every production build (incl. building on
// the deploy server, where the git-ignored .env doesn't exist).
const FALLBACK_MEASUREMENT_ID = "G-S4E7GRZXPT"

// Resolution order:
//   1. VITE_GA_MEASUREMENT_ID from .env  → overrides (e.g. a staging property)
//   2. the committed production default  → only in production builds
//   3. "" in dev                         → analytics OFF locally, so dev/localhost
//                                           traffic never pollutes the prod property
export const MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID ||
  (import.meta.env.PROD ? FALLBACK_MEASUREMENT_ID : "")

export const DEBUG = import.meta.env.VITE_GA_DEBUG === "true"

const isBrowser = () => typeof window !== "undefined"

/** True only when we're in a browser, an ID is configured, and gtag exists. */
export function isEnabled() {
  return isBrowser() && !!MEASUREMENT_ID && typeof window.gtag === "function"
}

/** Low-level gtag passthrough — guarded. */
function gtag(...args) {
  if (isBrowser() && typeof window.gtag === "function") {
    window.gtag(...args)
  }
}

/**
 * Send a GA4 event.
 * @param {string} name   snake_case event name (GA4 convention, <=40 chars)
 * @param {object} params event parameters
 */
export function track(name, params = {}) {
  // Strip undefined/null so GA4 doesn't store empty params.
  const clean = {}
  for (const k in params) {
    if (params[k] !== undefined && params[k] !== null) clean[k] = params[k]
  }

  if (DEBUG) {
    console.debug(`[GA4]${isEnabled() ? "" : " (no-op)"} event:`, name, clean)
  }

  if (!isEnabled()) return
  gtag("event", name, clean)
}

/**
 * Set the visitor's language as a global event param AND a user property,
 * so every subsequent event is segmentable by language without re-passing it.
 */
export function setUserLanguage(language) {
  if (!isEnabled()) return
  gtag("set", { language })
  gtag("set", "user_properties", { preferred_language: language })
}

/* ── Consent Mode v2 ─────────────────────────────────────────────────────────
   Defaults are set in index.html (analytics granted, ads denied). These let the
   consent banner update the choice at runtime. */

export function grantConsent({ ads = true } = {}) {
  if (!isBrowser()) return
  gtag("consent", "update", {
    analytics_storage: "granted",
    ...(ads
      ? { ad_storage: "granted", ad_user_data: "granted", ad_personalization: "granted" }
      : {}),
  })
}

export function denyAdConsent() {
  if (!isBrowser()) return
  gtag("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  })
}

let bootstrapped = false

/**
 * Bootstrap GA4 (client-only; called once from main.jsx). Sets up gtag.js +
 * Consent Mode v2 in the correct order: dataLayer → consent defaults → load
 * library → config. No-ops when there's no Measurement ID (dev builds).
 */
export function initAnalytics() {
  if (!isBrowser() || bootstrapped) return
  bootstrapped = true

  if (!MEASUREMENT_ID) {
    if (DEBUG) console.debug("[GA4] disabled — no Measurement ID (dev build)")
    return
  }

  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() { window.dataLayer.push(arguments) }
  }

  // Consent Mode v2 — safe defaults BEFORE the library processes any command.
  // First-party analytics granted; ad signals denied until the visitor opts in.
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "granted",
    wait_for_update: 500,
  })

  // Returning visitor who previously accepted all → restore ad consent.
  try {
    if (window.localStorage.getItem("sahyog_consent") === "all") grantConsent({ ads: true })
  } catch {
    /* localStorage unavailable (private mode) — keep denied defaults. */
  }

  // Load the gtag.js library, then send the initial config + page_view.
  const s = document.createElement("script")
  s.async = true
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + MEASUREMENT_ID
  document.head.appendChild(s)

  window.gtag("js", new Date())
  window.gtag("config", MEASUREMENT_ID, {
    send_page_view: true,
    debug_mode: DEBUG,
  })

  if (DEBUG) console.debug(`[GA4] ready — ${MEASUREMENT_ID}, debug_mode on`)
}
