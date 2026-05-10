import { Shield, TrendingUp, Handshake } from 'lucide-react'
import { TRUST } from '../../constants/content'
import { SectionEyebrow } from '../ui/SectionEyebrow'
import { Card } from '../ui/Card'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

const iconMap = { Shield, TrendingUp, Handshake }

export function TrustValue() {
  return (
    <section
      id="why-refined-spaces"
      className="scroll-mt-24 lg:scroll-mt-[5.25rem] bg-linen py-24 md:py-32 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-14 lg:mb-18">
          <AnimateOnScroll>
            {TRUST.eyebrow ? <SectionEyebrow>{TRUST.eyebrow}</SectionEyebrow> : null}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.85rem] font-extrabold text-navy mb-6 md:mb-8 leading-[1.12] tracking-tight">
              {TRUST.headline}
            </h2>
            <p className="max-w-2xl mx-auto text-charcoal/70 text-[15px] md:text-[17px] leading-relaxed font-light tracking-wide">
              {TRUST.body}
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TRUST.cards.map((card, i) => (
            <Card
              key={card.title}
              icon={iconMap[card.icon]}
              title={card.title}
              description={card.description}
              delay={i * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
