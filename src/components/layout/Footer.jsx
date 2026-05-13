import { FOOTER_NAV_LINKS, FOOTER } from '../../constants/content'
import { publicAssetUrl } from '../../utils/assetUrl'

export function Footer() {
  const bookHref = FOOTER.externalBookStayHref

  return (
    <footer className="bg-navy border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <img
              src={publicAssetUrl('/images/logo/refined-spaces-footer-badge.png')}
              alt="Refined Spaces badge"
              width={144}
              height={144}
              loading="lazy"
              decoding="async"
              className="w-28 sm:w-32 md:w-36 h-auto shrink-0 object-contain bg-navy"
            />
          </div>

          <div>
            <h4 className="text-[11px] font-semibold text-gold uppercase tracking-[0.2em] mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ivory/50 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a href={link.href} className="text-sm text-ivory/50 hover:text-gold transition-colors duration-300">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold text-gold uppercase tracking-[0.2em] mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="text-sm font-medium text-ivory/70 tracking-wide">{FOOTER.contact.company}</li>
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
              <li className="pt-2">
                <a
                  href={bookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gold/90 hover:text-gold underline-offset-4 hover:underline transition-colors duration-300"
                >
                  {FOOTER.externalListingsLinkLabel}
                </a>
              </li>
            </ul>
          </div>

          <div>
            {FOOTER.legal.length > 0 && (
              <>
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
              </>
            )}
            <p
              className={`text-[11px] text-ivory/20 tracking-wide ${
                FOOTER.legal.length > 0 ? 'mt-7' : ''
              }`}
            >
              &copy; {new Date().getFullYear()} Refined Spaces · {FOOTER.location}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
