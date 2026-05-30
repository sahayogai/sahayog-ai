import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { comparison } from "../content/site"

function XIcon() {
  return (
    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center mt-0.5">
      <svg className="w-2.5 h-2.5 text-red-500" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  )
}

const ICONS = {
  phone: (
    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  target: (
    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  shield: (
    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  rupee: (
    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
    </svg>
  ),
  lightning: (
    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
}

function ItemIcon({ type }) {
  if (type === "x") return <XIcon />
  return (
    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
      {ICONS[type] || null}
    </span>
  )
}

function ComparisonCard({ title, items, image, variant, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const isPrimary = variant === "primary"

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`flex-1 rounded-3xl border overflow-hidden flex flex-col ${
        isPrimary
          ? "border-primary/25 bg-gradient-to-br from-[#f5f3ff] to-[#ede9fe] shadow-[0_8px_32px_rgba(124,59,237,0.12)]"
          : "border-gray-200 bg-white shadow-sm"
      }`}
    >
      {/* Header */}
      <div className={`px-7 py-5 flex items-center gap-3 ${isPrimary ? "border-b border-primary/15" : "border-b border-gray-100"}`}>
        {isPrimary && (
          <img src="/assets/logo.png" alt="" className="w-7 h-7 rounded-md object-contain" />
        )}
        <h2 className={`text-xl font-bold ${isPrimary ? "text-primary" : "text-gray-700"}`}>
          {title}
        </h2>
      </div>

      {/* Image — padded, not edge-to-edge */}
      {image && (
        <div className={`px-1 pt-6 pb-3 flex items-center justify-center ${isPrimary ? "" : "bg-gray-50/60"}`}>
          <img
            src={image}
            alt={title}
            className="w-full rounded-2xl object-contain max-h-70 px-4 pt-6 pb-3"
          />
        </div>
      )}

      {/* Feature list */}
      <ul className="px-7 py-5 space-y-4 flex-1">
        {items.map((item) => (
          <li key={item.title} className="flex gap-3 items-start">
            <ItemIcon type={item.icon} />
            <div>
              <span className="font-semibold text-ink text-sm">{item.title}</span>
              <p className="text-muted text-sm mt-0.5 leading-relaxed">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function ComparisonSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="comparison" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          ref={ref}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 text-center mb-12 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {comparison.heading[0]}{" "}
          <span className="text-gradient-brand">{comparison.heading[1]}</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6">
          <ComparisonCard
            title={comparison.left.title}
            items={comparison.left.items}
            image={comparison.left.image}
            variant="default"
            delay={0.1}
          />
          <ComparisonCard
            title={comparison.right.title}
            items={comparison.right.items}
            image={comparison.right.image}
            variant="primary"
            delay={0.22}
          />
        </div>
      </div>
    </section>
  )
}
