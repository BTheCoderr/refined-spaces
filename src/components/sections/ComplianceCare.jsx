import { FileText, ClipboardCheck, Users, ShieldCheck } from 'lucide-react'
import { COMPLIANCE } from '../../constants/content'
import { SectionEyebrow } from '../ui/SectionEyebrow'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

const iconMap = { FileText, ClipboardCheck, Users, ShieldCheck }

export function ComplianceCare() {
  return (
    <section
      id="compliance-care"
      className="scroll-mt-24 lg:scroll-mt-[5.25rem] bg-linen py-24 md:py-32 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimateOnScroll>
            <div>
              <SectionEyebrow>{COMPLIANCE.eyebrowAccent}</SectionEyebrow>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.85rem] font-extrabold text-navy mb-8 leading-[1.12] tracking-tight">
                {COMPLIANCE.sectionTitle}
              </h2>
              <p className="font-serif text-2xl text-navy mb-8 font-normal leading-snug">
                {COMPLIANCE.headline}
              </p>
              <p className="text-charcoal/72 text-[15px] md:text-[17px] leading-[2] mb-5 font-light tracking-wide">
                {COMPLIANCE.body}
              </p>
              <p className="text-charcoal/54 text-[15px] leading-[1.9] font-light tracking-wide">
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
                    className="bg-cream rounded-lg p-6 text-center transition-all duration-300 hover:shadow-[0_14px_40px_rgba(14,30,45,0.06)] border border-gold/8"
                  >
                    <div className="w-11 h-11 mx-auto mb-4 rounded-full bg-gold/8 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <span className="text-[12px] font-semibold text-navy leading-snug">{point.label}</span>
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
