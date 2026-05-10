import { WHO_WE_ARE } from '../../constants/content'
import { LogoMonogram } from '../ui/Logo'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

export function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="scroll-mt-24 lg:scroll-mt-[5.25rem] bg-cream py-24 md:py-32 lg:py-36 border-b border-navy/[0.04]"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center lg:text-left">
        <AnimateOnScroll>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mb-12">
            <LogoMonogram size={56} color="#C5A96A" className="shrink-0" />
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8 leading-[1.12] tracking-tight">
                {WHO_WE_ARE.headline}
              </h2>
              <p className="text-charcoal/70 text-[15px] md:text-lg leading-[2] md:leading-relaxed tracking-wide font-light">
                {WHO_WE_ARE.body}
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
