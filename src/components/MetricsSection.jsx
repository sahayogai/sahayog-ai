import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "../i18n/LanguageContext"

export default function MetricsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const { metrics, ui } = useLanguage().t

  return (
    <section
      ref={ref}
      className="py-16 md:py-20 px-4"
      style={{
        background: "radial-gradient(ellipse 120% 80% at 50% 0%, #f5f3ff 0%, #ede9fe 25%, #f9fafb 60%, #ffffff 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.value}
              className="bg-white rounded-3xl border border-gray-100 shadow-card text-center px-5 py-7"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="text-4xl md:text-5xl font-extrabold text-gradient-brand leading-none">{m.value}</p>
              <p className="mt-3 text-sm text-muted font-medium leading-snug">{m.label}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="mt-6 text-center text-sm text-muted italic"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {ui.metricsNote}
        </motion.p>
      </div>
    </section>
  )
}
