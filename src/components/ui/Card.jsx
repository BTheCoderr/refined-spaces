import { AnimateOnScroll } from './AnimateOnScroll'

export function Card({ icon: Icon, title, description, variant = 'light', delay = 0 }) {
  const styles = {
    light: 'bg-cream border-t-2 border-gold/30 text-charcoal hover:shadow-[0_12px_40px_rgba(14,30,45,0.06)]',
    dark: 'bg-navy-light/50 border-t-2 border-gold/25 text-linen hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]',
  }

  return (
    <AnimateOnScroll delay={delay}>
      <div
        className={`p-8 lg:p-9 rounded-sm transition-all duration-400 ${styles[variant]}`}
      >
        {Icon && (
          <div className="mb-6">
            <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
          </div>
        )}
        <h3 className="font-serif text-lg font-semibold mb-3 leading-snug">{title}</h3>
        <p className="text-sm leading-[1.75] opacity-70">{description}</p>
      </div>
    </AnimateOnScroll>
  )
}
