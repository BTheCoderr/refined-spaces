import { Shield, TrendingUp, Handshake } from 'lucide-react'
import { TRUST } from '../../constants/content'
import { SectionEyebrow } from '../ui/SectionEyebrow'
import { Card } from '../ui/Card'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

const iconMap = { Shield, TrendingUp, Handshake }

export function TrustValue() {
  return (
    <section className="bg-linen py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-14 lg:mb-18">
          <AnimateOnScroll>
            <SectionEyebrow>{TRUST.eyebrow}</SectionEyebrow>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy mb-6 leading-tight">
              {TRUST.headline}
            </h2>
            <p className="max-w-2xl mx-auto text-charcoal/65 text-[15px] md:text-base leading-relaxed">
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
