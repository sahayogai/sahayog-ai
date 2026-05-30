import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { process } from "../content/site"

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.span
          className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {process.label}
        </motion.span>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 tracking-tight leading-tight mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {process.heading}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {process.steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            >
              {/* Large gradient number */}
              <span
                className="text-[7rem] md:text-[9rem] font-bold leading-none mb-4 select-none"
                style={{
                  background: "linear-gradient(to bottom right, #8b5cf6, #7c3bed, #c4b5fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-ink mb-3">{step.title}</h3>
              <p className="text-muted text-base leading-relaxed max-w-xs mx-auto">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
