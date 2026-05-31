import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "../i18n/LanguageContext"

export default function UVPSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const { uvp } = useLanguage().t

  // heading is an array; everything but the last segment is plain, the last is gradient-highlighted.
  const headParts = uvp.heading
  const headLead = headParts.slice(0, -1).join(" ")
  const headAccent = headParts[headParts.length - 1]

  return (
    <section ref={ref} className="py-20 md:py-28 px-4" style={{ background: "#0f172a" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <p className="text-[11px] font-mono font-semibold tracking-widest text-accent mb-5 uppercase">
              {uvp.eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              {headLead}{" "}
              <span className="text-gradient-brand">{headAccent}</span>
            </h2>
            <p className="mt-6 text-base text-gray-400 leading-relaxed max-w-md">
              {uvp.body}
            </p>
            <a href={uvp.cta.href} className="inline-flex items-center mt-8 text-sm font-semibold text-white/70 border border-white/20 rounded-xl px-5 py-2.5 hover:bg-white/8 hover:text-white hover:border-white/30 transition-all duration-200">
              {uvp.cta.label}
            </a>
          </motion.div>

          {/* Right — comparison card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div
              className="rounded-3xl p-7"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="grid grid-cols-2 gap-0">
                {/* Technology First */}
                <div className="pr-5">
                  <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/8">
                    <span className="text-red-400">✗</span>
                    <span className="text-sm font-semibold text-red-400">{uvp.comparison.left.label}</span>
                  </div>
                  <ul className="space-y-3.5">
                    {uvp.comparison.left.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-red-400/70 text-sm mt-0.5 shrink-0">✗</span>
                        <span className="text-sm text-gray-400 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Vertical divider */}
                <div className="pl-5 border-l border-white/10">
                  <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/8">
                    <span className="text-emerald-400">✓</span>
                    <span className="text-sm font-semibold text-emerald-400">{uvp.comparison.right.label}</span>
                  </div>
                  <ul className="space-y-3.5">
                    {uvp.comparison.right.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-emerald-400 text-sm mt-0.5 shrink-0">✓</span>
                        <span className="text-sm text-gray-300 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
