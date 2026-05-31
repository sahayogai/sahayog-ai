# Figma Design Prompt — SahyogAI Landing Page

## Brief Overview

Design a **full landing page** for **SahyogAI**, an AI-first business transformation company that helps SMEs and local businesses adopt AI, automation, and modern technology. The design must feel premium, modern, and approachable — not cold or overly "enterprise". Think of it as what Notion, Linear, or Vercel would look like if they were an AI consulting company for growing businesses.

The existing site (voice agent product) established the design system. This landing page **expands that same design language** to the full brand — broader, bolder, and more business-outcome-focused.

---

## Design System (Exact Tokens — Do Not Deviate)

### Colors
```
Primary:         #7c3bed   (vibrant purple — buttons, links, active states)
Primary Dark:    #6d28d9   (hover states, gradient end)
Secondary:       #8b5cf6   (lighter purple — gradient start, secondary emphasis)
Accent:          #c4b5fd   (pale lavender — highlights, gradient stops, soft glows)
Ink:             #0f172a   (near-black navy — dark sections, primary text)
Surface:         #ffffff   (main card/section backgrounds)
Surface Soft:    #f9fafb   (alternate section backgrounds)
Muted:           #6b7280   (secondary text, descriptions, meta)
```

### Gradients
```
Brand Gradient:     linear-gradient(135deg, #8b5cf6 → #7c3bed → #c4b5fd)
Button Gradient:    linear-gradient(to right, #8b5cf6 → #7c3bed)
Button Hover:       linear-gradient(to right, #7c3bed → #6d28d9)
Hero Background:    radial-gradient ellipse at center-top
                    #c4b5fd (0%) → #ddd6fe (18%) → #ede9fe (35%) →
                    #f5f3ff (55%) → #faf9ff (75%) → #ffffff (100%)
Dark Section BG:    solid #0f172a
```

### Typography — Manrope (Google Fonts, weights 400–800)
```
Display / H1:   72px / Bold (800) — hero headline
H2:             48px / Bold (700) — section headings
H3:             24px / Bold (700) — card titles
H4:             18px / SemiBold (600) — sub-section labels
Body Large:     18px / Medium (500) — hero subheading
Body:           16px / Regular (400) — descriptions
Caption:        14px / Medium (500) — labels, meta
Micro:          12px / SemiBold (600) — badges, tags
```

### Border Radius
```
Buttons:        12px (rounded-xl)
Cards:          16px (rounded-2xl)
Large Cards:    24px (rounded-3xl)
Badges/Pills:   999px (rounded-full)
Nav Container:  16px
```

### Shadows
```
Card:           0 2px 8px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)
Card Hover:     0 8px 32px rgba(0,0,0,0.12)
Purple Card:    0 8px 32px rgba(124,59,237,0.12)
Nav:            0 4px 24px rgba(0,0,0,0.08)
CTA Section:    0 20px 60px rgba(124,59,237,0.18)
```

### Glassmorphism
```
Light Glass:    bg white/95, backdrop-blur-md, border 1px solid rgba(0,0,0,0.06)
Dark Glass:     bg white/10, backdrop-blur-sm, border 1px solid rgba(255,255,255,0.10)
```

### Spacing Scale (8px base)
```
Section vertical padding:   96px top / 96px bottom (64px on mobile)
Section horizontal padding:  Max-width 1280px, centered, 32px side padding
Card padding:               24px
Grid gap:                   24–32px
```

---

## Page Sections — Full Spec

---

### 1. NAVIGATION

**Style:** Sticky, floats over content. Rounded pill container. Glassmorphism.

**Layout:**
- Left: SahyogAI logo (wordmark, purple + ink) + tagline badge "AI-First"
- Center: Nav links — Services · How It Works · Industries · About · Blog
- Right: "Book a Call" (primary gradient button, small) + phone number with icon

**Details:**
- Background: white/95 + backdrop-blur-md, border bottom 1px solid gray-100
- On scroll: subtle shadow appears (0 4px 24px rgba(0,0,0,0.08))
- Active nav link: text-primary + animated underline that scales from left on hover
- Pill container: max-width 1180px, mx-auto, rounded-2xl, 12px vertical padding
- Mobile: hamburger icon, slide-down menu with same glassmorphism

---

### 2. HERO SECTION

