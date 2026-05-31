# SahyogAI — Phase 3 Design Brief
## next-2-prompt.md — Updated After Screenshot Review (2026-05-31)

---

## PROGRESS SINCE LAST REVIEW

### What's been implemented ✅
- All 8 industry filter states built (Retail, Hospitality, Logistics, Healthcare, Finance, Professional Services, Education, Real Estate)
- "All Industries" default 4×2 compact grid — correct layout, correct icons per industry
- Full nav (5 links + Book a Call) present on: Healthcare, Finance, Professional Services, Education, Real Estate screens
- Abstract icons in card image areas — correct per industry (shopping bag, fork, route, cross, graph line, document, graduation cap, building)
- Real Estate ₹0 stat is present and rendering
- Card anatomy (gradient image + eyebrow badge + title + AI label + divider + stat + bullets + CTA) is consistent

### What's still broken or missing ❌
1. **Nav on "All Industries" screen** — only shows logo + "AI-First" badge + "Book a Call" — 5 nav links are missing on this screen only
2. **Finance stat numbers not rendering** — the 3 Finance cards show stat labels but the actual numbers (5×, 70%, 2 days) are invisible or missing
3. **Footer missing from every single screen** — page ends after "Don't see your industry? Talk to us" on all frames
4. **Final CTA section missing from every screen** — the dark gradient close section is absent everywhere
5. **Filter pill order is inconsistent across screens** — each industry screen has a different pill order (see breakdown below)
6. **Excess white space in card bottoms** — individual industry cards have too much dead white space below the "See How It Works" CTA
7. **Education cards: all 3 use the same graduation cap icon** — needs differentiation
8. **Mobile frame** — still unbuilt

---

## PART 1 — FIXES ON EXISTING SCREENS

---

### FIX 1 — "All Industries" Screen: Add Missing Nav Links

**Only this one screen** is broken. All individual industry screens already have the full nav. Copy the nav component from the Healthcare or Professional Services screen and apply it to the All-state frame.

Full nav spec (already in previous brief — applying here for reference):
```
LEFT:    Logo + "AI-First" pill badge
CENTER:  Services · How It Works · Industries · About · Blog
         (Industries = bold + underline when on this section)
RIGHT:   phone number text + "Book a Call" gradient button
```

---

### FIX 2 — Finance Cards: Stat Numbers Not Rendering

All 3 Finance cards are missing their big stat numbers. The label text is there but the number itself is absent. This is a text layer visibility or fill issue.

**The three stats that must appear:**

| Card | Number | Label |
|---|---|---|
| Lead Qualification AI | **5×** | more qualified leads converted |
| KYC & Document Collection | **70%** | reduction in document follow-up time |
| Client Onboarding AI | **2 days** | average onboarding time (down from 2 weeks) |

**Gradient text spec for all stat numbers (unchanged):**
```
Fill:      Linear gradient, 135°
Stop 1:    #8b5cf6 at 0%   (secondary)
Stop 2:    #7c3bed at 50%  (primary)
Stop 3:    #c4b5fd at 100% (accent)
Font:      Manrope, 800 weight, 48px, line-height 1.0
```

Check: is the text layer clipped, hidden, or on a white fill? The Healthcare and Professional Services stats render correctly — compare those layers directly to find the difference.

---

### FIX 3 — Filter Pill Order Must Be Identical on Every Screen

Current pill order varies per screen — some screens don't have "All", some shuffle the industry order. This will break the interactive prototype and confuse developers.

**Canonical pill order — use this on every screen, no exceptions:**
```
All · Retail · Hospitality · Healthcare · Finance · Logistics · Professional Services · Education · Real Estate
```

Rules:
- "All" is always first, always leftmost
- The active industry pill is **not** moved to the front — it stays in its fixed position and just changes visual state (bg primary, white text)
- Inactive pills: border gray-200, bg white, text-muted
- Active pill: bg #7c3bed, text white, rounded-full
- Hover state: bg primary/10, text-primary

