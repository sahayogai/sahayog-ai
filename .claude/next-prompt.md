# SahyogAI — Next Iteration Design Prompt
## Critical Business Analysis + Phase 2 Design Brief

---

## What the Current Design Gets Wrong (Business View)

Before the next screens are built, the designer needs to understand why the current design underperforms as a **conversion tool** — not just as a visual artifact.

---

### Problem 1: Two Equal CTAs = No Conversion

The hero has "Book Free Consultation" and "See How It Works →" as near-identical buttons. **This is a conversion killer.** When two options look the same, visitors choose neither. The human brain stalls on equal-weight choices.

**Fix:** Primary CTA is a large gradient button. Secondary CTA is a plain text link with an arrow — not a button at all. The visual hierarchy must do the work.

---

### Problem 2: Zero Real Proof

The trust bar says "Trusted by growing businesses across" but shows **text placeholders styled as logos.** The testimonials use generic Indian names with no photos, no company logos, no specific numbers. This reads as fabricated and actively damages trust for a new company.

**SME business owners in India are highly skeptical of AI vendors.** They've been burned by promises. If the proof isn't specific and verifiable, they bounce.

**Fix:** Replace fabricated proof with one of:
(a) Real client logos + real named testimonials, OR
(b) A "Pilot Program" offer that sidesteps the need for social proof entirely ("Be one of our first 10 pilot clients — results guaranteed or you don't pay")

---

### Problem 3: Page Never Answers "Is This For Me?"

The hero speaks to "SMEs and local businesses" but never shows a specific business owner what their life looks like before vs. after SahyogAI. An SME owner running a restaurant, clinic, or retail store reads the hero and thinks: *"Is this for a big company or for someone like me?"*

The industries section (Smart Inventory, Voice AI Reservations, Automated Operations) answers this question — but it's at the **very bottom of a 6000px page.** 90% of visitors never scroll that far.

**Fix:** Move concrete industry use cases to position 2 on the page — immediately after the hero. Show 5–6 specific business types with a one-line outcome each. Make the visitor self-identify within 10 seconds.

---

### Problem 4: No Pricing Signal = No Qualified Leads

The page gives no indication of investment level. From a business perspective this has two consequences:
- **Wrong leads book calls** — wasting the founder's time on businesses that can't afford it
- **Right leads don't book** — because they assume it's expensive and out of reach

You don't need a full pricing page. You need a single anchor: "Pilot projects start from ₹X" or "Monthly retainers from ₹X/month" — something that self-selects.

---

### Problem 5: The Buying Journey Is Unclear

After scrolling through 10 sections, a motivated visitor still doesn't know: *What happens when I click "Book Free Consultation"? Who do I talk to? How long does it take? What does onboarding look like?*

SahyogAI's transformation framework (Understand → Identify → Transform → Scale) is described at an abstract level, but there's no translation of that into a **client-facing journey** with timelines, deliverables, and what the first 30 days actually look like.

---

### Problem 6: No People = No Trust for a Services Company

Products can sell without a face. **Services companies cannot.** An SME owner is about to hand over their operations to a vendor. They need to see who is behind SahyogAI. No team section, no founder story, no "Why we built this" moment. This is the single biggest trust gap for a new consulting firm.

---

### Problem 7: Ironic Brand Gap

SahyogAI sells WhatsApp AI — but has no WhatsApp button on the page. SahyogAI sells Voice AI — but you can't try it on the page. The demo-ability of these products is the strongest possible conversion tool, and it's completely absent.

---

## Phase 2: Screens to Design

---

### SCREEN A — Reworked Hero (Replace Current)

**Goal:** Lead with outcome, not capability. Make the visitor self-identify in 5 seconds.

**Headline (rewrite):**
```
Your Business Runs on Effort.
It Should Run on AI.
```
Subline: "SahyogAI helps restaurants, retailers, clinics, and growing businesses automate operations, handle customers, and make better decisions — without needing a tech team."

**CTAs:**
- Primary button (gradient): "Get Your Free AI Audit" ← stronger than "Book Consultation" — outcome-oriented
- Text link only: "See how it works →"

