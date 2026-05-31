import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { hero, trustBar } from "../content/site"

function GlowOrb({ style, animate, transition }) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full"
      style={{ filter: "blur(60px)", ...style }}
      animate={animate}
      transition={{ duration: 14, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", ...transition }}
    />
  )
}

export default function HeroSection() {
  const ref = useRef(null)

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        ref={ref}
        className="relative min-h-[44rem] md:min-h-[52rem] w-full flex items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 140% 80% at 50% -5%, #c4b5fd 0%, #ddd6fe 18%, #ede9fe 35%, #f5f3ff 55%, #faf9ff 75%, #ffffff 100%)",
        }}
      >
        {/* Ambient glow orbs */}
        <GlowOrb
          style={{ width: 700, height: 700, top: -280, left: -200,
            background: "radial-gradient(circle, rgba(139,92,246,0.30) 0%, rgba(124,59,237,0.12) 45%, transparent 70%)" }}
          animate={{ x: [0, 70, -40, 0], y: [0, 50, -30, 0], scale: [1, 1.12, 0.94, 1] }}
          transition={{ duration: 16, delay: 0 }}
        />
        <GlowOrb
          style={{ width: 650, height: 650, top: -260, right: -180,
            background: "radial-gradient(circle, rgba(167,139,250,0.28) 0%, rgba(139,92,246,0.10) 45%, transparent 70%)" }}
          animate={{ x: [0, -60, 35, 0], y: [0, 60, -25, 0], scale: [1, 0.92, 1.10, 1] }}
          transition={{ duration: 18, delay: 1.5 }}
        />
        <GlowOrb
          style={{ width: 420, height: 420, bottom: 20, left: "calc(50% - 210px)",
            background: "radial-gradient(circle, rgba(196,181,253,0.22) 0%, rgba(167,139,250,0.07) 55%, transparent 75%)" }}
          animate={{ scale: [1, 1.15, 0.97, 1], opacity: [0.7, 1, 0.8, 0.7] }}
          transition={{ duration: 10, delay: 0.5 }}
        />

        {/* Diagonal beams */}
        <div className="pointer-events-none absolute top-0 left-0 z-0" style={{ transform: "translateY(-380px) rotate(-45deg)", background: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(124,59,237,0.25) 0%, rgba(109,40,217,0.12) 50%, rgba(88,28,135,0) 80%)", width: 560, height: 1400 }} />
        <div className="pointer-events-none absolute top-0 right-0 z-0" style={{ transform: "translateY(-380px) rotate(45deg)", background: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(124,59,237,0.25) 0%, rgba(109,40,217,0.12) 50%, rgba(88,28,135,0) 80%)", width: 560, height: 1400 }} />

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10" style={{ height: 160, background: "linear-gradient(to bottom, transparent 0%, #ffffff 100%)" }} />

        {/* Content */}
        <div className="relative z-20 px-4 max-w-3xl mx-auto text-center pt-28 md:pt-0">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-1.5 mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-xs font-semibold tracking-widest text-primary border border-primary/30 bg-primary/5 rounded-full px-4 py-1.5">
              ✦ &nbsp;{hero.badge}
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 tracking-tight leading-[1.08]"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {hero.heading[0]}{" "}
            <span className="text-gradient-brand drop-shadow-sm">{hero.heading[1]}</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.68 }}
          >
            {hero.subheading}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
          >
            <a href={hero.cta.href}>
              <button className="bg-gradient-btn hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-[0_8px_24px_rgba(124,59,237,0.35)] transition-all duration-300 text-base">
                {hero.cta.label}
              </button>
            </a>
            <a href={hero.ctaSecond.href} className="text-gray-600 font-medium text-sm hover:text-primary transition-colors duration-200 flex items-center gap-1.5">
              {hero.ctaSecond.label}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>

          {/* Trust micro-line */}
          <motion.div
            className="mt-5 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            {hero.trust.map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {t}
              </span>
            ))}
          </motion.div>

          {/* Stat cards */}
          <motion.div
            className="mt-10 grid grid-cols-3 gap-3 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            {hero.stats.map((s) => (
              <div
                key={s.value}
                className="bg-white rounded-2xl border border-gray-100 shadow-card px-4 py-4 text-center"
              >
                <p className="text-3xl md:text-4xl font-extrabold text-gradient-brand leading-none">{s.value}</p>
                <p className="mt-1.5 text-xs text-muted font-medium leading-snug">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Trust Bar ────────────────────────────────────────────────── */}
      <section className="py-7 px-4 bg-surface-soft border-y border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
          <p className="text-sm text-muted font-medium whitespace-nowrap shrink-0">{trustBar.label}</p>
          <div className="w-px h-5 bg-gray-200 hidden sm:block shrink-0" />
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6">
            {trustBar.logos.map((logo) => (
              <span
                key={logo.name}
                className={`text-sm text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-default ${logo.style}`}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
