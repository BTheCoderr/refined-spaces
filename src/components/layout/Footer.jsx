import { FOOTER } from '../../constants/content'
import { LogoFooter } from '../ui/Logo'

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <path d="M7 11v6M7 8v.01M11 11v6m0-3a3 3 0 0 1 6 0v3" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          <div className="lg:col-span-1">
            <LogoFooter />
          </div>

          <div>
            <h4 className="text-[11px] font-semibold text-gold uppercase tracking-[0.2em] mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {FOOTER.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/50 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold text-gold uppercase tracking-[0.2em] mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${FOOTER.contact.email}`}
                  className="text-sm text-ivory/50 hover:text-gold transition-colors duration-300"
                >
                  {FOOTER.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${FOOTER.contact.phone}`}
                  className="text-sm text-ivory/50 hover:text-gold transition-colors duration-300"
                >
                  {FOOTER.contact.phone}
                </a>
              </li>
            </ul>
            <div className="flex gap-5 mt-7">
              <a
                href="#"
                className="text-ivory/30 hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="#"
                className="text-ivory/30 hover:text-gold transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold text-gold uppercase tracking-[0.2em] mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {FOOTER.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/50 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-ivory/20 mt-7 tracking-wide">
              &copy; {new Date().getFullYear()} Refined Spaces.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