**Trust signal — directly under CTAs (not in a separate section):**
Row of 5 industry icons with labels:
```
🍽 Restaurants  🏪 Retail  🏥 Clinics  🚚 Logistics  🏘 Real Estate
```
Small, pill-style, grayscale on hover. This answers "Is this for me?" before they even scroll.

**Change to stat cards:**
Remove "3×" average efficiency gain (unverified average is vague). Replace with:
```
Card 1: "₹0 upfront"   for pilot projects
Card 2: "30 days"       to first working system
Card 3: "50+"           SMEs already onboarded
```

---

### SCREEN B — "Who This Is For" Section (NEW — position 2 on page)

**Placement:** Immediately after hero, before services.

**Headline:** "If You Run One of These Businesses, We Built This For You"

**Layout:** Horizontal scrollable row of 6 industry cards (on desktop: 3 visible + scroll hint)

Each card (200×280px, rounded-2xl, white, shadow):
- Top: full-bleed image of that business type (restaurant kitchen, retail floor, clinic reception, etc.)
- Bottom: business type + 1-line outcome

```
Restaurants & Cafes        → "AI that handles reservations, orders, and customer queries 24/7"
Retail & E-commerce        → "Automate inventory alerts, WhatsApp follow-ups, and sales reporting"
Clinics & Wellness         → "Appointment AI, patient reminders, and front-desk automation"
Logistics & Delivery       → "Route updates, driver coordination, and customer tracking — automated"
Professional Services      → "Lead qualification, proposal follow-ups, and client onboarding on autopilot"
Real Estate                → "AI that pre-qualifies leads, schedules site visits, and sends follow-ups"
```

CTA below: "Don't see your industry? We've likely done it. Talk to us →"

---

### SCREEN C — The First 30 Days (NEW — replaces abstract "How It Works")

**Goal:** Replace the generic 4-step framework with a concrete client journey. SME owners are worried about disruption and time investment.

**Headline:** "What Your First 30 Days Look Like"

**Layout:** Timeline, but horizontal with dates/weeks as anchors — not abstract step circles.

```
Week 1 — Discovery Call + Business Audit (2–3 hours of your time)
         └ We map your operations, identify the 3 highest-ROI automation opportunities

Week 2 — Solution Design
         └ We present your custom AI blueprint — you approve before we build anything

Week 3–4 — Build + Test
         └ Your first automation or AI agent is live. You test it. We refine it.

Day 30 — Live + Measured
         └ You have a working system. We show you the numbers. You decide if you want more.
```

Visual: Timeline with week markers, icon per phase, 1-sentence description, time commitment callout ("Only 2–3 hours of your time in week 1").

Risk reversal badge at bottom:
```
"If you don't see clear value by Day 30, you don't pay."
```
Style: Green badge, rounded-full, prominent placement.

---

### SCREEN D — Engagement & Pricing Transparency (NEW)

**Goal:** Self-select leads. Signal affordability for SMEs. Reduce "I can't afford this" drop-off.

**Headline:** "Simple, Transparent Engagement Options"

**Layout:** 3-card row (like a pricing table but without hard prices — use ranges)

**Card 1 — AI Pilot**
Tag: "Best to Start"
Description: One focused automation or AI agent. Perfect for testing before committing.
Includes: Discovery, build, deploy, 30-day support
Investment signal: "Starting from ₹25,000"
CTA: "Start a Pilot →"
Style: Default card (white, border)

**Card 2 — Growth Package** ← Highlighted (primary card)
Tag: "Most Popular"
Description: 3–5 automations + 1 AI agent, built over 60 days. Full transformation of one business function.
Includes: Everything in Pilot + integrations, training, 90-day support
Investment signal: "From ₹75,000 / project"
CTA: "Book a Discovery Call →"
Style: Primary gradient border, purple shadow, "Most Popular" badge

**Card 3 — Ongoing Partnership**
Tag: "For Growing Businesses"
Description: Continuous AI and automation support. Monthly retainer. We act as your AI team.
Includes: Everything in Growth + monthly improvements, analytics, priority support
Investment signal: "From ₹15,000 / month"
CTA: "Talk to Us →"
Style: Default card

Footnote: "All prices exclusive of GST. Custom scopes quoted separately. Free consultation included."

---

