# SahyogAI — Google Analytics 4 Measurement Plan

This document is the single source of truth for how SahyogAI is measured in GA4:
the user-flow model, the event dictionary, and the exact GA4 UI steps that turn
the data into flow visualizations.

> **One-line setup:** put your GA4 Measurement ID in `.env` as
> `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`, run `npm run prerender`, deploy. Done.

---

## 1. Why this plan looks the way it does

SahyogAI is a **single-page, prerendered landing page**. There are no page-to-page
journeys, so GA4's default `page_view` report tells you almost nothing. The real
questions a marketer asks here are:

1. How far down the page do people get before they leave? (scroll funnel)
2. Which call-to-action actually drives bookings? (attribution)
3. Do visitors reach and *use* the two conversion surfaces — the **Cal.com booking
   widget** and the **"Talk to Arjun" voice agent**?
4. Which **industry** and which **language** does the traffic skew to?

So the implementation is built around **engagement events**, not pageviews.

---

## 2. The user flow we instrument

```
   Google / Ads / WhatsApp / Direct
                │
                ▼
   page_view + session_start          ← gtag.js (index.html), language user-property set
                │
                ▼
   ── SCROLL FUNNEL (section_view, 1 per section, fired once) ──────────────────
   hero → services → uvp → how_it_works → ai_services → metrics →
        testimonials → industries → cta → booking
        │                          │                       │
        │             industry_select (vertical interest)  │
        ▼                                                   ▼
   ── MICRO-CONVERSIONS (intent) ───────────────────────────────────────────────
   cta_click  (hero / nav / uvp / industries / footer "Book")
   contact_click  (whatsapp · phone · email)      ← KEY EVENT
   language_change  (en · hin · mar)
                │
                ▼
   ── MACRO-CONVERSIONS (the goal) ─────────────────────────────────────────────
   📅 Cal.com:  booking_widget_ready → booking_started → generate_lead   ← KEY EVENT
   🎙️ Voice "Arjun":  voice_agent_start → voice_agent_connected → voice_agent_end
                        (also: permission_denied, error; end carries duration + reason)
```

GA4 renders this as a **Funnel exploration** (drop-off per step) and a
**Path exploration** (what people actually do). See §5.

---

## 3. Event dictionary

All events are snake_case (GA4 convention). Names + params are centralized in
[`src/analytics/events.js`](src/analytics/events.js); the gtag transport is in
[`src/analytics/ga.js`](src/analytics/ga.js).

| Event | When it fires | Key parameters |
|---|---|---|
| `page_view` | Automatic on load (gtag config) | (standard) |
| `scroll` | Automatic at 90% depth (Enhanced Measurement) | (standard) |
| `section_view` | A section first scrolls into view (once each) | `section_name`, `section_index` (1–10) |
| `cta_click` | Any CTA / nav button click | `cta_id`, `cta_text`, `cta_location`, `link_url` |
| `contact_click` | WhatsApp / phone / email click **(KEY EVENT)** | `method`, `contact_location` |
| `industry_select` | Industries filter pill / card chosen | `industry`, `source` (filter\|card) |
| `language_change` | Visitor switches UI language | `language`, `previous_language` |
| `booking_widget_ready` | Cal.com embed finished loading | — |
| `booking_started` | Cal.com event type selected | — |
| `generate_lead` | Cal.com booking confirmed **(KEY EVENT)** | `method=cal_booking`, `currency=INR`, `value`, `booking_uid`, `event_type` |
| `voice_agent_start` | User taps "Talk to Arjun" | — |
| `voice_agent_permission_denied` | Mic permission refused | — |
| `voice_agent_connected` | Live conversation established **(KEY EVENT)** | — |
| `voice_agent_error` | Connection error | `error_context` |
| `voice_agent_end` | Session ends | `duration_seconds`, `end_reason` (user_ended\|timeout) |

**User property:** `preferred_language` (`en` / `hin` / `mar`) — set on load and on
every switch, so any report can be segmented by language.

`section_name` values, in funnel order: `hero, services, uvp, how_it_works,
ai_services, metrics, testimonials, industries, cta, booking`.

