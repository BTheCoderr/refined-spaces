import { RHODE_ISLAND } from '../../constants/content'
import { SectionEyebrow } from '../ui/SectionEyebrow'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

export function RhodeIsland() {
  return (
    <section
      id="about-rhode-island"
      className="relative scroll-mt-24 lg:scroll-mt-[5.25rem] py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1570077188670-e3a8d69bc5ff?w=1920&q=85"
        alt="Rhode Island coastal harbor and yachts at dusk"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=960&q=80"
        alt="Panoramic ocean horizon from the Rhode Island shoreline"
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        loading="lazy"
        aria-hidden
      />
      <div className="absolute inset-0 bg-navy/78" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <AnimateOnScroll>
            <div className="bg-navy/50 backdrop-blur-md rounded-xl p-9 md:p-14 border border-gold/10 shadow-[0_32px_80px_rgba(0,0,0,0.25)]">
              <SectionEyebrow>{RHODE_ISLAND.eyebrow}</SectionEyebrow>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.85rem] font-bold text-ivory mb-8 leading-[1.12] tracking-tight">
                {RHODE_ISLAND.headline}
              </h2>
              <p className="text-linen/80 text-[15px] md:text-[17px] leading-[1.9] mb-5 tracking-wide font-light">
                {RHODE_ISLAND.body}
              </p>
              <p className="text-linen/60 text-[15px] md:text-base leading-[1.9] font-light tracking-wide">
                {RHODE_ISLAND.secondaryBody}
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