---

### FIX 4 — Card Bottom White Space

Individual industry cards have significant dead white space below "See How It Works →". The card height appears to be fixed at ~420px but the content only fills ~360px.

**Fix:** Make card height auto/hug-contents with a minimum height of 380px. Do not pad the bottom arbitrarily. The card should end ~20px below the "See How It Works →" link.

Card padding spec:
```
Top of content area (below image):   px-6 pt-5
Bottom of content area:               px-6 pb-6
Gap between elements:                 title → AI label: 4px
                                      AI label → divider: 12px
                                      divider → stat number: 12px
                                      stat label → bullets: 14px
                                      last bullet → CTA link: 16px
```

---

### FIX 5 — Education Cards: Differentiate Icons

All 3 Education cards currently use the same graduation cap icon. Each card represents a different function — the icon should reflect that.

```
Card 1 — Admissions & Enquiry AI:    WhatsApp speech bubble + sparkle icon
Card 2 — Student Support Bot:        Headset / support icon
Card 3 — Parent Communication AI:    People / community icon
```

All icons: white outline style, 32×32px, 20% opacity, centered in image area (same treatment as other industry cards).

---

## PART 2 — FOOTER AND FINAL CTA (STILL MISSING FROM EVERY FRAME)

This is the highest-priority gap. Every screen needs these two sections appended below the "Don't see your industry?" line.

---

### Section A — Final CTA

**Appears on:** every desktop and mobile frame, immediately above the footer

```
Background:   #0f172a (full width)
              + centered radial glow: ellipse 700×500px, #7c3bed at 12% opacity, blur 140px

Padding:      96px top · 64px bottom

Layout:       centered column, max-width 680px, all elements center-aligned
```

**Content stack (top to bottom):**

1. Eyebrow pill:
   ```
   Text:       "GET STARTED"
   Style:      rounded-full, border 1px solid rgba(196,181,253,0.4), bg rgba(196,181,253,0.08)
               text #c4b5fd, 11px, font-semibold, letter-spacing 0.12em, px-4 py-1.5
   ```

2. Headline (H2, white, centered):
   ```
   Line 1:  "Ready to Build a Business"     → plain white
   Line 2:  "That Runs Smarter?"            → "Smarter" = gradient text (same spec as stat numbers)
   Font:    Manrope 700, 48px, line-height 1.1
   ```

3. Subline:
   ```
   "Get a free 45-minute AI audit. We'll map 3 specific opportunities
    in your business — no pitch, no commitment."
   Font:    16px, #9ca3af, line-height 1.75, max-width 520px
   Margin:  20px below headline
   ```

4. CTA row (horizontal, centered, gap 16px):
   ```
   Primary button:   "Get My Free AI Audit"
                     bg linear-gradient(to right, #8b5cf6, #7c3bed)
                     rounded-xl, px-9 py-4, white text, font-semibold, 16px
                     shadow: 0 8px 24px rgba(124,59,237,0.35)

   Secondary link:   [WhatsApp icon]  "Or WhatsApp us now →"
                     no border, no bg, text white/70, 15px, font-medium
                     WhatsApp icon: green (#25d366), 20×20px, inline left
   ```

5. Trust row:
   ```
   ✓ Free   ✓ 45 minutes   ✓ No technical knowledge needed   ✓ No commitment
   Font:    12px, #6b7280, gap 20px, centered
   Each ✓:  text #7c3bed
   Margin:  20px below CTA row
   ```

---

### Section B — Footer

**Background:** continues #0f172a — no color break between CTA and footer

**Separator:** 1px solid rgba(255,255,255,0.06) — full width, above footer columns

**Footer columns (padding: 64px top · 40px bottom):**

```
Layout:   4 columns, max-width 1180px, mx-auto, gap 48px
Widths:   30% · 20% · 20% · 30%
```

