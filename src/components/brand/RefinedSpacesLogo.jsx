const COLORS = {
  navy: '#0E1E2D',
  gold: '#C5A96A',
  linen: '#F5F0E8',
  slate: '#4A6070',
  charcoal: '#2E3A3F',
  ivory: '#FFFDF9',
}

function LogoEmblemInner() {
  return (
    <g stroke={COLORS.gold} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 148 398 L 148 175 A 108 108 0 0 1 364 175 L 364 398" fill="none" />
      <path d="M 170 386 L 170 178 A 86 86 0 0 1 342 178 L 342 386" fill="none" opacity="0.72" />
      <path d="M128 394 L128 174 M140 394 L140 174 M120 394 H151 M120 174 H151" fill="none" />
      <path d="M384 394 L384 174 M372 394 L372 174 M361 394 H392 M361 174 H392" fill="none" />
      <path d="M112 408 H400 M126 424 H386 M188 398 H324" fill="none" />
      <path d="M245 55 L267 55 L274 93 L238 93 Z" fill="none" />
      <path d="M174 178 H338" fill="none" />
      <line x1="256" y1="178" x2="332.08" y2="153.28" />
      <line x1="256" y1="178" x2="320.72" y2="130.98" />
      <line x1="256" y1="178" x2="303.02" y2="113.28" />
      <line x1="256" y1="178" x2="280.72" y2="101.92" />
      <line x1="256" y1="178" x2="256" y2="98" />
      <line x1="256" y1="178" x2="231.28" y2="101.92" />
      <line x1="256" y1="178" x2="208.98" y2="113.28" />
      <line x1="256" y1="178" x2="191.28" y2="130.98" />
      <line x1="256" y1="178" x2="179.92" y2="153.28" />
      <text
        x="256" y="333" textAnchor="middle" fill={COLORS.gold} stroke="none"
        fontFamily="Cormorant Garamond, Playfair Display, Georgia, serif"
        fontSize="190"
      >
        R
      </text>
    </g>
  )
}

/**
 * Refined Spaces — Heritage Architectural Emblem
 * variant: "icon" | "horizontal" | "compact" | "stacked" | "badge"
 * theme:   "dark" | "light" | "transparent"
 */
export function RefinedSpacesLogo({ variant = 'horizontal', theme = 'transparent', className = '' }) {
  const onDark = theme === 'dark'
  const textColor = onDark ? COLORS.ivory : COLORS.charcoal

  if (variant === 'icon') {
    return (
      <svg viewBox="0 0 512 512" className={className} aria-label="Refined Spaces" role="img">
        {onDark && <rect width="512" height="512" fill={COLORS.navy} />}
        <LogoEmblemInner />
      </svg>
    )
  }

  if (variant === 'stacked') {
    return (
      <svg viewBox="0 0 1200 1500" className={className} aria-label="Refined Spaces" role="img">
        {onDark && <rect width="1200" height="1500" fill={COLORS.navy} />}
        <g transform="translate(410 110) scale(1.5)"><LogoEmblemInner /></g>
        <text x="600" y="860" textAnchor="middle" fill={textColor} fontFamily="Cormorant Garamond, Playfair Display, Georgia, serif" fontSize="94" letterSpacing="0.28em">REFINED</text>
        <text x="600" y="968" textAnchor="middle" fill={textColor} fontFamily="Cormorant Garamond, Playfair Display, Georgia, serif" fontSize="94" letterSpacing="0.28em">SPACES</text>
        <line x1="410" y1="1115" x2="790" y2="1115" stroke={COLORS.gold} strokeWidth="3" />
        <text x="600" y="1190" textAnchor="middle" fill={COLORS.gold} fontFamily="DM Sans, Jost, Arial, sans-serif" fontSize="26" fontWeight="300" letterSpacing="0.30em">CURATED STAYS. ELEVATED EXPERIENCES.</text>
      </svg>
    )
  }

  if (variant === 'compact') {
    return (
      <svg viewBox="0 0 1200 400" className={className} aria-label="Refined Spaces" role="img">
        {onDark && <rect width="1200" height="400" fill={COLORS.navy} />}
        <g transform="translate(30 -10) scale(0.8)"><LogoEmblemInner /></g>
        <line x1="400" y1="80" x2="400" y2="330" stroke={COLORS.gold} strokeWidth="2" opacity="0.7" />
        <text x="470" y="225" fill={textColor} fontFamily="Cormorant Garamond, Playfair Display, Georgia, serif" fontSize="68" letterSpacing="0.20em">REFINED SPACES</text>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 1600 620" className={className} aria-label="Refined Spaces" role="img">
      {onDark && <rect width="1600" height="620" fill={COLORS.navy} />}
      <g transform="translate(95 60) scale(0.86)"><LogoEmblemInner /></g>
      <line x1="555" y1="135" x2="555" y2="500" stroke={COLORS.gold} strokeWidth="2.5" opacity="0.8" />
      <text x="650" y="285" fill={textColor} fontFamily="Cormorant Garamond, Playfair Display, Georgia, serif" fontSize="74" letterSpacing="0.22em">REFINED SPACES</text>
      <text x="655" y="380" fill={COLORS.gold} fontFamily="DM Sans, Jost, Arial, sans-serif" fontSize="24" fontWeight="300" letterSpacing="0.24em">CURATED STAYS. ELEVATED EXPERIENCES.</text>
    </svg>
  )
}
