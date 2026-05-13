import { useState } from 'react'
import { FINAL_CTA, FOOTER } from '../../constants/content'
import { Button } from '../ui/Button'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'
import { LogoHeroFramedRsMark, Wordmark } from '../ui/Logo'
import { publicAssetUrl } from '../../utils/assetUrl'
import { Send, Phone, CheckCircle } from 'lucide-react'

async function sendNotificationEmail(fd) {
  const payload = {
    name: String(fd.get('name') ?? '').trim(),
    email: String(fd.get('email') ?? '').trim(),
    interest: String(fd.get('interest') ?? '').trim(),
    message: String(fd.get('message') ?? '').trim(),
  }
  try {
    await fetch('/.netlify/functions/contact-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    /* Resend/function may be unavailable offline */
  }
}

export function FinalCTA() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
      .then(async (response) => {
        if (!response.ok) throw new Error('Form submission failed')
        setSubmitted(true)
        await sendNotificationEmail(data)
      })
      .catch(() => {
        window.location.href = `mailto:${FOOTER.contact.email}?subject=${encodeURIComponent('Refined Spaces — Website inquiry')}&body=${encodeURIComponent(String(data.get('message') ?? ''))}`
      })
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 lg:scroll-mt-[5.25rem] bg-navy py-24 md:py-32 lg:py-36 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none w-80 h-80">
        <img
          src={publicAssetUrl('/images/logo/refined-spaces-stacked-mark.png')}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain mix-blend-lighten"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <AnimateOnScroll className="order-2 lg:order-1">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-ivory mb-6 leading-tight">
                {FINAL_CTA.headline}
              </h2>
              <p className="text-slate/70 text-[15px] md:text-base leading-relaxed mb-8">
                {FINAL_CTA.subheadline}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <LogoHeroFramedRsMark className="w-12 h-12 shrink-0" />
                  <span aria-hidden className="block h-10 w-px bg-gold/45" />
                  <Wordmark size="md" color="#FFFDF9" />
                </div>
                <div className="flex items-center gap-3 text-linen/50 text-sm">
                  <Phone className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />
                  <a
                    href={`tel:${FOOTER.contact.phoneTel}`}
                    className="hover:text-gold transition-colors"
                  >
                    {FOOTER.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-linen/50 text-sm">
                  <Send className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />
                  <a href={`mailto:${FOOTER.contact.email}`} className="hover:text-gold transition-colors">
                    {FOOTER.contact.email}
                  </a>
                </div>
                <p className="text-linen/35 text-xs leading-relaxed pl-7">
                  Our team typically responds within one business day.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15} className="order-1 lg:order-2">
            {submitted ? (
              <div className="bg-navy-light/50 border border-gold/15 rounded p-10 text-center">
                <CheckCircle className="w-10 h-10 text-gold mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-semibold text-ivory mb-2">Thank You</h3>
                <p className="text-slate/70 text-sm leading-relaxed">
                  Thank you—a member of the Refined Spaces team will follow up soon.
                </p>
              </div>
            ) : (
              <form
                name="inquiry"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="bg-navy-light/50 border border-gold/15 rounded p-8 md:p-10 space-y-5"
              >
                <input type="hidden" name="form-name" value="inquiry" />
                <p className="hidden">
                  <label>
                    <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label htmlFor="name" className="block text-[11px] font-semibold text-gold uppercase tracking-[0.15em] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-navy/60 border border-ivory/10 rounded px-4 py-3 text-sm text-ivory placeholder-ivory/25 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/25 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-semibold text-gold uppercase tracking-[0.15em] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-navy/60 border border-ivory/10 rounded px-4 py-3 text-sm text-ivory placeholder-ivory/25 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/25 transition-colors"
                    placeholder="your@email.address"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-[11px] font-semibold text-gold uppercase tracking-[0.15em] mb-2">
                    I Am Interested In
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full bg-navy/60 border border-ivory/10 rounded px-4 py-3 text-sm text-ivory focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/25 transition-colors appearance-none"
                  >
                    <option value="property-management">Property Management</option>
                    <option value="hosting-questions">Hosting Questions</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-semibold text-gold uppercase tracking-[0.15em] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-navy/60 border border-ivory/10 rounded px-4 py-3 text-sm text-ivory placeholder-ivory/25 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/25 transition-colors resize-none"
                    placeholder="Tell us how we can help you."
                  />
                </div>

                <Button type="submit" size="default" className="w-full justify-center">
                  Send Inquiry
                </Button>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
