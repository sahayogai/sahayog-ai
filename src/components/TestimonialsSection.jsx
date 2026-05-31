import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "../i18n/LanguageContext"

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const { testimonials, ui } = useLanguage().t

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">
            {ui.testimonialsHeading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              className="bg-white rounded-2xl border border-gray-100 shadow-card p-7 flex flex-col"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Stars count={item.stars} />
              <p className="text-sm text-ink font-medium leading-relaxed flex-1 italic">
                "{item.quote}"
              </p>
              <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-btn flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-white">{item.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink leading-none">{item.name}</p>
                  <p className="text-xs text-muted mt-0.5">{item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