**Column 1 — Brand (30%)**
```
- SahyogAI logo: white version (invert the existing logo)
- Tagline: "AI-First Business Transformation"
  13px, #9ca3af, font-medium, mt-8px
- Description:
  "Helping SMEs and local businesses grow through AI,
   automation, and modern technology."
  14px, #6b7280, line-height 1.65, mt-12px, max-width 220px
- Social icons (mt-20px, gap 10px, horizontal row):
  Each: 36×36px circle, bg rgba(255,255,255,0.08), border 1px solid rgba(255,255,255,0.10)
  Icon: 16px white/60
  Hover: bg rgba(255,255,255,0.15)
  Three icons: LinkedIn · Twitter/X · WhatsApp
```

**Column 2 — Services (20%)**
```
Header: "Services" — 14px, white, font-semibold, letter-spacing 0.05em, mb-16px
Links (gap 10px):
  AI Enablement
  Technology Enablement
  Automation
  Digital Transformation
  Case Studies
Each: 14px, #9ca3af, hover text-white, transition 200ms
```

**Column 3 — Company (20%)**
```
Header: "Company"
Links:
  About SahyogAI
  How We Work
  Industries
  Blog
  Careers
```

**Column 4 — Contact (30%)**
```
Header: "Get in Touch"
  hello@sahyogai.com       (mail icon 14px left, #9ca3af)
  +91 XXXXX XXXXX          (phone icon 14px left, #9ca3af, mt-8px)

Button (mt-16px):
  "Book a Free Call →"
  border 1px solid rgba(124,59,237,0.5), text #c4b5fd
  rounded-xl, px-5 py-2.5, 14px, font-semibold
  hover: bg rgba(124,59,237,0.12)
```

**Bottom bar:**
```
Separator:  1px solid rgba(255,255,255,0.06)
Padding:    20px top
Layout:     space-between, max-width 1180px, mx-auto

Left:   © 2025 SahyogAI. All rights reserved.   (12px, #4b5563)
Right:  Privacy Policy · Terms of Service · GST: [GSTIN]
        (12px, #4b5563, gap 20px, hover underline)
```

---

## PART 3 — MOBILE FRAME (375px) — STILL UNBUILT

Create these 4 mobile frames:

### Mobile Frame 1 — Full Page Scroll

All sections stacked vertically. Key adaptations:

| Section | Desktop | Mobile |
|---|---|---|
| Hero H1 | 72px, 2 lines | 38px, 3 lines, centered |
| Hero stat cards | 3 horizontal | Stack vertically, full width, gap 12px |
| Services | 2×2 grid | Single column |
| UVP dark section | 2-col side-by-side | Stack: headline copy first, comparison table below |
| How It Works | 4 steps horizontal | Vertical numbered list, left-aligned |
| AI services | 3-col grid | Single column |
| Metrics | 4 horizontal | 2×2 grid |
| Testimonials | 3 col | 1 card + horizontal swipe (show 1.1 cards) |
| Industries filter | All pills in 1 row | Horizontal scroll, no wrap |
| Industry cards | 3 col | 1 card visible + arrow swipe indicator |
| Final CTA | Wide layout | Stacked, full width buttons |
| Footer | 4 col | Stacked vertically, each section separated by thin line |

### Mobile Frame 2 — Nav Closed State
```
Logo left + "AI-First" badge   |   hamburger icon right (3 horizontal lines)
Height: 60px, bg white, border-bottom 1px solid #f3f4f6
```

### Mobile Frame 3 — Nav Open State
```
Same header as closed
Below: full-width dropdown panel slides down, bg white, shadow
Links (vertical stack, px-6 py-4 each, border-bottom gray-100):
  Services
  How It Works
  Industries
  About
  Blog
  ──────────────────
  +91 XXXXX XXXXX
  [Book a Call]  (full-width gradient button, py-3)
```

