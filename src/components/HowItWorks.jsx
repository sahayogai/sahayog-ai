import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { howItWorks } from "../content/site"

const STEP_ICONS = [
  <svg key="search" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z" />
  </svg>,
  <svg key="target" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
  </svg>,
  <svg key="lightning" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  <svg key="chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>,
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="how-it-works" ref={ref} className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-mono font-semibold tracking-widest text-primary uppercase mb-3">
            {howItWorks.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight leading-tight">
            {howItWorks.heading}
          </h2>
          <p className="mt-4 text-base text-muted max-w-xl mx-auto leading-relaxed">
            {howItWorks.subheading}
          </p>
        </motion.div>

        <div className="relative">
          {/* Dashed connector line desktop */}
          <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-px border-t border-dashed border-primary/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
            {howItWorks.steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-[72px] h-[72px] rounded-full bg-gradient-btn flex flex-col items-center justify-center shadow-[0_4px_16px_rgba(124,59,237,0.30)] mb-5 shrink-0">
                  <span className="text-[11px] font-bold text-white/70 leading-none mb-0.5">{step.number}</span>
                  <div className="text-white">{STEP_ICONS[i]}</div>
                </div>
                <h3 className="text-base font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed max-w-[180px]">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/8 border border-primary/20 rounded-full px-6 py-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {howItWorks.badge}
          </span>
        </motion.div>
      </div>
    </section>
  )
}
