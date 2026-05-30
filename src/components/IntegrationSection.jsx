import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { integrations } from "../content/site"

export default function IntegrationSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section className="py-16 md:py-24 px-4 bg-ink">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {integrations.heading}
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {integrations.subheading}
        </motion.p>

        {/* Logo grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 items-center justify-items-center mb-10">
          {integrations.logos.map((logo, i) => (
            <motion.div
              key={logo.alt}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-4 flex items-center justify-center w-full aspect-square hover:bg-white/15 transition-colors duration-200"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-10 max-w-full object-contain"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href={integrations.cta.href}>
            <button className="bg-gradient-btn hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base">
              {integrations.cta.label}
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
