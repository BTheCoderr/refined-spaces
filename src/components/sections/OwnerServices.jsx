import {
  Camera,
  MessageCircle,
  CalendarCheck,
  Sparkles,
  Wrench,
  FileCheck,
  BarChart3,
} from 'lucide-react'
import { OWNER_SERVICES } from '../../constants/content'
import { SectionEyebrow } from '../ui/SectionEyebrow'
import { Card } from '../ui/Card'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

const iconMap = { Camera, MessageCircle, CalendarCheck, Sparkles, Wrench, FileCheck, BarChart3 }

export function OwnerServices() {
  return (
    <section id="owners" className="bg-navy py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-14 lg:mb-18">
          <AnimateOnScroll>
            <SectionEyebrow>{OWNER_SERVICES.eyebrow}</SectionEyebrow>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-ivory mb-6 leading-tight">
              {OWNER_SERVICES.headline}
            </h2>
            <p className="max-w-xl mx-auto text-slate/80 text-[15px] md:text-base leading-relaxed">
              {OWNER_SERVICES.body}
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {OWNER_SERVICES.services.map((service, i) => (
            <div
              key={service.title}
              className={
                i === OWNER_SERVICES.services.length - 1
                  ? 'sm:col-span-2 lg:col-span-1'
                  : ''
              }
            >
              <Card
                icon={iconMap[service.icon]}
                title={service.title}
                description={service.description}
                variant="dark"
                delay={i * 0.08}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
