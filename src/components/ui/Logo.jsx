import { publicAssetUrl } from '../../utils/assetUrl'

/**
 * Concept 2 — Timeless Monogram brand system.
 *
 * Public components:
 *   - LogoIcon            Icon-only RS monogram; optional open-corner `framed`,
 *                         or `variant="nav"` for the header navy tile mark
 *   - LogoMonogram        Alias kept for backwards compatibility
 *   - LogoCompact         Navbar lockup: icon + REFINED SPACES wordmark
 *   - LogoHorizontal      Horizontal lockup with icon, tagline + optional locale
 *   - LogoHeroHorizontal Hero-only framed horizontal lockup (no locale)
 *   - LogoStacked         Stacked variant of Concept 2 lockup
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
  navy: '#0D1E30',
  ivory: '#FFFDF9',
  linen: '#F5F0E8',
}

const SERIF = "'Playfair Display', Georgia, 'Times New Roman', serif"
const SANS = "'DM Sans', system-ui, sans-serif"

/**
 * Icon-only RS monogram. Reproduces Concept 2's interlocking serif "R" and "S"
 * by overlapping two serif glyphs with negative kerning.
 *
 * Pass `variant="nav"` for the header lockup: midnight navy tile, thin gold
 * rectangular frame with subtle chamfered inner line, vertically stacked RS.
 * (Dominates over `framed` when set.)
 *
 * Pass `framed` for the open-corner architectural frame (no navy fill).
 */
