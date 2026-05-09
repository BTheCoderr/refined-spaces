import { FileText, ClipboardCheck, Users, ShieldCheck } from 'lucide-react'
import { COMPLIANCE } from '../../constants/content'
import { SectionEyebrow } from '../ui/SectionEyebrow'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

const iconMap = { FileText, ClipboardCheck, Users, ShieldCheck }

export function ComplianceCare() {
  return (
    <section className="bg-linen py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimateOnScroll>
            <div>
              <SectionEyebrow>{COMPLIANCE.eyebrow}</SectionEyebrow>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy mb-6 leading-tight">
                {COMPLIANCE.headline}
              </h2>
              <p className="text-charcoal/65 text-[15px] md:text-base leading-[1.8] mb-4">
                {COMPLIANCE.body}
              </p>
              <p className="text-charcoal/50 text-[15px] leading-[1.8]">
                {COMPLIANCE.secondaryBody}
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div className="grid grid-cols-2 gap-5">
              {COMPLIANCE.points.map((point) => {
                const Icon = iconMap[point.icon]
                return (
                  <div
                    key={point.label}
                    className="bg-cream rounded p-6 text-center transition-all duration-300 hover:shadow-[0_8px_30px_rgba(14,30,45,0.06)] border border-gold/8"
                  >
                    <div className="w-11 h-11 mx-auto mb-4 rounded-full bg-gold/8 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <span className="text-[13px] font-semibold text-navy leading-snug">{point.label}</span>
                  </div>
                )
              })}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
