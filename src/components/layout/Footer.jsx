import { FOOTER } from '../../constants/content'
import { RefinedSpacesLogo } from '../brand/RefinedSpacesLogo'

export function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10">
          <div className="lg:col-span-1">
            <a href="#top" className="inline-block mb-4">
              <RefinedSpacesLogo variant="icon" className="w-14 h-14" />
            </a>
            <p className="font-serif font-bold tracking-[0.16em] uppercase text-sm text-ivory leading-none select-none mb-2">
              Refined Spaces
            </p>
            <p className="font-sans font-light text-[10px] tracking-[0.32em] uppercase text-ivory/35 leading-none select-none mb-3">
              {FOOTER.tagline}
            </p>
            <p className="text-ivory/30 text-xs tracking-wide">{FOOTER.location}</p>
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
              <li className="text-sm font-medium text-ivory/70 tracking-wide">
                {FOOTER.contact.company}
              </li>
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
                  href={`tel:${FOOTER.contact.phoneTel}`}
                  className="text-sm text-ivory/50 hover:text-gold transition-colors duration-300"
                >
                  {FOOTER.contact.phone}
                </a>
              </li>
            </ul>

            <div className="mt-10 pt-6 border-t border-ivory/5">
              <p className="text-[11px] text-ivory/20 tracking-wide">
                &copy; {new Date().getFullYear()} Refined Spaces. All rights reserved.
              </p>
              {FOOTER.legal.length > 0 && (
                <div className="flex gap-4 mt-3">
                  {FOOTER.legal.map((item) => (
                    <span key={item.label} className="text-[11px] text-ivory/20 tracking-wide">
                      {item.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