export function LogoIcon({
  size = 40,
  color = COLORS.gold,
  framed = false,
  variant = 'default',
  className = '',
  title = 'Refined Spaces',
}) {
  const navy = COLORS.navy

  if (variant === 'nav') {
    const vbW = 52
    const vbH = 78
    const w = (size * vbW) / vbH
    const h = size
    return (
      <svg
        viewBox={`0 0 ${vbW} ${vbH}`}
        width={w}
        height={h}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label={title}
      >
        <rect width={vbW} height={vbH} fill={navy} />
        <rect x="3.5" y="3.5" width={vbW - 7} height={vbH - 7} stroke={color} strokeWidth="1.15" />
        <path
          d="M 9 6.5 L 43 6.5 L 45.5 9 L 45.5 69 L 43 71.5 L 9 71.5 L 6.5 69 L 6.5 9 Z"
          stroke={color}
          strokeWidth="0.85"
          strokeLinejoin="round"
          fill="none"
        />
        <text
          x="26"
          y="35"
          textAnchor="middle"
          fill={color}
          fontFamily={SERIF}
          fontSize="22"
          fontWeight="600"
        >
          R
        </text>
        <text
          x="26"
          y="58"
          textAnchor="middle"
          fill={color}
          fontFamily={SERIF}
          fontSize="22"
          fontWeight="600"
        >
          S
        </text>
      </svg>
    )
  }

  if (framed) {
    const w = size
    const h = size
    return (
      <svg
        viewBox="0 0 148 140"
        width={w}
        height={h}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label={title}
      >
        <g
          stroke={color}
          strokeWidth="1.25"
          strokeLinecap="round"
          fill="none"
        >
          <path d="M6 30 V6 H30" />
          <path d="M118 6 H142 V30" />
          <path d="M142 110 V134 H118" />
          <path d="M30 134 H6 V110" />
        </g>
        <text
          x="21"
          y="108"
          fill={color}
          fontFamily={SERIF}
          fontSize="118"
          fontWeight="500"
          letterSpacing="-14"
        >
          R
        </text>
        <text
          x="65"
          y="108"
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
 * Square hero mark only: midnight navy tile, champagne-gold open-corner frame,
 * overlapping horizontal RS monogram with a subtle softness on “S”.
 */
export function LogoHeroFramedRsMark({
  on = 'dark',
  title = 'Refined Spaces RS monogram',
  className = '',
}) {
  if (on === 'dark') {
    return (
      <span
        className={`inline-flex items-center justify-center bg-navy aspect-square shrink-0 overflow-hidden ${className}`}
        role="img"
        aria-label={title}
      >
        <img
          src={publicAssetUrl('/images/logo/refined-spaces-stacked-mark.png')}
          alt=""
          className="h-full w-auto object-contain mix-blend-lighten"
          decoding="async"
        />
      </span>
    )
  }

  const vb = 120
  const bg = COLORS.linen
  const stroke = '#C9AD72'
  const glyph = '#C5A96A'
  return (
    <svg
      viewBox={`0 0 ${vb} ${vb}`}
      xmlns="http://www.w3.org/2000/svg"
      className={`aspect-square shrink-0 ${className}`}
      role="img"
      aria-label={title}
    >
      <rect width={vb} height={vb} fill={bg} />
      <g stroke={stroke} strokeWidth="1.2" strokeLinecap="round" fill="none">
        <path d="M11 41 V11 H41" />
        <path d="M79 11 H109 V41" />
        <path d="M109 79 V109 H79" />
        <path d="M41 109 H11 V79" />
      </g>
      <text x="38" y="65" fill={glyph} fontFamily={SERIF} fontSize="56" fontWeight="500">R</text>
      <text x="56" y="100" fill={glyph} opacity={0.82} fontFamily={SERIF} fontSize="56" fontWeight="500">S</text>
    </svg>
  )
}

/**
 * Hero-page horizontal lockup: framed overlapping RS tile | divider | REFINED SPACES · tagline.
 * No Rhode Island line. Responsive: stacked vertically on narrow viewports.
 */
export function LogoHeroHorizontal({ className = '' }) {
  const divider = COLORS.gold
  const textColor = COLORS.ivory

  return (
    <div
      className={`flex flex-col md:flex-row items-center md:items-stretch justify-center gap-6 md:gap-7 lg:gap-9 w-full mx-auto ${className}`}
    >
      <LogoHeroFramedRsMark className="mx-auto w-[5.625rem] h-[5.625rem] sm:w-[6.125rem] sm:h-[6.125rem] md:w-[7rem] md:h-[7rem] lg:w-[7.75rem] lg:h-[7.75rem]" />

      <span aria-hidden className="hidden md:block w-px self-stretch shrink-0 min-h-[5.75rem]" style={{ backgroundColor: divider, opacity: 0.7 }} />

      <div className="flex flex-col items-center md:items-start gap-3 lg:gap-3.5 text-center md:text-left max-w-md md:max-w-none">
        <Wordmark color={textColor} size="xl" className="text-[1.625rem] sm:text-[2rem] md:text-[2.35rem] lg:text-[2.65rem]" />
        {/* Tagline: two lines mobile, single line tablet+ */}
        <div className="font-sans font-medium uppercase tracking-[0.29em] text-gold text-[11px] sm:text-xs md:text-[13px] lg:text-[14px] leading-relaxed md:tracking-[0.32em]">
          <span className="flex flex-col gap-1 md:hidden items-center">
            <span>CURATED STAYS.</span>
            <span>ELEVATED EXPERIENCES.</span>
          </span>
          <span className="hidden md:block">CURATED STAYS · ELEVATED EXPERIENCES</span>
        </div>
      </div>
    </div>
  )
}

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
 * Concept 2 horizontal lockup: icon | rule | REFINED SPACES + optional tagline/locale.
 * For the hero homepage lockup prefer `LogoHeroHorizontal` (framed navy tile / no locale).
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
 * Compact navbar lockup: stacked framed RS monogram + REFINED SPACES wordmark.
 * Renders the high-fidelity stacked PNG via LogoHeroFramedRsMark for the icon.
 */
export function LogoCompact({
  on = 'dark',
  iconSize = 38,
  className = '',
  href = '#top',
  onClick,
}) {
  const textColor = on === 'dark' ? COLORS.ivory : COLORS.navy

  return (
    <a href={href} onClick={onClick} className={`inline-flex items-center gap-3 ${className}`}>
      <span style={{ width: iconSize, height: iconSize }} className="inline-flex shrink-0">
        <LogoHeroFramedRsMark on={on} className="w-full h-full" />
      </span>
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
  fillColor = COLORS.navy,
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

      <circle cx="120" cy="120" r="117" stroke={ringColor} strokeWidth="3" fill={fillColor} />
      <circle cx="120" cy="120" r="105" stroke={ringColor} strokeWidth="0.9" opacity="0.6" fill="none" />

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

      <circle cx="30" cy="120" r="2.5" fill={ringColor} />
      <circle cx="210" cy="120" r="2.5" fill={ringColor} />

      <text
        fill={textColor}
        fontFamily={SANS}
        fontSize="9.5"
        fontWeight="500"
        letterSpacing="3"
        textAnchor="middle"
      >
        <textPath href="#badgeArcBottom" startOffset="50%">
          CURATED STAYS ELEVATED EXPERIENCES
        </textPath>
      </text>

      <g transform="translate(120 130)">
        <text
          x="0"
          y="0"
          textAnchor="middle"
          fill={markColor}
          fontFamily={SERIF}
          fontSize="88"
          fontWeight="500"
          letterSpacing="-10"
        >
          <tspan dx="-18">R</tspan>
          <tspan dx="-10" opacity="0.86">S</tspan>
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
