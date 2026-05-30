import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { nav } from "../content/site"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2"
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-500 ease-in-out rounded-2xl ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-100 px-6 sm:px-8 py-3"
            : "bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-100 px-6 sm:px-8 py-3"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/assets/logo.png"
                alt="FutureFlow AI Logo"
                className="rounded-lg w-[44px] h-[44px] object-contain"
              />
              <span className="text-lg font-bold text-ink">{nav.brand}</span>
            </Link>
          </motion.div>

          {/* Desktop nav links with stagger */}
          <div className="hidden md:flex items-center space-x-1">
            {nav.links.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08, ease: "easeOut" }}
              >
                <a
                  href={link.href}
                  className="relative px-4 py-2 rounded-xl group cursor-pointer"
                >
                  <span className="text-gray-700 font-medium group-hover:text-primary transition-colors duration-300">
                    {link.label}
                  </span>
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-btn rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="hidden md:flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <a href={nav.cta.href}>
              <button className="bg-gradient-btn hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm">
                {nav.cta.label}
              </button>
            </a>
          </motion.div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-purple-50 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 pt-3 border-t border-gray-100 flex flex-col space-y-1 pb-2"
          >
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-gray-700 font-medium hover:text-primary hover:bg-purple-50 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a href={nav.cta.href} onClick={() => setMenuOpen(false)}>
              <button className="w-full mt-2 bg-gradient-btn text-white font-semibold px-6 py-3 rounded-xl shadow-md text-sm">
                {nav.cta.label}
              </button>
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
