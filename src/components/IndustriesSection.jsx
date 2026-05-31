import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useLanguage } from "../i18n/LanguageContext"
import { trackCTA, trackIndustrySelect } from "../analytics/events"

// ── Icons — white outline, visible at ~25% opacity ──────────────────────────
const ICON = (path, path2) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.4} className="w-20 h-20" style={{ opacity: 0.28 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    {path2 && <path strokeLinecap="round" strokeLinejoin="round" d={path2} />}
  </svg>
)

const INDUSTRY_ICONS = {
  retail:                 ICON("M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"),
  hospitality:            ICON("M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0L3 18m0-13.5h18"),
  logistics:              ICON("M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"),
  healthcare:             ICON("M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"),
  finance:                ICON("M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"),
  "professional-services":ICON("M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"),
  education:              ICON("M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"),
  "real-estate":          ICON("M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"),
}

// ── Gradient image area ───────────────────────────────────────────────────────
// With image: full-bleed object-cover, no tint/opacity overlay.
// No image: gradient + abstract SVG icon fallback.
// `label` is the (translated) industry name shown in the eyebrow badge.
function GradientArea({ gradientFrom, gradientTo, industryId, height, image, label }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height,
        background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
      }}
    >
      {/* Real photo — full bleed, no overlay */}
      {image && (
        <img
          src={image}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      )}

      {/* Abstract icon — only when no real image */}
      {!image && (
        <div className="absolute right-4 bottom-3 z-[1]">
          {INDUSTRY_ICONS[industryId]}
        </div>
      )}

      {/* Eyebrow badge */}
      <div
        className="absolute top-3 left-3 z-[2] rounded-full px-3 py-1"
        style={{ background: "rgba(0,0,0,0.30)", backdropFilter: "blur(6px)" }}
      >
        <span className="text-[9px] font-bold text-white tracking-widest leading-none uppercase">
          {label}
        </span>
      </div>

      {/* Bottom fade into white card content */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2]"
        style={{
          height: 40,
          background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.35) 100%)",
        }}
      />
    </div>
  )
}

// ── Full detail card (3-col industry view) ────────────────────────────────────
function IndustryCard({ card, industryId, label, gradientFrom, gradientTo, delay, cardCta }) {
  return (
    <motion.div
      className="bg-white rounded-3xl border border-gray-100 shadow-card overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
    >
      <GradientArea gradientFrom={gradientFrom} gradientTo={gradientTo} industryId={industryId} height={220} image={card.image} label={label} />

      <div className="p-6 flex flex-col flex-1">
        {/* Title + AI label */}
        <h3 className="text-[15px] font-bold text-ink leading-snug">{card.title}</h3>
        <p className="text-xs text-muted mt-0.5">{card.aiLabel}</p>

        {/* Stat */}
        <div className="mt-3 pt-3 border-t border-gray-100 mb-3">
          <span className="text-3xl font-extrabold text-gradient-brand leading-none">{card.stat}</span>
          <p className="text-xs text-muted mt-1 leading-snug">{card.statLabel}</p>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 flex-1">
          {card.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-[5px] shrink-0" />
              <span className="text-sm text-muted leading-snug">{b}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#booking"
          onClick={() => trackCTA("industry_card_book", { text: cardCta, location: `industries_${industryId}`, url: "#booking" })}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-200"
        >
          {cardCta}
        </a>
      </div>
    </motion.div>
  )
}

// ── Compact card (All view — 4×2 grid) ───────────────────────────────────────
function CompactCard({ industry, inView, delay, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden cursor-pointer hover:shadow-[0_6px_24px_rgba(124,59,237,0.12)] hover:border-primary/20 transition-all duration-300"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
    >
      <GradientArea
        gradientFrom={industry.gradientFrom}
        gradientTo={industry.gradientTo}
        industryId={industry.id}
        height={150}
        image={industry.allImage}
        label={industry.label}
      />
      <div className="px-4 py-3.5">
        <p className="text-sm font-bold text-ink leading-snug">{industry.label}</p>
        <p className="text-xs text-muted mt-0.5 leading-snug">{industry.allTitle}</p>
      </div>
    </motion.div>
  )
}

// ── Main section ─────────────────────────────────────────────────────────────
const PILL_ORDER = [
  "all", "retail", "hospitality", "healthcare",
  "finance", "logistics", "professional-services", "education", "real-estate",
]

export default function IndustriesSection() {
  const { industriesData, ui } = useLanguage().t
  const { industries, heading, cta } = industriesData
  const [active, setActive] = useState("all")
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  const activeIndustry = industries.find((ind) => ind.id === active)

  // Select a vertical and record the interest signal (GA4: industry_select).
  const selectIndustry = (id, source) => {
    setActive(id)
    if (id !== "all") trackIndustrySelect(id, source)
  }

  return (
    <section id="industries" ref={ref} className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* ── Section heading ── */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Pill eyebrow — matches Screen 2/3 */}
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-semibold text-primary tracking-widest uppercase border border-primary/25 bg-primary/6">
            {ui.industriesEyebrow}
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-ink tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="mt-3 text-base text-muted max-w-xl mx-auto leading-relaxed">
            {ui.industriesSubheadings[active]}
          </p>
        </motion.div>

        {/* ── Filter pills ── */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {PILL_ORDER.map((id) => {
            const ind = industries.find((i) => i.id === id)
            const label = id === "all" ? ui.industriesAll : ind?.label ?? id
            const isActive = active === id
            return (
              <button
                key={id}
                onClick={() => selectIndustry(id, "filter")}
                className={`text-sm font-medium rounded-full px-4 py-1.5 border transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-white text-gray-500 border-gray-200 hover:text-primary hover:border-primary/40"
                }`}
              >
                {label}
              </button>
            )
          })}
        </motion.div>

        {/* ── Cards ── */}
        <AnimatePresence mode="wait">
          {active === "all" ? (
            <motion.div
              key="all"
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {industries.map((ind, i) => (
                <CompactCard
                  key={ind.id}
                  industry={ind}
                  inView={inView}
                  delay={i * 0.05}
                  onClick={() => selectIndustry(ind.id, "card")}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={active}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {activeIndustry?.cards.map((card, i) => (
                <IndustryCard
                  key={card.title}
                  card={card}
                  industryId={active}
                  label={activeIndustry.label}
                  gradientFrom={activeIndustry.gradientFrom}
                  gradientTo={activeIndustry.gradientTo}
                  delay={i * 0.07}
                  cardCta={ui.industriesCardCta}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Bottom CTA ── */}
        <motion.p
          className="mt-10 text-center text-sm text-muted"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {ui.industriesBottomNote}{" "}
          <a
            href={cta.href}
            onClick={() => trackCTA("industries_bottom", { text: cta.label, location: "industries", url: cta.href })}
            className="font-semibold text-primary hover:underline"
          >
            {cta.label} →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