**Goal:** Instantly communicate "AI transformation for real businesses" — not a tech demo, not a product screenshot. Ambitious, warm, and confident.

**Background:**
- Full radial gradient (hero bg spec above) — lavender center bleeding to pure white
- 3 animated glow orbs floating in background (same as existing site):
  - Orb 1: 400×400px, #c4b5fd at 40% opacity, blur(60px), slow drift
  - Orb 2: 320×320px, #7c3bed at 20% opacity, blur(80px), counter-drift
  - Orb 3: 200×200px, #8b5cf6 at 30% opacity, blur(40px), slow pulse
- Two diagonal beam overlays at -45° and +45°, 1px wide, opacity 8%, gradient from transparent to accent to transparent
- Bottom: 160px fade-to-white gradient overlay

**Content — centered layout, max-width 860px:**

Top badge (pill):
```
✦  AI · Automation · Growth
```
Style: rounded-full, border 1px solid primary/30, bg primary/5, text-primary, text-xs font-semibold, px-4 py-1.5

H1 (two lines, centered):
```
Helping SMEs & Local Businesses
Grow with AI-First Technology
```
Style: 72px, font-800, text-ink, line-height 1.1. Key words "AI-First Technology" use gradient text treatment (clip-text, brand gradient).

Subheading:
```
SahyogAI partners with businesses to adopt AI, automate
operations, modernize technology, and unlock sustainable
growth through practical digital transformation.
```
Style: 18px, font-500, text-muted, max-width 600px, centered, line-height 1.7

CTAs (horizontal, centered):
- Primary: "Book Free Consultation" — gradient button, px-8 py-4, rounded-xl, white text, font-semibold
- Secondary: "See How It Works ↓" — outlined, border primary, text-primary, same sizing, transparent bg

**Below CTAs — Trust micro-line:**
```
✓ No commitment required    ✓ Free 45-min strategy session    ✓ Results in 30 days
```
Style: text-sm, text-muted, font-medium, gap-6 between items, ✓ in text-primary

**Bottom of hero — floating stat cards (3 cards, horizontal row):**
Cards float with subtle shadow above the section fold. Each card:
- Width: ~220px, bg white, rounded-2xl, shadow-card, border border-gray-100, p-5
- Stat number: 48px, font-800, text-gradient-brand
- Label: 14px, font-medium, text-muted

Stats:
```
Card 1: "50+"  |  SMEs Transformed
Card 2: "3×"   |  Average Efficiency Gain
Card 3: "30d"  |  To First Results
```

---

### 3. TRUST / SOCIAL PROOF BAR

