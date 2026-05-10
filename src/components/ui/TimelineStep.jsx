import { AnimateOnScroll } from './AnimateOnScroll'

export function TimelineStep({ number, title, description, isLast, delay = 0 }) {
  return (
    <AnimateOnScroll delay={delay} className="flex-1 relative">
      <div className="flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full border-2 border-gold/60 flex items-center justify-center mb-5 bg-cream transition-all duration-300 hover:bg-gold hover:border-gold group cursor-default">
          <span className="font-sans text-xs font-bold text-gold tracking-wider group-hover:text-navy transition-colors duration-300">
            {number}
          </span>
        </div>

        <h3 className="font-serif text-lg font-semibold text-navy mb-2">{title}</h3>
        <p className="text-[13px] text-charcoal/60 leading-relaxed max-w-[200px]">
          {description}
        </p>
      </div>

      {!isLast && (
        <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gold/30" />
      )}
    </AnimateOnScroll>
  )
}