### SCREEN E — Founder / Team Section (NEW)

**Goal:** Put a human face on SahyogAI. For a services company targeting SMEs, this is non-negotiable.

**Headline:** "The Team Behind SahyogAI"

**Layout:** 2-column on desktop (founder left, supporting context right)

**Left — Founder Card:**
- Photo: Large, warm (not a stock photo — actual founder photo)
- Name + title
- 3-line bio: Background, why they built SahyogAI, what they care about
- LinkedIn link

**Right — "Why We Built This" short narrative:**
```
"Most AI companies build for large enterprises. SMEs and local
businesses — the backbone of India's economy — were being left behind.

We built SahyogAI because a restaurant owner shouldn't need a
₹50 lakh IT budget to benefit from AI. A clinic shouldn't need
a dedicated tech team. A retailer shouldn't lose leads because
they can't afford a call center.

SahyogAI exists to level the playing field."
```

Below: Team members (if any) as a row of small cards — photo, name, role.

---

### SCREEN F — Live Demo / Try It Now Section (NEW)

**Goal:** Let visitors experience the product before booking a call. This is the most powerful conversion tool available.

**Headline:** "Try Our AI Before You Commit"

**Layout:** Split — left explanation, right interactive widget

**Left:**
- Label: "LIVE DEMO"
- Headline: "Chat with Our AI Agent Right Now"
- Body: "This is the same AI we'd build for your business — customized to your industry, your products, your customers. Ask it anything."
- Below widget: "Want one like this for your business? Book a free call →"

**Right:**
- Embedded WhatsApp-style chat widget (or Voice AI widget — reuse the existing voice widget from the current site)
- Pre-loaded demo scenario: "I'm a restaurant owner. How can you help me?" → AI responds with specific, impressive answer
- Small label: "⚡ Powered by SahyogAI Voice + WhatsApp AI"

This section directly demonstrates the product. No other section converts as well as a working demo.

---

### SCREEN G — FAQ Section (NEW)

**Goal:** Kill objections before they kill the conversion.

**Headline:** "Questions We Hear Most"

**Layout:** 2-column accordion list (6–8 questions)

```
Q: Do I need to be technically savvy to work with SahyogAI?
A: Not at all. We handle everything technical. You just tell us how your business works.

Q: How is this different from hiring a regular IT company?
A: IT companies build what you ask for. We first understand your business, then recommend
   what will actually move the needle — and we're accountable to outcomes, not hours.

Q: What if I already use software like Tally, Zoho, or WhatsApp Business?
A: Great — we integrate with what you have. We don't rip and replace; we augment.

Q: How long before I see results?
A: Most clients see their first automation live within 2–3 weeks and measurable
   results within 30 days.

Q: What if it doesn't work for my business?
A: Pilot projects come with a 30-day satisfaction guarantee. If we don't deliver
   clear value, you don't pay.

Q: Can I start small and expand later?
A: Absolutely. Most clients start with one AI pilot, see the value, then expand.
   There's no lock-in.
```

---

### SCREEN H — Reworked Testimonials (Replace Current)

**Current problem:** Testimonials are generic, unverifiable, and visually undifferentiated.

**Fix — 3 formats, not 3 identical cards:**

**Format 1 — Video Quote Card:**
Large card with a blurred screenshot thumbnail (play button overlay), client name, company, and 1-line pull quote in large text. "Watch 2-min story →"

**Format 2 — Outcome Card:**
Before/After layout.
```
Before SahyogAI: "We were losing 30% of enquiries because we couldn't respond fast enough."
After SahyogAI:  "WhatsApp AI now handles first response in under 30 seconds. We've recovered those leads."
— Priya Sharma, Sharma Catering Co., Mumbai
```

**Format 3 — Metrics Card:**
Large number + context.
```
"₹4.2L saved in manual labour costs in the first 3 months."
— Amit Joshi, QuickServe Logistics, Pune
```

---

### SCREEN I — Footer + Final CTA (Missing from Current)

**Final CTA Section:**

