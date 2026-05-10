import { DoorOpen, Gem, MapPin, Headphones } from 'lucide-react'
import { GUEST_EXPERIENCE } from '../../constants/content'
import { SectionEyebrow } from '../ui/SectionEyebrow'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

const iconMap = {
  DoorOpen,
  Gem,
  MapPin,
  HeadphonesIcon: Headphones,
}

export function GuestExperience() {
  return (
    <section
      id="guest-experience"
      className="scroll-mt-24 lg:scroll-mt-[5.25rem] bg-cream py-24 md:py-32 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-14 lg:mb-18">
          <AnimateOnScroll>
            {GUEST_EXPERIENCE.eyebrow ? <SectionEyebrow>{GUEST_EXPERIENCE.eyebrow}</SectionEyebrow> : null}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.85rem] font-bold text-navy mb-6 leading-[1.12] tracking-tight">
              {GUEST_EXPERIENCE.headline}
            </h2>
            <p className="max-w-xl mx-auto text-charcoal/70 text-[15px] md:text-[17px] leading-relaxed font-light tracking-wide">
              {GUEST_EXPERIENCE.body}
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {GUEST_EXPERIENCE.pillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon]
            return (
              <AnimateOnScroll key={pillar.title} delay={i * 0.12}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold/35 flex items-center justify-center transition-all duration-400 group-hover:bg-gold/8 group-hover:border-gold/55 group-hover:shadow-[0_0_20px_rgba(197,169,106,0.12)]">
                    <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-navy mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] md:text-sm text-charcoal/60 leading-[1.8] px-2">
                    {pillar.description}
                  </p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
