import { useLanguage } from "../i18n/LanguageContext"

export default function Footer() {
  const { footer, contact, ui } = useLanguage().t
  return (
    <footer style={{ background: "#0f172a" }}>
      {/* Separator */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

      {/* Columns */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/assets/logo.png" alt="SahyogAI" className="w-8 h-8 rounded-lg object-contain" />
              <span className="text-base font-bold text-white">{footer.brand}</span>
            </div>
            <p className="text-sm font-medium text-gray-400 mb-2">{footer.tagline}</p>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">{footer.description}</p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 mt-5">
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.13)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.07)"}
              >
                <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.13)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.07)"}
              >
                <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.13)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.07)"}
              >
                <svg className="w-4 h-4" style={{ fill: "#25d366" }} viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide mb-5">{ui.footer.servicesTitle}</h4>
            <ul className="space-y-3">
              {footer.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide mb-5">{ui.footer.companyTitle}</h4>
            <ul className="space-y-3">
              {footer.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide mb-5">{ui.footer.contactTitle}</h4>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {contact.phoneDisplay}
                </a>
              </li>
            </ul>
            <a href="#booking" className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-200"
              style={{ border: "1px solid rgba(124,59,237,0.45)", color: "#c4b5fd" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(124,59,237,0.12)" }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent" }}
            >
              {ui.footer.cta}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">{footer.copy}</p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200">{ui.footer.privacy}</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200">{ui.footer.terms}</a>
            <span className="text-xs text-gray-500">GST</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