Background: Dark ink (#0f172a) with centered radial glow (accent purple, 15% opacity, blur 120px)

Headline:
```
Ready to Build a Business
That Runs Smarter?
```
"Smarter" = gradient text

Subline: "Get a free 45-minute AI audit. We'll map 3 specific opportunities in your business — no pitch, no commitment."

Primary CTA: "Get My Free AI Audit" (gradient button, large)
Secondary: "Or WhatsApp us now →" (with WhatsApp icon — this is India, this converts)

Trust row below CTAs:
```
✓ Free  ✓ 45 minutes  ✓ No technical knowledge needed  ✓ No commitment
```

**Footer (4-column, same dark bg):**

Col 1: Logo + tagline + 2-line description + social icons (LinkedIn, Twitter, WhatsApp)
Col 2: Services (AI Enablement, Automation, Tech Enablement, Digital Transformation)
Col 3: Company (About, How We Work, Industries, Blog, Careers)
Col 4: Contact + "Book a Call" small button + WhatsApp number + email

Bottom bar: Copyright · Privacy Policy · Terms · GST: [number]

---

### SCREEN J — Mobile Frame (375px) — Critical for Dev Handoff

**Sections to mobile-adapt:**

| Desktop Pattern | Mobile Fix |
|---|---|
| Hero 2-line H1 | Single column, font 40px, stat cards stack vertically |
| Services 2×2 grid | Single column scroll |
| Dark UVP comparison | Stack columns; comparison table scrolls horizontally |
| How It Works 4-step horizontal | Vertical accordion steps |
| AI services 6-card grid | 1 column |
| Pricing 3-card row | Single card + horizontal scroll |
| Testimonials 3-col | Horizontal swipe carousel |
| Footer 4-col | Stacked, accordion-style |

**Also add:** Sticky bottom bar on mobile (not nav — a persistent floating CTA):
```
[WhatsApp icon] Chat on WhatsApp  |  [Calendar icon] Book a Call
```
Height: 56px, bg white, border-top gray-100, full-width — only shows on mobile.

---

## Conversion Architecture Summary

Reorder the page to match the **SME buyer's mental journey:**

```
1. Hero                    → "Is this relevant to me?" (outcome headline)
2. Who This Is For         → "Is this for my type of business?" (self-identify)
3. The Problem             → "Do they understand my pain?" (empathy)
4. How We're Different     → "Why SahyogAI vs others?" (UVP section — keep)
5. What You Get            → "What exactly do I get?" (services — keep)
6. First 30 Days           → "What does working together actually look like?" (new)
7. Proof                   → "Has this worked for businesses like mine?" (reworked testimonials)
8. Pricing Signal          → "Can I afford this?" (engagement options — new)
9. The Team                → "Who am I trusting?" (founder section — new)
10. Try It                 → "Let me see it work" (live demo — new)
11. FAQ                    → "Let me kill my last objections" (new)
12. Final CTA              → "OK, I'm ready" (CTA + footer — missing)
```

---

## Design Tokens Reminder (Unchanged)

```
Primary:   #7c3bed    Secondary: #8b5cf6    Accent: #c4b5fd
Dark:      #0f172a    Muted:     #6b7280    Surface: #ffffff
Font:      Manrope (400–800)
Radius:    buttons 12px · cards 16px · large cards 24px
```

---

*Analysis date: 2026-05-31 | Based on Figma review of file IJKprorsR196P2lpl2muR3*
*Brand ref: .claude/brand.md | Phase 1 prompt ref: .claude/prompt.md*

---

## SCREEN K — "Built for Businesses Like Yours" — Full Industry Expansion

### What Exists vs. What's Missing

The current design only shows **3 cards** for Retail, Hospitality, and Logistics. The filter bar has **8 industry pills**. This means 5 industries have no cards at all — clicking their filter pill shows nothing. This must be fixed before the section is usable.

**Currently designed:** Retail · Hospitality · Logistics
**Missing:** Healthcare · Finance · Professional Services · Education · Real Estate

---

### Section-Level Behaviour (Designer Must Specify All States)

The filter bar is interactive. Design the following states explicitly:

| State | What to show |
|---|---|
| **"All" selected (default)** | 1 featured card per industry — 8 cards in a 4×2 grid or horizontal scroll |
| **Industry pill active** | 2–3 cards for that industry only, in a 3-col row |
| **Pill hover** | Pill bg shifts to primary/10, text-primary |
| **Pill active** | Pill bg = primary (#7c3bed), text white, rounded-full |

---

### Card Anatomy (Consistent Across All Industries)

Each card: `width 360px · height 420px · rounded-3xl · overflow hidden · shadow-card`

```
┌─────────────────────────────┐
│  [Gradient image area 55%]  │  ← Industry illustration / abstract gradient
│  [Industry eyebrow badge]   │  ← top-left corner: "HEALTHCARE" pill
│                             │
├─────────────────────────────┤
│  Use Case Title    H4 ink   │  ← e.g. "Patient Scheduling AI"
│  AI system label   text-xs  │  ← e.g. "Voice AI + WhatsApp AI"
│  ─────────────────────────  │
│  ↑ Outcome stat  (large)    │  ← e.g. "40%" in gradient text, label below
│                             │
│  • What the AI does (×3)    │  ← 3 bullet points, text-sm, text-muted
│                             │
│  [See How It Works →]       │  ← text link, text-primary, font-semibold
└─────────────────────────────┘
```

**Gradient image area rules:**
- Height: 55% of card (≈231px)
- Each industry gets its own gradient within the purple family (see per-industry spec below)
- Overlay: abstract geometric shapes or subtle grid pattern at 8% opacity white
- Bottom fade: 40px gradient from transparent to white, bleeding into the content area

---

### Industry 1 — Retail (Already Designed — Reference Only)

Filter pill label: **Retail**
Cards: Smart Inventory & Sales AI · WhatsApp Sales Bot · Customer Loyalty AI

---

### Industry 2 — Hospitality (Already Designed — Reference Only)

Filter pill label: **Hospitality**
Cards: Voice AI Reservations · Guest Experience Bot · Operations Automation

---

### Industry 3 — Logistics (Already Designed — Reference Only)

Filter pill label: **Logistics**
Cards: Automated Operations · Driver & Delivery AI · Customer Tracking Bot

---

### Industry 4 — Healthcare ❌ DESIGN NEEDED

Filter pill label: **Healthcare**
Gradient palette: `#ede9fe (light lavender) → #a78bfa (mid purple)` — soft, clinical, clean

**Card 4A — Patient Scheduling AI**
- Eyebrow badge: "HEALTHCARE"
- Gradient: light lavender to mid-purple, with a subtle cross/plus icon pattern at 6% opacity
- Title: "Patient Scheduling AI"
- AI label: "Voice AI + WhatsApp AI"
- Outcome stat: **40%** | fewer no-shows
- Bullets:
  - Handles appointment bookings via WhatsApp and voice, 24/7
  - Sends automated reminders 24hrs and 2hrs before appointment
  - Reschedule and cancellation handled without staff involvement
- CTA: "See How It Works →"

**Card 4B — Front Desk Automation**
- Title: "Front Desk Automation"
- AI label: "Knowledge Assistant + AI Agent"
- Outcome stat: **3×** | more patient queries handled
- Bullets:
  - AI answers FAQs about services, fees, timings, and directions
  - Handles insurance and panel queries automatically
  - Escalates complex queries to staff with full context
- CTA: "See How It Works →"

**Card 4C — Patient Follow-Up AI**
- Title: "Patient Follow-Up AI"
- AI label: "WhatsApp AI + Workflow Automation"
- Outcome stat: **60%** | increase in review submissions
- Bullets:
  - Post-visit check-in messages sent automatically
  - Medication and follow-up appointment reminders
  - Automated Google review request after positive interaction
- CTA: "See How It Works →"

---

### Industry 5 — Finance ❌ DESIGN NEEDED

Filter pill label: **Finance**
Target: CAs, wealth managers, insurance agents, loan DSAs, NBFCs
Gradient palette: `#4c1d95 (deep violet) → #7c3bed (primary)` — authoritative, trustworthy

**Card 5A — Lead Qualification AI**
- Eyebrow badge: "FINANCE"
- Gradient: deep violet to primary, subtle graph/line pattern at 5% opacity
- Title: "Lead Qualification AI"
- AI label: "AI Agent + WhatsApp AI"
- Outcome stat: **5×** | more qualified leads converted
- Bullets:
  - AI engages portal/website leads instantly via WhatsApp
  - Asks qualifying questions (income, goal, timeline) automatically
  - Hands off warm, qualified leads to your advisor with a full brief
- CTA: "See How It Works →"

**Card 5B — KYC Document Collection**
- Title: "KYC & Document Collection Automation"
- AI label: "WhatsApp AI + Workflow Automation"
- Outcome stat: **70%** | reduction in document follow-up time
- Bullets:
  - AI sends document checklists via WhatsApp with upload links
  - Automatically follows up until all documents are received
  - Tracks completion status in real time — no manual chasing
- CTA: "See How It Works →"

**Card 5C — Client Onboarding AI**
- Title: "Client Onboarding AI"
- AI label: "AI Workflows + Knowledge Assistant"
- Outcome stat: **2 days** | average onboarding time (down from 2 weeks)
- Bullets:
  - Guided onboarding flow — AI walks clients through each step
  - Automated form filling, e-sign reminders, and welcome sequence
  - CRM updated automatically at every milestone
- CTA: "See How It Works →"

---

### Industry 6 — Professional Services ❌ DESIGN NEEDED

Filter pill label: **Professional Services**
Target: law firms, consultants, architects, chartered accountants, agencies
Gradient palette: `#6d28d9 (primary-dark) → #8b5cf6 (secondary)` — polished, premium

**Card 6A — Proposal & Quote Automation**
- Eyebrow badge: "PROFESSIONAL SERVICES"
- Gradient: primary-dark to secondary, subtle diagonal line pattern at 5% opacity
- Title: "Proposal & Quote Automation"
- AI label: "AI Agent + Workflow Automation"
- Outcome stat: **80%** | faster proposal turnaround
- Bullets:
  - AI drafts initial proposals from a brief in minutes
  - Automatically sends follow-up emails if no response in 48hrs
  - Tracks proposal status and flags hot leads to your team
- CTA: "See How It Works →"

**Card 6B — Client Communication AI**
- Title: "Client Communication AI"
- AI label: "Knowledge Assistant + WhatsApp AI"
- Outcome stat: **90%** | of routine queries resolved without staff
- Bullets:
  - AI handles project status queries, timeline questions, and invoicing FAQs
  - Sends automated milestone updates to clients proactively
  - Escalates urgent or complex issues to the right team member
- CTA: "See How It Works →"

**Card 6C — Internal Knowledge Assistant**
- Title: "Internal Knowledge Assistant"
- AI label: "Knowledge Assistant + AI Workflows"
- Outcome stat: **4hrs** | saved per employee per week
- Bullets:
  - AI surfaces past project files, case history, and precedents instantly
  - Answers internal policy, process, and compliance questions
  - New staff onboarding time cut by 60% with AI-guided learning
- CTA: "See How It Works →"

---

### Industry 7 — Education ❌ DESIGN NEEDED

Filter pill label: **Education**
Target: coaching institutes, schools, training centers, ed-tech, tutors
Gradient palette: `#8b5cf6 (secondary) → #c4b5fd (accent)` — friendly, energetic, approachable

**Card 7A — Admissions AI**
- Eyebrow badge: "EDUCATION"
- Gradient: secondary to accent, subtle dots/circles pattern at 6% opacity
- Title: "Admissions & Enquiry AI"
- AI label: "WhatsApp AI + AI Agent"
- Outcome stat: **3×** | more admissions enquiries converted
- Bullets:
  - AI handles every enquiry on WhatsApp — fees, syllabus, batch timings
  - Collects student details and qualifies intent automatically
  - Books counselling calls and sends reminders without staff effort
- CTA: "See How It Works →"

**Card 7B — Student Support Bot**
- Title: "Student Support Bot"
- AI label: "Knowledge Assistant + WhatsApp AI"
- Outcome stat: **24/7** | support without extra staff
- Bullets:
  - Answers FAQs about schedules, assignments, and exam dates instantly
  - Sends automated fee reminders and payment confirmations
  - Escalates genuine issues to faculty or admin with full context
- CTA: "See How It Works →"

**Card 7C — Parent Communication AI**
- Title: "Parent Communication AI"
- AI label: "WhatsApp AI + Workflow Automation"
- Outcome stat: **50%** | reduction in admin communication workload
- Bullets:
  - Sends automated progress updates, event reminders, and fee notices
  - Handles parent queries on attendance, performance, and schedules
  - Translates communications into preferred language automatically
- CTA: "See How It Works →"

---

### Industry 8 — Real Estate ❌ DESIGN NEEDED

Filter pill label: **Real Estate**
Target: property agents, builders, developers, property managers, co-working spaces
Gradient palette: `#7c3bed (primary) → #1e1b4b (very dark indigo)` — aspirational, premium, authoritative

**Card 8A — Lead Qualification & Site Visit AI**
- Eyebrow badge: "REAL ESTATE"
- Gradient: primary to deep indigo, subtle building/grid pattern at 5% opacity
- Title: "Lead Qualification & Site Visit AI"
- AI label: "AI Agent + WhatsApp AI"
- Outcome stat: **65%** | more site visits booked from portal leads
- Bullets:
  - AI engages every portal lead within 60 seconds via WhatsApp
  - Qualifies budget, timeline, and property preference automatically
  - Books site visits and sends confirmation + directions — no manual work
- CTA: "See How It Works →"

**Card 8B — Property Enquiry Bot**
- Title: "Property Enquiry Bot"
- AI label: "WhatsApp AI + Knowledge Assistant"
- Outcome stat: **24/7** | availability — never miss a lead
- Bullets:
  - Answers "Is this available?", "What's the price?", "Which floor?" instantly
  - Sends property brochures, floor plans, and virtual tour links automatically
  - Captures buyer details and adds to CRM even at 2am
- CTA: "See How It Works →"

**Card 8C — Rental Management Automation**
- Title: "Rental Management Automation"
- AI label: "Workflow Automation + WhatsApp AI"
- Outcome stat: **₹0** | staff time spent on rent reminders
- Bullets:
  - Automated rent due reminders sent via WhatsApp on schedule
  - Maintenance requests logged, assigned, and tracked automatically
  - Tenant onboarding flow with agreement signing and welcome sequence
- CTA: "See How It Works →"

---

### Section States to Design (All 8 Filters)

Design **one Figma frame per industry filter state** — total 9 frames (1 "All" + 8 individual):

| Frame Name | Filter Active | Cards Shown |
|---|---|---|
| Industries — All | All (default) | 8 featured cards, 4×2 grid |
| Industries — Retail | Retail pill active | 3 Retail cards |
| Industries — Hospitality | Hospitality pill active | 3 Hospitality cards |
| Industries — Logistics | Logistics pill active | 3 Logistics cards |
| Industries — Healthcare | Healthcare pill active | 3 Healthcare cards |
| Industries — Finance | Finance pill active | 3 Finance cards |
| Industries — Professional Services | Professional Services pill active | 3 Pro Services cards |
| Industries — Education | Education pill active | 3 Education cards |
| Industries — Real Estate | Real Estate pill active | 3 Real Estate cards |

**"All" grid layout — 4×2:**
Row 1: Retail · Hospitality · Logistics · Healthcare
Row 2: Finance · Professional Services · Education · Real Estate

Each "All" card is a compact version (280×320px) — only image area + industry name + 1-line use case title. No bullets. Click → scrolls to that industry filter state or opens a modal.

---

### Mobile Behaviour for This Section

- Filter pills: horizontal scroll, no wrapping, snap to selected
- Cards: single column, vertical stack — show 1 card at a time with left/right swipe
- Active industry: card title + outcome stat prominently above the card
- "See all [industry] solutions →" text link below the single card

---

### Additional Visual Notes

- Each industry card's gradient image area should contain a **subtle, abstract illustration** relevant to that industry — not a stock photo. Use simple geometric shapes, icons, or line art at low opacity to avoid the page feeling generic.
- Healthcare: soft cross/plus shapes
- Finance: line graph silhouette
- Professional Services: document/pen shapes
- Education: graduation cap / book outlines
- Real Estate: building outlines / floor plan grid
- All illustrations: white at 10–15% opacity over the gradient. Never heavy or distracting.

The goal is for a visitor to look at all 8 industry cards and immediately think: **"They've actually thought about MY industry."**