**Style:** Full-width, bg surface-soft (#f9fafb), thin top and bottom border (gray-100). Padding: 32px vertical.

**Layout:**
- Left label: "Trusted by growing businesses across" — text-sm, text-muted
- Right: 6 company logo placeholders in a horizontal row, grayscale, opacity 60%, hover full opacity. Each logo in a 120×40px container.
- Separator between label and logos: thin vertical line, 24px tall, gray-200

---

### 4. WHAT WE DO — SERVICES OVERVIEW

**Section heading (centered):**
```
Everything Your Business Needs
to Thrive in the Age of AI
```
H2, ink. Subheading below: "Four interconnected practices that work together to transform how your business operates."

**Layout: 2×2 card grid, max-width 1100px**

Each card: bg white, rounded-3xl, border border-gray-100, shadow-card, p-8, hover shadow-purple. Left-aligned content.

**Card 1 — AI Enablement**
- Icon area: 56×56px circle, bg primary/10, centered icon (brain/spark), text-primary
- Eyebrow badge: "PRACTICE 01" — text-xs, text-muted, font-mono, letter-spacing wide
- Title: "AI Enablement" — H3
- Description: "AI strategy, agents, voice AI, WhatsApp AI, and knowledge assistants built around your actual workflows."
- Services pills: "AI Agents · Voice AI · WhatsApp AI · Knowledge Base · AI Workflows"
  Style: small rounded-full pills, bg primary/8, text-primary, text-xs, inline-flex gap-2, mt-4
- Bottom: "Explore →" text link, text-primary, font-semibold

**Card 2 — Technology Enablement**
- Icon: layers/stack icon, same style
- Eyebrow: "PRACTICE 02"
- Title: "Technology Enablement"
- Description: "SaaS platforms, business applications, cloud infrastructure, and system integrations that scale with you."
- Pills: "SaaS · Custom Apps · Cloud · Integrations · Internal Tools"
- Accent color variation: use secondary (#8b5cf6) instead of primary for icon bg/pills

**Card 3 — Automation**
- Icon: flow/workflow icon
- Eyebrow: "PRACTICE 03"
- Title: "Automation"
- Description: "End-to-end workflow, CRM, sales, operations, and marketing automation that eliminates manual work."
- Pills: "Workflow · CRM · Sales · Marketing · Operations"

**Card 4 — Digital Transformation**
- Icon: chart-upward/sparkle icon
- Eyebrow: "PRACTICE 04"
- Title: "Digital Transformation"
- Description: "Process modernization, customer experience systems, dashboards, and data analytics for decision-ready businesses."
- Pills: "Process Design · CX Systems · Dashboards · Analytics"

---

### 5. THE SAHYOGAI DIFFERENCE — UVP SECTION

**Full-width dark section, bg ink (#0f172a), white text. Padding: 96px.**

**Left column (50%):**
Eyebrow: "WHY SAHYOGAI" — text-xs, text-accent, font-mono, letter-spacing wide

Headline (left-aligned, white):
```
Most agencies start
with technology.

We start with
your business.
```
H2, white. "your business." — gradient text (brand gradient)

Body:
```
We first study your operations, identify where AI and technology
can create the most value, design a solution that fits how you
actually work, and then build it — so every tool we deploy has
a clear business outcome behind it.
```
text-muted/lighter gray, 18px, line-height 1.75

CTA: "Book a Strategy Session →" — outlined white button (border white/30, text white, hover bg white/10)

**Right column (50%) — Visual comparison card:**

Card: bg white/5, border border-white/10, backdrop-blur-sm, rounded-3xl, p-8

Two columns inside:

Column A — "The Typical Approach"
Header: ✗ Technology First — text-red-400, font-semibold
Items (5 rows):
- ✗ Pick a tool, then find use cases
- ✗ Implement without understanding operations
- ✗ Generic solution, misaligned outcomes
- ✗ Post-deployment hand-off
- ✗ You figure out adoption

Column B — "The SahyogAI Way"
Header: ✓ Business First — text-green-400, font-semibold
Items:
- ✓ Understand your business first
- ✓ Identify real opportunities
- ✓ Design fit-for-purpose solutions
- ✓ Partner through the journey
- ✓ Measure real business outcomes

Divider between columns: 1px vertical line, white/10

---

### 6. HOW IT WORKS — TRANSFORMATION FRAMEWORK

**Section heading (centered):**
```
A Framework Built for
Real Business Transformation
```
Subheading: "Four phases. One continuous improvement loop. Zero tech-for-tech's-sake."

**Layout: Horizontal 4-step timeline on desktop, vertical on mobile**

Connecting line: 1px dashed line (#7c3bed, 40% opacity) running through all 4 step icons at center height

**Each step node:**
- Large circle (72×72px), gradient background (brand gradient), number inside (01/02/03/04) in white, font-800, 24px
- Below number: Icon representing the phase
- Step title: H4, ink, font-bold, mt-4
- Description: 14px, text-muted, max-width 200px, centered

**Step 01 — Understand**
Icon: magnifying glass / eye
Title: "Understand"
Desc: "We study your business processes, goals, bottlenecks, and opportunities from the ground up."

**Step 02 — Identify**
Icon: target / lightbulb
Title: "Identify"
Desc: "Pinpoint the highest-impact areas where AI and automation will create measurable value."

**Step 03 — Transform**
Icon: lightning bolt / gears
Title: "Transform"
Desc: "Implement AI, workflows, and technology solutions built specifically for your context."

**Step 04 — Scale**
Icon: chart with arrow / expand
Title: "Scale"
Desc: "Measure outcomes, expand capabilities, and continuously improve as your business grows."

**Below the timeline — result badge:**
Pill: "Typical time to first results: 30 days" — rounded-full, bg primary/10, text-primary, font-semibold, px-6 py-2

---

### 7. AI ENABLEMENT DEEP-DIVE SECTION

**Section heading (centered):**
```
AI That Actually Works
for Your Business
```
Subheading: "Not generic AI. Purpose-built agents, voice systems, and knowledge tools designed around how your business operates."

**Layout: 3-column feature card grid**

Each card: bg surface-soft, rounded-2xl, border border-gray-100, p-6, hover shadow-purple, hover border-primary/20

**Card 1 — AI Strategy**
Icon: roadmap/compass, text-primary
Title: "AI Strategy & Roadmapping"
Desc: "Get a clear, prioritized AI adoption plan built around your business goals — not hype."
Tag: "Foundation"

**Card 2 — AI Agents**
Icon: robot/sparkle
Title: "Autonomous AI Agents"
Desc: "Agents that handle tasks, respond to triggers, and complete workflows without human intervention."
Tag: "Core"
Badge: "Most Popular" — small badge, bg primary, text white, rounded-full, 10px

**Card 3 — Voice AI**
Icon: microphone/waveform
Title: "Voice AI Systems"
Desc: "Intelligent voice agents for customer support, sales calls, and business communication — available 24/7."
Tag: "Customer-Facing"

**Card 4 — WhatsApp AI**
Icon: chat bubble
Title: "WhatsApp AI"
Desc: "Automate customer conversations, lead qualification, and order handling directly in WhatsApp."
Tag: "Messaging"

**Card 5 — Knowledge Assistant**
Icon: brain/book
Title: "Knowledge Assistants"
Desc: "Internal AI tools that answer questions, find documents, and surface business insights instantly."
Tag: "Internal"

**Card 6 — AI Workflows**
Icon: flow arrows
Title: "AI Workflows"
Desc: "Multi-step automated workflows orchestrated by AI — from data processing to client onboarding."
Tag: "Automation"

---

### 8. RESULTS / OUTCOMES SECTION

**Full-width, bg linear-gradient (hero bg spec) — same as hero but lighter.**

**4 large metric cards, horizontal row:**

Each card: bg white, rounded-3xl, shadow-card, p-8, text-center, min-width 240px

```
Card 1: "3×"      Efficiency Improvement
Card 2: "60%"     Reduction in Manual Work
Card 3: "30 days" Time to First Results
Card 4: "50+"     Businesses Transformed
```

Metric number: 64px, font-800, gradient text (brand gradient)
Label: 16px, font-medium, text-muted

Below cards — qualifier text (centered, italic, text-muted, text-sm):
"Based on outcomes across clients in retail, services, and operations sectors."

---

### 9. TESTIMONIALS SECTION

**Section heading (centered):** "What Our Clients Say"

**Layout: 3-column card grid**

Each testimonial card: bg white, rounded-2xl, border border-gray-100, shadow-card, p-7

- Top: 5 star icons (text-primary, 16px), gap-0.5
- Quote: "..." — 16px, text-ink, font-medium, line-height 1.75, italic, mt-3
- Divider: 1px line, gray-100, mt-5
- Bottom row: Avatar circle (40×40px, bg gradient, initials in white) + Name (font-semibold, text-ink) + Company (text-sm, text-muted)

Sample cards:
```
Card 1: "SahyogAI didn't just give us software — they understood our business first and then built something that actually solved our problem."
  — Rajesh Mehta, Owner, Mehta Electronics

Card 2: "Our WhatsApp AI handles 70% of customer queries now. Our team can focus on what actually needs a human."
  — Priya Sharma, Director, Sharma Catering Co.

Card 3: "In 30 days we had a fully automated sales pipeline. The ROI was visible within the first week."
  — Amit Joshi, Founder, QuickServe Logistics
```

---

### 10. INDUSTRIES / USE CASES SECTION

**Section heading (centered):** "Built for Businesses Like Yours"

**Layout: Horizontal scrollable tag row (pill filter bar) + 3 feature cards below**

Filter pills (horizontal, centered):
Retail · Hospitality · Healthcare · Finance · Logistics · Professional Services · Education · Real Estate
Style: rounded-full, border gray-200, bg white, text-muted, px-4 py-2, hover bg primary/10 hover text-primary, active state bg primary text-white

Below: 3 showcase cards in a row. Each card:
- Tall card: 360px height, rounded-3xl, overflow-hidden
- Top 60%: gradient bg (use different shades — primary, secondary, accent combinations), with a subtle abstract illustration/pattern overlay
- Bottom 40%: bg white, p-6
  - Industry tag: text-xs, text-muted, font-mono, letter-spacing wide
  - Use case title: H4, text-ink
  - Outcome stat: "↑ 40% lead conversion" — text-primary, font-semibold
  - Short desc: text-sm, text-muted

---

### 11. FINAL CTA SECTION

**Full-width, dark gradient section.**

Background: bg ink (#0f172a) with a large centered radial glow overlay (accent color at 15% opacity, blur 120px, 600×400px)

**Content (centered, max-width 700px):**

Eyebrow badge: "GET STARTED" — pill, border accent/40, text-accent, bg accent/10

Headline:
```
Ready to Build a
Future-Ready Business?
```
H2, white. "Future-Ready" uses gradient text (brand gradient).

Subheading:
```
Start with a free 45-minute strategy session. No commitment.
No sales pitch — just clarity on where AI can move your business forward.
```
18px, text-gray-400, centered

CTA row:
- Primary: "Book Free Consultation" — gradient button, px-10 py-4, rounded-xl, font-semibold
- Secondary: "Schedule Discovery Call" — text-white/70, underline, font-medium, no button border

Micro-trust line:
```
✓ Free · No commitment · 45 minutes · Real outcomes
```

---

### 12. FOOTER

**Bg ink (#0f172a), white text. Padding: 64px top / 32px bottom.**

**4-column layout:**

Column 1 (wider, ~35%):
- SahyogAI logo (white wordmark)
- Tagline: "AI-First Business Transformation & Technology Enablement"
- Short desc: 14px, text-gray-400, max-width 280px
- Social icons row: LinkedIn, Twitter/X, WhatsApp — circle icon buttons, bg white/10, hover bg white/20
- Copyright line at very bottom

Column 2 — Services:
```
AI Enablement
Technology Enablement
Automation
Digital Transformation
Case Studies
```

Column 3 — Company:
```
About SahyogAI
How We Work
Industries
Blog
Careers
```

Column 4 — Contact:
```
Book Free Consultation
hello@sahyogai.com
+91 XXXXX XXXXX
```
CTA button: "Book a Call →" — small, outlined white, rounded-xl

**Bottom bar:**
Thin separator (white/10), below: copyright left + privacy/terms links right — all text-xs, text-gray-500

---

## Motion & Animation Notes (for Figma Prototyping)

- All sections: fade-in-up on scroll enter (opacity 0→1, y: 32→0, 600ms ease-out)
- Hero elements: staggered — badge first (0.3s), H1 (0.5s), subheading (0.68s), CTAs (0.85s), stat cards (1.0s)
- Cards in grid: stagger delay = index × 80ms
- Hero orbs: infinite slow drift, 16–18s duration, mirror repeat
- Nav on scroll: shadow appears, bg shifts from transparent to white/95
- CTA button: slight scale-up on hover (1.02), shadow deepens
- Testimonial cards: horizontal scroll on mobile with snap

---

## Figma File Structure Recommendation

```
📁 SahyogAI Landing Page
  ├── 🎨 Design System
  │   ├── Colors & Tokens
  │   ├── Typography Scale
  │   ├── Components (Button, Card, Badge, Nav, Footer)
  │   └── Icons & Illustrations
  ├── 📱 Mobile (375px)
  │   └── All sections stacked
  ├── 💻 Desktop (1440px)
  │   └── Full layout
  └── 🔗 Prototype
      └── Scroll + hover interactions
```

---

## Key Creative Decisions

1. **No product screenshots in hero** — use ambient motion and stat cards instead. SahyogAI is a service, not a SaaS product.
2. **Warm purple, not cold tech purple** — the palette leans lavender, not electric/neon. Keep it trustworthy.
3. **Business language first** — every section headline leads with an outcome, not a capability. "Grow with AI" not "Deploy AI".
4. **Dark section for contrast** — sections 5 (UVP) and 11 (CTA) use the ink dark bg to create visual rhythm and reset.
5. **Glassmorphism is subtle** — white/95 nav and white/10 dark cards. Don't over-apply. Use only where it adds depth.
6. **Gradient text is used sparingly** — hero H1 keyword, section 11 headline keyword, and metric numbers. That's it.
7. **No empty space that feels unfinished** — every section has a clear visual hierarchy: eyebrow → headline → subheading → content → CTA.

---

*Prompt authored: 2026-05-31 | Brand ref: .claude/brand.md | Design system ref: existing output-site codebase*