### Mobile Frame 4 — Industries Section (active filter)
```
Filter pills: horizontal scroll, pills do not wrap
Active pill stays in position, scrolled into view
Below: single card, full width (343px), card swipe with page dots below
"Don't see your industry? Talk to us →" below cards
```

### Mobile-Only Persistent Element — Sticky Bottom Bar
```
Position:   fixed bottom-0, full width, z-50, height 60px
Background: white
Border-top: 1px solid #f3f4f6
Shadow:     0 -4px 16px rgba(0,0,0,0.08)

Left half:  [WhatsApp icon #25d366]  "Chat with Us"
            14px, font-semibold, text-ink

Divider:    1px vertical line, #f3f4f6, centered, height 28px

Right half: [Calendar icon #7c3bed]  "Book a Call"
            14px, font-semibold, text-primary

Both halves: full tap area (30px each side), active state bg-gray-50
```

---

## PART 4 — NICE-TO-HAVE POLISH (DO AFTER P0 FIXES)

These are lower priority but improve quality before developer handoff.

### 4.1 — Trust Bar: Styled Wordmarks

Current plain text doesn't read as real logos. Apply distinct typographic treatments:
```
Mehta Electronics     → UPPERCASE, font-bold, tracking-tight
Sharma Co.            → Sentence case, font-light, tracking-widest
QuickServe            → CamelCase, font-extrabold, tracking-none
AxisRetail            → CamelCase, font-bold, tracking-tight
Fielddrop             → lowercase, font-medium, italic
CareLab               → Sentence case, font-semibold, tracking-wide
```
All: grayscale (no color fill), opacity 50%, hover opacity 80%.

### 4.2 — "Book a Call" Nav Button Weight

On some screens the button reads as outlined. It must be the full gradient:
```
Background: linear-gradient(to right, #8b5cf6, #7c3bed)
Text:       white, font-semibold, 14px
Padding:    px-5 py-2.5
Radius:     rounded-xl (12px)
```

### 4.3 — UVP Comparison Table Spacing

The Technology First vs Business First columns feel cramped. Fix:
- Row height: 44px (up from ~32px)
- Column gap: 20px padding between the two columns
- Column headers visual separation:
  ```
  "Technology First" → font-semibold, #f87171 (red-400), ✗ icon left, border-bottom pb-8
  "Business First"   → font-semibold, #34d399 (green-400), ✓ icon left, border-bottom pb-8
  ```

---

## SUMMARY — PRIORITY ORDER

| Priority | Screen / Fix | Status |
|---|---|---|
| 🔴 P0 | Finance card stat numbers (5×, 70%, 2 days) | ❌ Missing |
| 🔴 P0 | Footer + Final CTA on ALL screens | ❌ Missing |
| 🔴 P0 | Nav 5 links on "All Industries" screen | ❌ Missing on 1 screen |
| 🔴 P0 | Canonical filter pill order on every screen | ❌ Inconsistent |
| 🟡 P1 | Mobile 375px frames (4 frames) | ❌ Not started |
| 🟡 P1 | Card bottom white space reduction | ❌ Present on all industry cards |
| 🟡 P1 | Education card icons — differentiate 3 cards | ❌ All same icon |
| 🟢 P2 | Trust bar styled wordmarks | ❌ Still plain text |
| 🟢 P2 | Nav "Book a Call" gradient button weight | 🔶 Inconsistent |
| 🟢 P2 | UVP comparison table row spacing | 🔶 Too cramped |

---

### What's Already Done Well (Don't Touch)
- All 8 industry 3-card states — content and layout are correct ✅
- "All" 4×2 compact grid — icons and card structure correct ✅
- Healthcare and Professional Services stat gradient treatment — correct ✅
- Real Estate deep indigo gradient + building icons ✅
- Education lighter gradient + content ✅
- Card eyebrow badge placement and pill styling ✅
- "See How It Works →" CTA link styling ✅

---

*Updated: 2026-05-31 after screenshot review of 7 Figma frames*
*Refs: brand.md · prompt.md · next-prompt.md*
