const COLORS = {
  gold: '#C5A96A',
  navy: '#0E1E2D',
  ivory: '#FFFDF9',
  linen: '#F5F0E8',
}

/**
 * Concept 2 — Timeless RS monogram: refined serif ligature inside a light circle.
 */
export function LogoMonogram({ size = 40, color = COLORS.gold, className = '' }) {
  return (
    <svg
      viewBox="0 0 88 88"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Refined Spaces monogram"
    >
      <circle cx="44" cy="44" r="41" stroke={color} strokeWidth="1.15" opacity="0.38" />
      <circle cx="44" cy="44" r="37" stroke={color} strokeWidth="0.75" opacity="0.18" />
      <text
        x="43"
        y="58"
        textAnchor="middle"
        fill={color}
        fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
        fontSize="36"
        fontWeight="650"
        letterSpacing="-6"
        fontStyle="normal"
      >
        RS
      </text>
    </svg>
  )
}

function Wordmark({ color = COLORS.ivory, className = '' }) {
  return (
    <span
      className={`font-serif font-bold tracking-[0.16em] uppercase leading-none select-none ${className}`}
      style={{ color }}
    >
      Refined Spaces
    </span>
  )
}

/** Stacked tagline — no trailing period */
function TaglineStacked({ primaryColor }) {
  const c = primaryColor || 'rgba(255,253,249,0.45)'
  return (
    <span className={`font-sans font-light text-[10px] tracking-[0.26em] uppercase leading-snug flex flex-col gap-1 select-none`} style={{ color: c }}>
      <span className="block">Curated Stays</span>
      <span className="block">Elevated Experiences</span>
    </span>
  )
}

/** Legacy single-line tagline kept for compat */
function Tagline({ color, className = '' }) {
  const c = color || 'rgba(255,253,249,0.45)'
  return (
    <span
      className={`font-sans font-light text-[10px] tracking-[0.32em] uppercase leading-none select-none ${className}`}
      style={{ color: c }}
    >
      <span className="block sm:inline">Curated Stays</span>
      <span className="hidden sm:inline"> · </span>
      <span className="block sm:inline">Elevated Experiences</span>
    </span>
  )
}

export function LogoStacked({ on = 'dark', iconSize = 48, className = '' }) {
  const markColor = COLORS.gold
  const textColor = on === 'dark' ? COLORS.ivory : COLORS.navy
  const tagColor = on === 'dark' ? 'rgba(255,253,249,0.42)' : 'rgba(14,30,45,0.52)'

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <LogoMonogram size={iconSize} color={markColor} />
      <Wordmark color={textColor} className="text-lg md:text-xl" />
      <TaglineStacked primaryColor={tagColor} />
    </div>
  )
}

export function LogoHorizontal({ on = 'dark', iconSize = 36, className = '' }) {
  const markColor = COLORS.gold
  const textColor = on === 'dark' ? COLORS.ivory : COLORS.navy
  const tagColor = on === 'dark' ? 'rgba(255,253,249,0.4)' : 'rgba(14,30,45,0.45)'

  return (
    <a href="#top" className={`inline-flex items-center gap-3.5 group ${className}`}>
      <LogoMonogram size={iconSize} color={markColor} />
      <div className="flex flex-col gap-1.5">
        <Wordmark color={textColor} className="text-base" />
        <Tagline color={tagColor} />
      </div>
    </a>
  )
}

/** Compact navbar lockup — monogram + wordmark */
export function LogoCompact({ on = 'dark', iconSize = 28, className = '' }) {
  const markColor = COLORS.gold
  const textColor = on === 'dark' ? COLORS.ivory : COLORS.navy

  return (
    <a href="#top" className={`inline-flex items-center gap-2.5 group ${className}`}>
      <LogoMonogram size={iconSize} color={markColor} />
      <Wordmark color={textColor} className="text-sm" />
    </a>
  )
}

export function LogoIcon({ size = 40, color = COLORS.gold, className = '' }) {
  return <LogoMonogram size={size} color={color} className={className} />
}

export function LogoFooter({ className = '' }) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="inline-flex items-center gap-3">
        <LogoMonogram size={32} color={COLORS.gold} />
        <Wordmark color={COLORS.ivory} className="text-sm" />
      </div>
      <TaglineStacked primaryColor="rgba(255,253,249,0.35)" />
      <span className="text-ivory/30 text-xs tracking-wide">Rhode Island</span>
    </div>
  )
}

export { LogoMonogram as LogoMark }
