import { motion } from "framer-motion"
import { hero } from "../content/site"

// Slowly drifting glow orb — the "live wallpaper" ambient animation
function GlowOrb({ style, animate, transition }) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full"
      style={{ filter: "blur(60px)", ...style }}
      animate={animate}
      transition={{
        duration: 14,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        ...transition,
      }}
    />
  )
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[40rem] md:min-h-[50rem] w-full flex items-center justify-center overflow-hidden"
      style={{
        // Lavender at top/edges, bleeds to white at the bottom
        background:
          "radial-gradient(ellipse 140% 80% at 50% -5%, #c4b5fd 0%, #ddd6fe 18%, #ede9fe 35%, #f5f3ff 55%, #faf9ff 75%, #ffffff 100%)",
      }}
    >
      {/* === Animated ambient orbs (live wallpaper) === */}

      {/* Orb 1 — large, upper-left, slow drift */}
      <GlowOrb
        style={{
          width: 700,
          height: 700,
          top: -280,
          left: -200,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.30) 0%, rgba(124,59,237,0.12) 45%, transparent 70%)",
        }}
        animate={{ x: [0, 70, -40, 0], y: [0, 50, -30, 0], scale: [1, 1.12, 0.94, 1] }}
        transition={{ duration: 16, delay: 0 }}
      />

      {/* Orb 2 — large, upper-right, counter-drift */}
      <GlowOrb
        style={{
          width: 650,
          height: 650,
          top: -260,
          right: -180,
          background:
            "radial-gradient(circle, rgba(167,139,250,0.28) 0%, rgba(139,92,246,0.10) 45%, transparent 70%)",
        }}
        animate={{ x: [0, -60, 35, 0], y: [0, 60, -25, 0], scale: [1, 0.92, 1.10, 1] }}
        transition={{ duration: 18, delay: 1.5 }}
      />

      {/* Orb 3 — smaller, centre-bottom, subtle pulse */}
      <GlowOrb
        style={{
          width: 420,
          height: 420,
          bottom: 20,
          left: "calc(50% - 210px)",
          background:
            "radial-gradient(circle, rgba(196,181,253,0.22) 0%, rgba(167,139,250,0.07) 55%, transparent 75%)",
        }}
        animate={{ scale: [1, 1.15, 0.97, 1], opacity: [0.7, 1, 0.8, 0.7] }}
        transition={{ duration: 10, delay: 0.5 }}
      />

      {/* Diagonal beam — left (static, matches original) */}
      <div
        className="pointer-events-none absolute top-0 left-0 z-0"
        style={{
          transform: "translateY(-380px) rotate(-45deg)",
          background:
            "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(124,59,237,0.25) 0%, rgba(109,40,217,0.12) 50%, rgba(88,28,135,0) 80%)",
          width: 560,
          height: 1400,
        }}
      />

      {/* Diagonal beam — right (static, matches original) */}
      <div
        className="pointer-events-none absolute top-0 right-0 z-0"
        style={{
          transform: "translateY(-380px) rotate(45deg)",
          background:
            "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(124,59,237,0.25) 0%, rgba(109,40,217,0.12) 50%, rgba(88,28,135,0) 80%)",
          width: 560,
          height: 1400,
        }}
      />

      {/* Bottom fade to white — smooth section transition */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10"
        style={{
          height: 160,
          background: "linear-gradient(to bottom, transparent 0%, #ffffff 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 p-4 max-w-2xl mx-auto text-center pt-28 md:pt-0">
        <motion.h1
          className="text-4xl md:text-7xl font-bold text-gray-800 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {hero.heading[0]}{" "}
          <span className="text-gradient-brand drop-shadow-sm">{hero.heading[1]}</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-xl text-gray-600 max-w-xl mx-auto font-medium tracking-wide"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.68 }}
        >
          {hero.subheading}
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
        >
          <a href={hero.cta.href}>
            <button className="bg-gradient-btn hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base">
              {hero.cta.label}
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
