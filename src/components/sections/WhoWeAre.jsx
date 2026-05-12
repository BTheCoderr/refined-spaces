import { WHO_WE_ARE } from '../../constants/content'
import { LogoHeroFramedRsMark } from '../ui/Logo'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

export function WhoWeAre() {
  const paragraphs = Array.isArray(WHO_WE_ARE.body) ? WHO_WE_ARE.body : [WHO_WE_ARE.body]
  return (
    <section
      id="who-we-are"
      className="scroll-mt-24 lg:scroll-mt-[5.25rem] bg-cream py-24 md:py-32 lg:py-36 border-b border-navy/[0.04]"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="flex items-center gap-5 mb-10 md:mb-12">
            <LogoHeroFramedRsMark on="light" className="w-14 h-14 md:w-16 md:h-16" />
            <span aria-hidden className="block h-10 w-px bg-gold/45" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.85rem] font-extrabold text-navy leading-[1.1] tracking-tight">
              {WHO_WE_ARE.headline}
            </h2>
          </div>
          <div className="space-y-6 md:space-y-7">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-charcoal/75 text-[15px] md:text-[17px] leading-[1.95] tracking-wide font-light"
              >
                {p}
              </p>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
