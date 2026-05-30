import { footer } from "../content/site"

export default function Footer() {
  return (
    <footer className="bg-ink text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <img
              src="/assets/logo.png"
              alt="FutureFlow AI Logo"
              className="w-10 h-10 rounded-lg object-contain"
            />
            <span className="text-lg font-bold">{footer.brand}</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          {footer.copy}
        </div>
      </div>
    </footer>
  )
}
