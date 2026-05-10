import {
  ClipboardList,
  MessageCircle,
  LineChart,
  CalendarCheck,
  Sparkles,
  Headphones,
  Camera,
  Palette,
  Wrench,
  FileCheck,
} from 'lucide-react'
import { OWNER_SERVICES } from '../../constants/content'
import { SectionEyebrow } from '../ui/SectionEyebrow'
import { Card } from '../ui/Card'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

const iconMap = {
  ClipboardList,
  MessageCircle,
  LineChart,
  CalendarCheck,
  Sparkles,
  HeadphonesIcon: Headphones,
  Camera,
  Palette,
  Wrench,
  FileCheck,
}

export function OwnerServices() {
  return (
    <section
      id="for-owners"
      className="scroll-mt-24 lg:scroll-mt-[5.25rem] bg-navy py-24 md:py-32 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-14 lg:mb-18">
          <AnimateOnScroll>
            <SectionEyebrow>{OWNER_SERVICES.eyebrow}</SectionEyebrow>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.85rem] font-bold text-ivory mb-6 md:mb-8 leading-[1.12] tracking-tight">
              {OWNER_SERVICES.headline}
            </h2>
            <p className="max-w-xl mx-auto text-slate/90 text-[15px] md:text-[17px] leading-relaxed font-light tracking-wide">
              {OWNER_SERVICES.body}
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {OWNER_SERVICES.services.map((service, i) => (
            <Card
              key={service.title}
              icon={iconMap[service.icon]}
              title={service.title}
              description={service.description}
              variant="dark"
              delay={i * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