`cta_id` values: `hero_primary, hero_secondary, nav_book, nav_anchor,
cta_section_primary, footer_book, industry_card_book, industries_bottom`.

---

## 4. One-time setup in the GA4 UI

After events start flowing (verify in **DebugView** with `VITE_GA_DEBUG=true`):

### 4a. Mark Key Events (conversions)
**Admin → Events → mark as key event:**
- `generate_lead` — primary conversion (a booked demo)
- `contact_click` — high-intent lead (WhatsApp / call / email)
- `voice_agent_connected` — engaged live product demo

### 4b. Register custom dimensions
**Admin → Custom definitions → Create custom dimension** (event-scoped) for each
param you want to slice by — at minimum:
`section_name`, `cta_id`, `cta_location`, `method`, `industry`, `end_reason`.
Plus one user-scoped dimension: `preferred_language`.
*(Custom dimensions are required before these params appear in Explore reports.)*

### 4c. Confirm Enhanced Measurement
**Admin → Data Streams → Web → Enhanced measurement = ON** (page views, scroll,
outbound clicks, site search). This complements the custom events above.

### 4d. Link Google Ads (if running ads)
**Admin → Product links → Google Ads** → import `generate_lead` + `contact_click`
as conversions. Consent Mode v2 is already wired (see §6), so bid signals work.

---

## 5. Building the flow visualizations (GA4 Explore)

### Funnel exploration — "Where do visitors drop off?"
**Explore → Funnel exploration.** Add steps (each = an event condition):
1. `section_view` where `section_name = hero`
2. `section_view` where `section_name = services`
3. `section_view` where `section_name = industries`
4. `section_view` where `section_name = booking`
5. `generate_lead`

Toggle **"Make open funnel"** off for strict drop-off. Add breakdown by
`preferred_language` or `industry` to compare segments.

### Path exploration — "What do visitors actually do?"
**Explore → Path exploration.** Start point = `session_start` (or `section_view`
hero). GA4 shows the branching tree of subsequent events — you'll see how many go
hero → … → `cta_click` → `generate_lead` vs. drop off, and how the voice agent
path compares.

### Free-form — "Which CTA drives bookings?"
**Explore → Free form.** Rows = `cta_id`, Values = event count + (as a secondary
table) `generate_lead` count. Reveals which button earns its place.

### Suggested custom reports
- Industry interest: `industry` dimension × event count (`industry_select`).
- Language mix: `preferred_language` × users.
- Voice-agent funnel: `voice_agent_start` → `voice_agent_connected`, plus average
  `duration_seconds` and `end_reason` split.

---

## 6. Privacy / Consent Mode v2

Defaults are set in [`index.html`](index.html) **before** any tag fires:
`analytics_storage = granted`, all `ad_*` signals = `denied`. The
[`ConsentBanner`](src/components/ConsentBanner.jsx) lets visitors **Accept all**
(grants ad signals) or keep **Essential only**; the choice is stored in
`localStorage` and re-applied on return. To tighten for strict EEA compliance,
change `analytics_storage` to `denied` in the index.html default block.

---

## 7. How it's wired in code

| File | Role |
|---|---|
| [`index.html`](index.html) | gtag.js loader + Consent Mode v2 defaults + initial `config` (env-guarded) |
| [`src/analytics/ga.js`](src/analytics/ga.js) | `track()`, consent updates, user props, `initAnalytics()` |
| [`src/analytics/events.js`](src/analytics/events.js) | event names + typed helper functions (the public API) |
| [`src/analytics/TrackSection.jsx`](src/analytics/TrackSection.jsx) | IntersectionObserver → `section_view` |
| [`src/components/ConsentBanner.jsx`](src/components/ConsentBanner.jsx) | Consent Mode v2 UI |
| `main.jsx`, `Home.jsx`, `Navbar`, `HeroSection`, `CTASection`, `Footer`, `IndustriesSection`, `BookingSection`, `ConversationalAgent`, `LanguageContext` | call-site instrumentation |

**Safety:** every analytics call no-ops when there's no Measurement ID or during
SSR pre-render, so dev builds and un-configured deploys stay clean and error-free.
To add a new event, add a helper in `events.js` and call it — never call `gtag`
directly from a component.
