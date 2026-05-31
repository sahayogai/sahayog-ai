import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useLanguage } from "../i18n/LanguageContext"

function LanguageDropdown() {
  const { lang, setLang, LANGUAGES } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0]

  // Close on outside click
  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 hover:border-primary/40 hover:bg-purple-50 transition-all duration-200 text-sm font-medium text-gray-600"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline">{current.nativeLabel}</span>
        <svg
          className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.10)] overflow-hidden z-50"
          role="listbox"
        >
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              role="option"
              aria-selected={l.code === lang}
              onClick={() => { setLang(l.code); setOpen(false) }}
              className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors duration-150 ${
                l.code === lang
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-gray-700 hover:bg-purple-50 hover:text-primary"
              }`}
            >
              <span className="text-base leading-none">{l.flag}</span>
              <span>{l.nativeLabel}</span>
              {l.code === lang && (
                <svg className="ml-auto w-3.5 h-3.5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              )}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default function Navbar() {
  const { t, lang, setLang, LANGUAGES } = useLanguage()
  const { nav, contact } = t
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
        className={`max-w-6xl mx-auto transition-all duration-500 ease-in-out rounded-2xl bg-white/95 backdrop-blur-md border border-gray-100 px-5 sm:px-7 py-3 ${
          scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.08)]" : "shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo + badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src="/assets/logo.png"
                alt="SahyogAI"
                className="rounded-lg w-9 h-9 object-contain"
              />
              <span className="text-base font-bold text-ink">{nav.brand}</span>
              <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-primary/30 bg-primary/5 text-primary leading-none">
                {nav.badge}
              </span>
            </Link>
          </motion.div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-0.5">
            {nav.links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07, ease: "easeOut" }}
              >
                <a
                  href={link.href}
                  className="relative px-3.5 py-2 rounded-xl group cursor-pointer"
                >
                  <span className="text-gray-600 text-sm font-medium group-hover:text-primary transition-colors duration-200">
                    {link.label}
                  </span>
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-gradient-btn rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Right side: language picker + CTA */}
          <motion.div
            className="hidden md:flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <LanguageDropdown />
            <a href={nav.cta.href}>
              <button className="bg-gradient-btn hover:opacity-90 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-[0_4px_16px_rgba(124,59,237,0.30)] transition-all duration-300 text-sm">
                {nav.cta.label}
              </button>
            </a>
          </motion.div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-purple-50 transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
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
            className="md:hidden mt-3 pt-3 border-t border-gray-100 flex flex-col space-y-0.5 pb-3"
          >
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-gray-700 text-sm font-medium hover:text-primary hover:bg-purple-50 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 space-y-2">
              <a href={nav.cta.href} onClick={() => setMenuOpen(false)}>
                <button className="w-full bg-gradient-btn text-white font-semibold px-5 py-3 rounded-xl text-sm">
                  {nav.cta.label}
                </button>
              </a>
              <a
                href={contact.phoneHref}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-purple-50 hover:text-primary transition-colors duration-200"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {contact.phoneDisplay}
              </a>
              {/* Language picker in mobile menu */}
              <div className="flex gap-2 pt-1">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setMenuOpen(false) }}
                    className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border text-sm font-medium transition-colors duration-200 ${
                      lang === l.code
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-gray-200 text-gray-600 hover:bg-purple-50 hover:text-primary"
                    }`}
                  >
                    {l.flag} {l.nativeLabel}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
