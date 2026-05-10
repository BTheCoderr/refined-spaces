import { PROCESS } from '../../constants/content'
import { SectionEyebrow } from '../ui/SectionEyebrow'
import { TimelineStep } from '../ui/TimelineStep'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 lg:scroll-mt-[5.25rem] bg-cream py-24 md:py-32 lg:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-14 lg:mb-18">
          <AnimateOnScroll>
            <SectionEyebrow>{PROCESS.eyebrowAccent}</SectionEyebrow>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.85rem] font-bold text-navy leading-[1.12] mb-6 tracking-tight">
              {PROCESS.sectionTitle}
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="hidden lg:flex gap-4">
          {PROCESS.steps.map((step, i) => (
            <TimelineStep
              key={step.title}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={i === PROCESS.steps.length - 1}
              delay={i * 0.1}
            />
          ))}
        </div>

        <div className="lg:hidden space-y-8">
          {PROCESS.steps.map((step, i) => (
            <AnimateOnScroll key={step.title} delay={i * 0.08}>
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-gold/60 flex items-center justify-center bg-cream shrink-0">
                    <span className="font-sans text-xs font-bold text-gold tracking-wider">
                      {step.number}
                    </span>
                  </div>
                  {i < PROCESS.steps.length - 1 && (
                    <div className="w-px flex-1 bg-gold/25 mt-3" />
                  )}
                </div>
                <div className="pb-2 pt-1">
                  <h3 className="font-serif text-lg font-semibold text-navy mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-charcoal/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
