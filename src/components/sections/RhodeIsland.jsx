import { RHODE_ISLAND } from '../../constants/content'
import { SectionEyebrow } from '../ui/SectionEyebrow'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

export function RhodeIsland() {
  return (
    <section
      id="providence"
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1920&q=80"
        alt="Providence, Rhode Island waterfront"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy/82" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <AnimateOnScroll>
            <div className="bg-navy/55 backdrop-blur-sm rounded p-9 md:p-14 border border-gold/8">
              <SectionEyebrow>{RHODE_ISLAND.eyebrow}</SectionEyebrow>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-ivory mb-8 leading-tight">
                {RHODE_ISLAND.headline}
              </h2>
              <p className="text-linen/70 text-[15px] md:text-base leading-[1.8] mb-5">
                {RHODE_ISLAND.body}
              </p>
              <p className="text-linen/50 text-[15px] leading-[1.8]">
                {RHODE_ISLAND.secondaryBody}
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
