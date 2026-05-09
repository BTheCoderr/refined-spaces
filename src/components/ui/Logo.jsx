const COLORS = {
  gold: '#C5A96A',
  navy: '#0E1E2D',
  ivory: '#FFFDF9',
  linen: '#F5F0E8',
}

function ArchMark({ size = 40, color = COLORS.gold, className = '' }) {
  const h = size * 1.25
  return (
    <svg
      viewBox="0 0 80 100"
      width={size}
      height={h}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Refined Spaces emblem"
    >
      <path
        d="M6 100V38C6 16.46 21.46 2 40 2C58.54 2 74 16.46 74 38V100"
        stroke={color}
        strokeWidth="2.5"
      />
      <line x1="40" y1="2" x2="40" y2="24" stroke={color} strokeWidth="1.2" opacity="0.55" />
      <line x1="40" y1="12" x2="20" y2="28" stroke={color} strokeWidth="1.2" opacity="0.4" />
      <line x1="40" y1="12" x2="60" y2="28" stroke={color} strokeWidth="1.2" opacity="0.4" />
      <line x1="40" y1="7" x2="13" y2="40" stroke={color} strokeWidth="0.8" opacity="0.22" />
      <line x1="40" y1="7" x2="67" y2="40" stroke={color} strokeWidth="0.8" opacity="0.22" />
      <text
        x="40"
        y="75"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="50"
        fontWeight="600"
        fill={color}
        letterSpacing="1"
      >
        R
      </text>
      <path
        d="M10 91Q18 87 26 91T42 91Q50 87 58 91T70 91"
        stroke={color}
        strokeWidth="1.2"
        opacity="0.3"
      />
      <line x1="6" y1="100" x2="74" y2="100" stroke={color} strokeWidth="1.8" />
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

function Tagline({ color, className = '' }) {
  const c = color || 'rgba(255,253,249,0.45)'
  return (
    <span
      className={`font-sans font-light text-[10px] tracking-[0.32em] uppercase leading-none select-none ${className}`}
      style={{ color: c }}
    >
      Curated Stays. Elevated Experiences.
    </span>
  )
}

/**
 * Full stacked lockup: icon centered above wordmark above tagline.
 * Best for hero, splash, print collateral.
 */
export function LogoStacked({ on = 'dark', iconSize = 48, className = '' }) {
  const markColor = COLORS.gold
  const textColor = on === 'dark' ? COLORS.ivory : COLORS.navy
  const tagColor = on === 'dark' ? 'rgba(255,253,249,0.4)' : 'rgba(14,30,45,0.45)'

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <ArchMark size={iconSize} color={markColor} />
      <Wordmark color={textColor} className="text-lg md:text-xl" />
      <Tagline color={tagColor} />
    </div>
  )
}

/**
 * Horizontal lockup: icon left, wordmark + tagline stacked right.
 * Best for medium-width spaces, documents, email signatures.
 */
export function LogoHorizontal({ on = 'dark', iconSize = 36, className = '' }) {
  const markColor = COLORS.gold
  const textColor = on === 'dark' ? COLORS.ivory : COLORS.navy
  const tagColor = on === 'dark' ? 'rgba(255,253,249,0.4)' : 'rgba(14,30,45,0.45)'

  return (
    <a href="#top" className={`inline-flex items-center gap-3.5 group ${className}`}>
      <ArchMark size={iconSize} color={markColor} />
      <div className="flex flex-col gap-1.5">
        <Wordmark color={textColor} className="text-base" />
        <Tagline color={tagColor} />
      </div>
    </a>
  )
}

/**
 * Compact navbar version: icon + wordmark only, no tagline.
 * Tighter spacing for fixed navigation.
 */
export function LogoCompact({ on = 'dark', iconSize = 28, className = '' }) {
  const markColor = COLORS.gold
  const textColor = on === 'dark' ? COLORS.ivory : COLORS.navy

  return (
    <a href="#top" className={`inline-flex items-center gap-2.5 group ${className}`}>
      <ArchMark size={iconSize} color={markColor} />
      <Wordmark color={textColor} className="text-sm" />
    </a>
  )
}

/**
 * Icon-only version: just the arch + R mark.
 * For favicons, profile photos, small placements.
 */
export function LogoIcon({ size = 40, color = COLORS.gold, className = '' }) {
  return <ArchMark size={size} color={color} className={className} />
}

/**
 * Footer lockup: horizontal with tagline + location line.
 */
export function LogoFooter({ className = '' }) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="inline-flex items-center gap-3">
        <ArchMark size={32} color={COLORS.gold} />
        <Wordmark color={COLORS.ivory} className="text-sm" />
      </div>
      <Tagline color="rgba(255,253,249,0.35)" />
      <span className="text-ivory/30 text-xs tracking-wide">
        Providence, Rhode Island
      </span>
    </div>
  )
}

export { ArchMark as LogoMark }
