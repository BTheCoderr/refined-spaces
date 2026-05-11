/**
 * Concept 2 — Timeless Monogram brand system.
 *
 * Public components:
 *   - LogoIcon            Icon-only RS monogram (no surrounding circle)
 *   - LogoMonogram        Alias kept for backwards compatibility
 *   - LogoCompact         Navbar lockup: icon + REFINED SPACES wordmark
 *   - LogoHorizontal      Horizontal lockup with wordmark, tagline, locale (hero)
 *   - LogoStacked         Stacked variant of the horizontal lockup
 *   - LogoCircleBadge     Concept 2 "Circle Badge" version (lower footer)
 *   - LogoFooter          Footer brand block built from LogoCircleBadge
 *   - Wordmark            Standalone "REFINED SPACES" wordmark
 *
 * Color palette is sourced from index.css (Tailwind theme tokens) — the hex
 * literals here mirror those tokens so the SVG marks render consistently when
 * placed on hero/footer surfaces.
 */

const COLORS = {
  gold: '#C5A96A',
  navy: '#0E1E2D',
  ivory: '#FFFDF9',
  linen: '#F5F0E8',
}

const SERIF = "'Playfair Display', Georgia, 'Times New Roman', serif"
const SANS = "'DM Sans', system-ui, sans-serif"

/**
 * Icon-only RS monogram. Reproduces Concept 2's interlocking serif "R" and "S"
 * by overlapping two serif glyphs with negative kerning. No circle, no frame —
 * use LogoCircleBadge when the bordered version is needed.
 */
export function LogoIcon({ size = 40, color = COLORS.gold, className = '', title = 'Refined Spaces' }) {
  const w = size
  const h = size * 0.95
  return (
    <svg
      viewBox="0 0 110 105"
      width={w}
      height={h}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <text
        x="2"
        y="90"
        fill={color}
        fontFamily={SERIF}
        fontSize="118"
        fontWeight="500"
        letterSpacing="-14"
      >
        R
      </text>
      <text
        x="46"
        y="90"
        fill={color}
        fontFamily={SERIF}
        fontSize="118"
        fontWeight="500"
        letterSpacing="-14"
      >
        S
      </text>
    </svg>
  )
}

export const LogoMonogram = LogoIcon
export const LogoMark = LogoIcon

/**
 * "REFINED SPACES" wordmark. Editorial serif, all caps, wide tracking.
 */
export function Wordmark({ color = COLORS.ivory, size = 'md', className = '' }) {
  const sizeClasses = {
    xs: 'text-[10.5px] tracking-[0.22em]',
    sm: 'text-[12.5px] tracking-[0.24em]',
    md: 'text-[16px] tracking-[0.26em]',
    lg: 'text-[22px] md:text-[26px] tracking-[0.28em]',
    xl: 'text-[28px] md:text-[34px] lg:text-[40px] tracking-[0.3em]',
  }
  return (
    <span
      className={`font-serif font-medium uppercase leading-none select-none ${sizeClasses[size] ?? sizeClasses.md} ${className}`}
      style={{ color }}
    >
      Refined Spaces
    </span>
  )
}

/**
 * Concept 2 tagline line: "CURATED STAYS · ELEVATED EXPERIENCES" — gold caps,
 * wide tracking, clean sans. Stacks on narrow widths.
 */
function TaglineLine({ color = COLORS.gold, size = 'sm', stack = false, className = '' }) {
  const sizeClasses = {
    xs: 'text-[8.5px] tracking-[0.22em]',
    sm: 'text-[10px] tracking-[0.26em]',
    md: 'text-[11px] tracking-[0.3em]',
    lg: 'text-[13px] md:text-[14px] tracking-[0.32em]',
  }
  const cls = `font-sans font-medium uppercase leading-snug select-none ${sizeClasses[size] ?? sizeClasses.sm} ${className}`
  if (stack) {
    return (
      <span className={`${cls} flex flex-col gap-1`} style={{ color }}>
        <span className="block">Curated Stays</span>
        <span className="block">Elevated Experiences</span>
      </span>
    )
  }
  return (
    <span className={cls} style={{ color }}>
      <span className="block sm:inline">Curated Stays</span>
      <span className="hidden sm:inline"> · </span>
      <span className="block sm:inline">Elevated Experiences</span>
    </span>
  )
}

/**
 * Concept 2 subtitle: locale line with em-dashes. Kept stateless so we can
 * surface "Rhode Island" statewide rather than a Providence-specific phrase.
 */
function LocaleLine({ color = COLORS.gold, className = '' }) {
  return (
    <span
      className={`font-sans font-normal uppercase text-[9.5px] tracking-[0.32em] leading-none select-none inline-flex items-center gap-2 ${className}`}
      style={{ color }}
    >
      <span aria-hidden className="inline-block w-4 h-px" style={{ backgroundColor: color }} />
      Rhode Island
      <span aria-hidden className="inline-block w-4 h-px" style={{ backgroundColor: color }} />
    </span>
  )
}

/**
 * Concept 2 horizontal lockup. Used as the hero brand mark.
 *
 * Renders: [ icon | thin gold rule | REFINED SPACES wordmark + tagline + locale ]
 *
 * When `as="div"` (default) the lockup is a presentational element. Pass
 * `as="a"` for an anchored variant.
 */
