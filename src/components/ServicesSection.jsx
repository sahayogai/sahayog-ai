import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { services } from "../content/site"

const ICONS = [
  // AI Enablement - brain/spark
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>,
  // Tech Enablement - layers
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
  </svg>,
  // Automation - arrows/flow
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>,
  // Digital Transformation - chart
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>,
]

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="services" ref={ref} className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight leading-tight max-w-3xl mx-auto">
            {services.heading}
          </h2>
          <p className="mt-4 text-base text-muted max-w-xl mx-auto leading-relaxed">
            {services.subheading}
          </p>
        </motion.div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.items.map((item, i) => (
            <motion.div
              key={item.title}
              className="group bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-[0_8px_32px_rgba(124,59,237,0.10)] hover:border-primary/20 transition-all duration-300 p-7"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Eyebrow + icon row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center text-primary shrink-0">
                    {ICONS[i]}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-muted tracking-widest uppercase">
                    PRACTICE {item.number}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-ink mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed mb-4">{item.description}</p>

              {/* Pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {item.pills.map((pill) => (
                  <span
                    key={pill}
                    className="text-[11px] font-semibold text-primary bg-primary/8 rounded-full px-3 py-0.5"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a href="#booking" className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-200 flex items-center gap-1 group-hover:gap-2">
                {item.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
