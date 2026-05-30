import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { features } from "../content/site"

function FeatureCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="rounded-2xl border border-gray-200 bg-white overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Image area — padded so image breathes */}
      <div className="w-full bg-[#FAF9F6] flex items-center justify-center p-5" style={{ minHeight: 300 }}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full object-contain rounded-xl"
          // style={{ maxHeight: 200 }}
        />
      </div>
      {/* Text */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
        <p className="text-muted text-sm leading-relaxed">{item.body}</p>
      </div>
    </motion.div>
  )
}

export default function FeaturesSection() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" })

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headingRef}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 tracking-tight leading-tight mb-4">
            {features.heading}
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">{features.subheading}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.items.map((item, i) => (
            <FeatureCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
