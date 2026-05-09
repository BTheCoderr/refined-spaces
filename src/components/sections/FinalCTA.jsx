import { FINAL_CTA } from '../../constants/content'
import { Button } from '../ui/Button'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'
import { LogoIcon } from '../ui/Logo'

export function FinalCTA() {
  return (
    <section id="contact" className="bg-navy py-24 md:py-32 lg:py-36 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <LogoIcon size={320} color="#FFFDF9" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-ivory mb-6 leading-tight">
            {FINAL_CTA.headline}
          </h2>
          <p className="text-slate/70 text-[15px] md:text-base leading-relaxed mb-12">
            {FINAL_CTA.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="mailto:hello@refinedspaces.com" size="large">
              {FINAL_CTA.primaryCta}
            </Button>
            <Button href="#owners" variant="secondary" size="large">
              {FINAL_CTA.secondaryCta}
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
