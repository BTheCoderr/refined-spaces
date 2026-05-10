export function Button({ children, variant = 'primary', size = 'default', href, className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center font-sans font-semibold tracking-wider uppercase transition-all duration-300 ease-out cursor-pointer select-none'

  const variants = {
    primary:
      'bg-gold text-navy hover:bg-gold-light hover:shadow-[0_8px_24px_rgba(197,169,106,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-md',
    secondary:
      'border border-ivory/60 text-ivory hover:border-ivory hover:bg-ivory/10 hover:shadow-[0_8px_24px_rgba(255,253,249,0.08)] hover:-translate-y-0.5 active:translate-y-0',
    'secondary-dark':
      'border border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-ivory hover:shadow-[0_8px_24px_rgba(14,30,45,0.15)] hover:-translate-y-0.5 active:translate-y-0',
    ghost:
      'text-gold hover:text-gold-light underline-offset-4 hover:underline',
  }

  const sizes = {
    small: 'px-6 py-2.5 text-[11px] rounded',
    default: 'px-8 py-3.5 text-xs rounded',
    large: 'px-10 py-4 text-[13px] rounded',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
