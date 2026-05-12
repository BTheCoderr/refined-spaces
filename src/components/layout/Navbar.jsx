import { useState, useEffect, useRef, useCallback } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { HEADER_NAV, FOOTER, PARTNER_CTA_LABEL } from '../../constants/content'
import { Button } from '../ui/Button'
import { LogoCompact } from '../ui/Logo'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileWhoOpen, setMobileWhoOpen] = useState(false)
  const [desktopWhoOpen, setDesktopWhoOpen] = useState(false)
  const whoWrapRef = useRef(null)

  const scrolled = useScrollPosition(60)

  const closeMobileDrawer = useCallback(() => {
    setMobileOpen(false)
    setMobileWhoOpen(false)
  }, [])

  function scrollToMobileSection(event, href) {
    event.preventDefault()

    const targetId = href.replace('#', '')
    const target = document.getElementById(targetId)

    closeMobileDrawer()

    window.setTimeout(() => {
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.replaceState(null, '', href)
      }
    }, 50)
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    function onDocClick(ev) {
      if (desktopWhoOpen && whoWrapRef.current && !whoWrapRef.current.contains(ev.target)) {
        setDesktopWhoOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [desktopWhoOpen])

  useEffect(() => {
    function onKey(ev) {
      if (ev.key === 'Escape') {
        setDesktopWhoOpen(false)
        closeMobileDrawer()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [closeMobileDrawer])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-navy/20 border-b border-gold/15'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] lg:h-20">
          <LogoCompact on="dark" iconSize={40} />

          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
            {HEADER_NAV.map((item) =>
              item.children ? (
                <div
                  key={`nav-parent-${item.label}`}
                  className="relative group/nav focus-within:opacity-100"
                  ref={whoWrapRef}
                  onMouseEnter={() => setDesktopWhoOpen(true)}
                  onMouseLeave={() => setDesktopWhoOpen(false)}
                >
                  <div className="relative inline-flex items-center gap-1">
                    <a
                      href="#who-we-are"
                      className={`relative text-[12px] hover:text-ivory transition-colors duration-300 tracking-wider uppercase ${
                        desktopWhoOpen ? 'text-ivory' : 'text-ivory/75'
                      }`}
                    >
                      {item.label}
                    </a>
                    <button
                      type="button"
                      className={`inline-flex items-center p-0.5 -mr-0.5 text-ivory/75 hover:text-ivory transition-colors duration-300 ${
                        desktopWhoOpen ? 'text-ivory' : ''
                      }`}
                      aria-expanded={desktopWhoOpen}
                      aria-haspopup="menu"
                      id="who-are-we-trigger"
                      aria-label={`${item.label} submenu`}
                      onClick={(e) => {
                        e.preventDefault()
                        setDesktopWhoOpen((o) => !o)
                      }}
                    >
                      <ChevronDown
                        className={`w-[14px] h-[14px] opacity-70 transition-transform duration-300 ${
                          desktopWhoOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden
                      />
                    </button>
                  </div>
                  <AnimatePresence>
                    {desktopWhoOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 -translate-x-1/2 pt-3 min-w-[16.5rem] z-[110]"
                        role="menu"
                        aria-labelledby="who-are-we-trigger"
                      >
                        <div className="rounded border border-gold/18 bg-navy/98 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] py-2 px-2">
                          {item.children.map((child) => (
                            <a
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              className="block px-5 py-2.5 text-[12px] text-ivory/75 hover:bg-gold/8 hover:text-ivory tracking-wide rounded transition-colors"
                              onFocus={() => setDesktopWhoOpen(true)}
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <span
                    aria-hidden
                    className={`absolute bottom-[-6px] left-0 right-0 h-px bg-gold scale-x-0 transition-transform duration-300 origin-center ${
                      desktopWhoOpen ? 'scale-x-100' : ''
                    } group-hover/nav:scale-x-100`}
                  />
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative text-[12px] text-ivory/75 hover:text-ivory transition-colors duration-300 tracking-wider uppercase after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              ),
            )}
            <Button href="#contact" size="small">
              {PARTNER_CTA_LABEL}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => (mobileOpen ? closeMobileDrawer() : setMobileOpen(true))}
            className="lg:hidden text-ivory/80 hover:text-gold transition-colors p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="lg:hidden bg-navy/98 backdrop-blur-lg border-t border-gold/15 overflow-hidden max-h-[min(92vh,calc(100dvh-72px))] overflow-y-auto"
          >
            <div className="px-6 py-10 flex flex-col gap-0">
              {HEADER_NAV.map((item, i) =>
                item.children ? (
                  <div key={`nav-drawer-parent-${item.label}`}>
                    <div className="flex items-stretch border-b border-ivory/5">
                      <a
                        href="#who-we-are"
                        onClick={(e) => scrollToMobileSection(e, '#who-we-are')}
                        className="flex-1 min-w-0 py-4 text-lg text-ivory/70 uppercase tracking-wider hover:text-gold transition-colors pr-4"
                      >
                        {item.label}
                      </a>
                      <button
                        type="button"
                        aria-expanded={mobileWhoOpen}
                        aria-label={`${item.label} submenu`}
                        className="shrink-0 py-4 pl-2 pr-2 text-ivory/55 hover:text-ivory transition-colors flex items-center"
                        onClick={() => setMobileWhoOpen(!mobileWhoOpen)}
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform shrink-0 ${mobileWhoOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                    </div>
                    <AnimatePresence initial={false}>
                      {mobileWhoOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-4 flex flex-col border-l border-gold/20 ml-2">
                            {item.children.map((child) => (
                              <a
                                key={child.href}
                                href={child.href}
                                className="py-3 text-base text-ivory/55 hover:text-gold uppercase tracking-wide"
                                onClick={(e) => scrollToMobileSection(e, child.href)}
                              >
                                {child.label}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.28 }}
                    onClick={(e) => scrollToMobileSection(e, item.href)}
                    className="text-ivory/70 hover:text-gold py-4 text-lg tracking-wider uppercase border-b border-ivory/5"
                  >
                    {item.label}
                  </motion.a>
                ),
              )}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="pt-6"
              >
                <Button
                  href="#contact"
                  onClick={(e) => scrollToMobileSection(e, '#contact')}
                  className="w-full justify-center"
                >
                  {PARTNER_CTA_LABEL}
                </Button>
                <div className="mt-8 pt-6 border-t border-ivory/10 flex flex-col gap-3 text-center">
                  <span className="text-sm font-medium text-ivory/60">{FOOTER.contact.company}</span>
                  <a
                    href={`tel:${FOOTER.contact.phoneTel}`}
                    onClick={closeMobileDrawer}
                    className="text-sm text-ivory/60 hover:text-gold transition-colors"
                  >
                    {FOOTER.contact.phone}
                  </a>
                  <a
                    href={`mailto:${FOOTER.contact.email}`}
                    onClick={closeMobileDrawer}
                    className="text-sm text-ivory/60 hover:text-gold transition-colors break-all"
                  >
                    {FOOTER.contact.email}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
