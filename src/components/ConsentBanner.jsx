/**
 * ConsentBanner — minimal Google Consent Mode v2 control.
 *
 * The safe defaults in index.html already GRANT first-party analytics and DENY
 * all ad signals. This banner lets the visitor upgrade ad consent ("Accept all")
 * or keep it denied ("Essential only"), and remembers the choice. Consent Mode v2
 * is required for Google Ads/remarketing features and is good privacy hygiene.
 *
 * Only renders when a Measurement ID is configured. Delete the <ConsentBanner/>
 * line in SiteLayout.jsx to remove it entirely.
 */

import { useState, useEffect } from "react"
import { MEASUREMENT_ID, grantConsent, denyAdConsent } from "../analytics/ga"

const STORAGE_KEY = "sahyog_consent"

export default function ConsentBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!MEASUREMENT_ID) return // analytics not configured → no banner
    let shouldShow
    try {
      shouldShow = !window.localStorage.getItem(STORAGE_KEY)
    } catch {
      shouldShow = true // localStorage blocked — still offer the choice
    }
    // One-time mount read of the stored consent choice. This effect is client-only
    // (inert during SSR pre-render), so reading localStorage here is safe.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShow(shouldShow)
  }, [])

  const choose = (value) => {
    try { window.localStorage.setItem(STORAGE_KEY, value) } catch { /* ignore */ }
    if (value === "all") grantConsent({ ads: true })
    else denyAdConsent()
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-[9990]">
      <div className="rounded-2xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.18)] border border-gray-100 p-4 sm:p-5">
        <p className="text-sm text-gray-600 leading-relaxed">
          We use cookies to understand how visitors use SahyogAI and to improve your
          experience. Analytics is always privacy-first; you choose whether to allow
          personalised ads.
        </p>
        <div className="mt-3 flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => choose("all")}
            className="bg-gradient-btn hover:opacity-90 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-opacity duration-200"
          >
            Accept all
          </button>
          <button
            onClick={() => choose("essential")}
            className="border border-gray-200 text-gray-600 hover:bg-gray-50 font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors duration-200"
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  )
}