export function LogoHorizontal({
  on = 'dark',
  iconSize = 64,
  size = 'lg',
  showLocale = true,
  className = '',
  as = 'div',
  href = '#top',
  onClick,
}) {
  const markColor = COLORS.gold
  const textColor = on === 'dark' ? COLORS.ivory : COLORS.navy
  const tagColor = on === 'dark' ? COLORS.gold : COLORS.gold
  const ruleColor = on === 'dark' ? 'rgba(197,169,106,0.55)' : 'rgba(197,169,106,0.6)'

  const wordmarkSize = size === 'xl' ? 'xl' : size === 'lg' ? 'lg' : 'md'
  const taglineSize = size === 'xl' ? 'lg' : size === 'lg' ? 'md' : 'sm'

  const inner = (
    <>
      <LogoIcon size={iconSize} color={markColor} />
      <span
        aria-hidden
        className="block self-stretch w-px shrink-0"
        style={{ backgroundColor: ruleColor }}
      />
      <span className="flex flex-col items-start gap-2.5">
        <Wordmark color={textColor} size={wordmarkSize} />
        <TaglineLine color={tagColor} size={taglineSize} />
        {showLocale ? <LocaleLine color={tagColor} /> : null}
      </span>
    </>
  )

  const baseClasses = `inline-flex items-stretch gap-5 md:gap-6 ${className}`

  if (as === 'a') {
    return (
      <a href={href} onClick={onClick} className={baseClasses}>
        {inner}
      </a>
    )
  }
  return <div className={baseClasses}>{inner}</div>
}

/**
 * Vertical stacked variant of the Concept 2 lockup.
 */
export function LogoStacked({ on = 'dark', iconSize = 64, className = '', showLocale = true }) {
  const markColor = COLORS.gold
  const textColor = on === 'dark' ? COLORS.ivory : COLORS.navy

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <LogoIcon size={iconSize} color={markColor} />
      <Wordmark color={textColor} size="lg" />
      <TaglineLine color={COLORS.gold} size="md" stack />
      {showLocale ? <LocaleLine color={COLORS.gold} /> : null}
    </div>
  )
}

/**
 * Compact navbar lockup: icon + wordmark, single line.
 */
export function LogoCompact({ on = 'dark', iconSize = 32, className = '', href = '#top', onClick }) {
  const markColor = COLORS.gold
  const textColor = on === 'dark' ? COLORS.ivory : COLORS.navy

  return (
    <a href={href} onClick={onClick} className={`inline-flex items-center gap-3 ${className}`}>
      <LogoIcon size={iconSize} color={markColor} />
      <Wordmark color={textColor} size="sm" />
    </a>
  )
}

/**
 * Circle badge version from Concept 2 — gold ring containing arched
 * "REFINED SPACES" at top, RS monogram in the center, and arched tagline at
 * bottom. Designed to sit on a navy surface so the badge's interior blends
 * into the section background.
 */
export function LogoCircleBadge({
  size = 168,
  ringColor = COLORS.gold,
  textColor = COLORS.gold,
  markColor = COLORS.gold,
  fillColor = 'transparent',
  className = '',
  title = 'Refined Spaces · Curated Stays · Elevated Experiences',
}) {
  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <defs>
        <path
          id="badgeArcTop"
          d="M 30 120 a 90 90 0 0 1 180 0"
          fill="none"
        />
        <path
          id="badgeArcBottom"
          d="M 36 120 a 84 84 0 0 0 168 0"
          fill="none"
        />
      </defs>

      <circle cx="120" cy="120" r="116" stroke={ringColor} strokeWidth="2" fill={fillColor} />
      <circle cx="120" cy="120" r="105" stroke={ringColor} strokeWidth="0.75" opacity="0.55" fill="none" />

      <text
        fill={textColor}
        fontFamily={SERIF}
        fontSize="20"
        fontWeight="500"
        letterSpacing="6"
        textAnchor="middle"
      >
        <textPath href="#badgeArcTop" startOffset="50%">
          REFINED SPACES
        </textPath>
      </text>

      <text
        fill={textColor}
        fontFamily={SANS}
        fontSize="9.5"
        fontWeight="500"
        letterSpacing="3"
        textAnchor="middle"
      >
        <textPath href="#badgeArcBottom" startOffset="50%">
          CURATED STAYS · ELEVATED EXPERIENCES
        </textPath>
      </text>

      <g transform="translate(120 122)">
        <text
          x="0"
          y="22"
          textAnchor="middle"
          fill={markColor}
          fontFamily={SERIF}
          fontSize="80"
          fontWeight="500"
          letterSpacing="-10"
        >
          <tspan dx="-18">R</tspan>
          <tspan dx="-10">S</tspan>
        </text>
        <text
          x="0"
          y="46"
          textAnchor="middle"
          fill={textColor}
          fontFamily={SANS}
          fontSize="8"
          fontWeight="500"
          letterSpacing="3.5"
        >
          RHODE ISLAND
        </text>
      </g>
    </svg>
  )
}

/**
 * Footer brand block — Circle Badge on a navy surface, sized for the footer
 * column. The badge fill is transparent so the surrounding navy reads through,
 * leaving only the champagne-gold ring + type visible.
 */
export function LogoFooter({ className = '', badgeSize = 132 }) {
  return (
    <div className={`flex flex-col items-start gap-5 ${className}`}>
      <LogoCircleBadge size={badgeSize} />
    </div>
  )
}
