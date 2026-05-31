/**
 * events.js — SahyogAI's GA4 event dictionary + semantic helpers.
 *
 * One place to define every event name and its parameters, so the data stays
 * consistent across components and the GA4 Explore reports (funnels / paths)
 * line up. Import the helper, not raw track(), from components.
 *
 * Marked "KEY EVENT" below = mark as a Key Event / conversion in the GA4 UI.
 * See ANALYTICS.md for the full plan.
 */

import { track } from "./ga"

/** Canonical event names (snake_case, GA4 convention). */
export const EVENTS = {
  SECTION_VIEW: "section_view", // scroll funnel backbone (one-pager)
  CTA_CLICK: "cta_click", // any "Book a call" / primary button
  CONTACT_CLICK: "contact_click", // KEY EVENT — whatsapp / phone / email
  INDUSTRY_SELECT: "industry_select", // vertical interest (segmentation)
  LANGUAGE_CHANGE: "language_change", // en / hin / mar audience signal

  // Booking (Cal.com) — the primary macro-conversion
  BOOKING_WIDGET_READY: "booking_widget_ready",
  BOOKING_STARTED: "booking_started",
  GENERATE_LEAD: "generate_lead", // KEY EVENT — booking confirmed (GA4 recommended event)

  // Voice agent "Arjun" — secondary engagement / conversion
  VOICE_AGENT_START: "voice_agent_start",
  VOICE_AGENT_PERMISSION_DENIED: "voice_agent_permission_denied",
  VOICE_AGENT_CONNECTED: "voice_agent_connected", // KEY EVENT (engaged live demo)
  VOICE_AGENT_ERROR: "voice_agent_error",
  VOICE_AGENT_END: "voice_agent_end",
}

/** Ordered list driving the scroll funnel — keep in DOM order. */
export const SECTION_ORDER = [
  "hero",
  "services",
  "uvp",
  "how_it_works",
  "ai_services",
  "metrics",
  "testimonials",
  "industries",
  "cta",
  "booking",
]

/* ── Helpers ───────────────────────────────────────────────────────────────── */

/** A section scrolled into view (fired once per section). */
export function trackSectionView(section) {
  const index = SECTION_ORDER.indexOf(section)
  track(EVENTS.SECTION_VIEW, {
    section_name: section,
    section_index: index === -1 ? undefined : index + 1, // 1-based funnel step
  })
}

/**
 * A call-to-action / button click.
 * @param {string} id        stable id e.g. "hero_primary", "nav_book"
 * @param {object} extra     { text, location, url }
 */
export function trackCTA(id, { text, location, url } = {}) {
  track(EVENTS.CTA_CLICK, {
    cta_id: id,
    cta_text: text,
    cta_location: location,
    link_url: url,
  })
}

/**
 * High-intent contact click — WhatsApp / phone / email. (Mark as Key Event.)
 * @param {"whatsapp"|"phone"|"email"} method
 * @param {string} location  where on the page it was clicked
 */
export function trackContact(method, location) {
  track(EVENTS.CONTACT_CLICK, { method, contact_location: location })
}

/** Visitor picked an industry vertical (Industries filter / card). */
export function trackIndustrySelect(industry, source = "filter") {
  track(EVENTS.INDUSTRY_SELECT, { industry, source })
}

/** Visitor switched UI language. */
export function trackLanguageChange(language, previous_language) {
  track(EVENTS.LANGUAGE_CHANGE, { language, previous_language })
}

/* Booking funnel (Cal.com) */
export function trackBookingWidgetReady() {
  track(EVENTS.BOOKING_WIDGET_READY)
}
export function trackBookingStarted(detail = {}) {
  track(EVENTS.BOOKING_STARTED, detail)
}
/** Booking confirmed — the goal. Mark generate_lead as a Key Event in GA4. */
export function trackBookingSuccess(detail = {}) {
  track(EVENTS.GENERATE_LEAD, {
    currency: "INR",
    value: 0, // free strategy call; set a lead value here if you assign one
    method: "cal_booking",
    ...detail,
  })
}

/* Voice agent "Arjun" lifecycle */
export const voiceAgent = {
  start: () => track(EVENTS.VOICE_AGENT_START),
  permissionDenied: () => track(EVENTS.VOICE_AGENT_PERMISSION_DENIED),
  connected: () => track(EVENTS.VOICE_AGENT_CONNECTED),
  error: (context) => track(EVENTS.VOICE_AGENT_ERROR, { error_context: context }),
  end: ({ durationSeconds, reason } = {}) =>
    track(EVENTS.VOICE_AGENT_END, {
      duration_seconds: durationSeconds,
      end_reason: reason, // "user_ended" | "timeout"
    }),
}
