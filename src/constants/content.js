export const PARTNER_CTA_LABEL = 'Partner With Us'

/** Desktop + mobile drawer order (Partners CTA renders separately). */
export const HEADER_NAV = [
  {
    label: 'Who Are We',
    href: '#who-we-are',
    children: [
      { label: 'Why Refined Spaces', href: '#why-refined-spaces' },
      { label: 'The Guest Experience', href: '#guest-experience' },
      { label: 'Compliance & Care', href: '#compliance-care' },
    ],
  },
  { label: 'For Owners', href: '#for-owners' },
  { label: 'About Rhode Island', href: '#about-rhode-island' },
  { label: 'Our Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

/** Flat links for footer “Navigate”. */
export const FOOTER_NAV_LINKS = [
  { label: 'Who Are We', href: '#who-we-are' },
  { label: 'For Owners', href: '#for-owners' },
  { label: 'About Rhode Island', href: '#about-rhode-island' },
  { label: 'Our Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const HERO = {
  eyebrow: 'Rhode Island',
  headlineLine1: 'Curated Stays',
  headlineLine2: 'Elevated Experiences',
  subheadline:
    'Premium luxury homes and short-term stays across Rhode Island—with full-service, professional management, high-end hospitality, and meticulous standards from Newport to Narragansett, Providence to the coast.',
  primaryCta: 'Partner With Us',
  secondaryCta: 'Explore the Guest Experience',
  mosaic: [
    {
      url: '/images/hero/providence-overhead.jpg',
      alt: 'Providence, Rhode Island skyline from above at dusk',
    },
    {
      url: '/images/hero/newport-beach.jpg',
      alt: 'Newport, Rhode Island coastline and Atlantic shoreline',
    },
    {
      url: '/images/hero/luxury-pool.jpg',
      alt: 'Sparkling infinity pool with open-water views',
    },
    {
      url: '/images/hero/golden-hour-exterior.jpg',
      alt: 'Luxury residence exterior at golden hour with warm illuminated windows',
    },
  ],
}

export const WHO_WE_ARE = {
  headline: 'Who Are We',
  body:
    "Refined Spaces was born at the intersection of Ivy League heritage and the new era of global hospitality. As the Rhode Island market shifts toward professionalized standards, we identified a critical gap: properties with immense potential were being held back by average management. We don't just host — we curate elite real estate assets that represent the best of our community.",
}

export const TRUST = {
  eyebrow: '',
  headline: 'Why Refined Spaces?',
  body:
    "We combine hands-on hospitality expertise with meticulous operational care to protect your property's reputation, helping it perform at its best while being cared for at every step.",
  cards: [
    {
      title: 'Protected Investment',
      description:
        "Every detail supports your asset's long-term value. From discerning guest sourcing to vigilant maintenance oversight, elite standards prevail.",
      icon: 'Shield',
    },
    {
      title: 'Revenue Anchored in Quality',
      description:
        'Strategic pricing, elevated presentation, and five-star encounters drive enduring performance without compromising architectural or brand integrity.',
      icon: 'TrendingUp',
    },
    {
      title: 'A Partner, Not a Platform',
      description:
        'Direct access to principals and operators — transparent stewardship for owners expecting white-glove care.',
      icon: 'Handshake',
    },
  ],
}

export const OWNER_SERVICES = {
  eyebrow: '',
  headline: 'Full-Service Management',
  body:
    'Refined Spaces is a net positive to everyone we partner with — full-service management rooted in Rhode Island, built around your success.',
  services: [
    {
      title: 'Listing Setup',
      description:
        'We optimize your titles, descriptions, amenities, and visuals, positioning your listing to stand out and convert consistently.',
      icon: 'ClipboardList',
    },
    {
      title: 'Guest Communication',
      description:
        'We manage all guest communication in timely, professional responses, guiding inquiries to bookings and five-star experiences.',
      icon: 'MessageCircle',
    },
    {
      title: 'Pricing & Availability',
      description:
        'Strategic pricing and availability management designed to maximize your revenue, occupancy, and overall listing performance.',
      icon: 'LineChart',
    },
    {
      title: 'Booking Coordination',
      description:
        'We handle all booking inquiries promptly — screening guests and managing requests to keep your calendar full and protected.',
      icon: 'CalendarCheck',
    },
    {
      title: 'Cleaning',
      description:
        'Our in-house team delivers consistent, detail-oriented turnovers, ensuring every property is spotless and guest-ready.',
      icon: 'Sparkles',
    },
    {
      title: 'Onsite guest support',
      description:
        'On-ground support from check-in to checkout — we handle guest needs and resolve issues so every stay runs smoothly.',
      icon: 'HeadphonesIcon',
    },
    {
      title: 'Listing photography',
      description:
        "High-quality photography that highlights your property's best features, capturing attention and increasing booking conversion.",
      icon: 'Camera',
    },
    {
      title: 'Interior design & styling',
      description:
        'We style with intention while creating inviting, memorable environments that enhance guest experience and drive great performance.',
      icon: 'Palette',
    },
    {
      title: 'Maintenance Coordination',
      description:
        "Proactive property care and rapid response to protect your home and your guests' experience.",
      icon: 'Wrench',
    },
    {
      title: 'Compliance Guidance',
      description:
        "Navigate Rhode Island's short-term rental landscape with confidence. We stay informed so you stay protected.",
      icon: 'FileCheck',
    },
  ],
}

export const GUEST_EXPERIENCE = {
  eyebrow: '',
  headline: 'The Guest Experience',
  body:
    'Every stay blends privacy and discretion with the warmth of a dedicated host—from arrival through departure—tailored for premium residences across Rhode Island.',
  pillars: [
    {
      title: 'Seamless Arrival',
      description:
        'Clear guidance, calibrated access protocols, and a welcome sequence calibrated to elevate the first impressions that matter.',
      icon: 'DoorOpen',
    },
    {
      title: 'Clean, Curated Spaces',
      description:
        'Meticulously prepared rooms, editorial styling, and hotel-grade housekeeping standards awaiting every arrival.',
      icon: 'Gem',
    },
    {
      title: 'Local Hospitality',
      description:
        'Curated neighborhood guides, local recommendations, and a welcoming experience that helps guests enjoy the best of the area.',
      icon: 'MapPin',
    },
    {
      title: 'Responsive Communication',
      description:
        'Concierge-level responsiveness — questions answered swiftly, nuances anticipated, issues resolved discreetly.',
      icon: 'HeadphonesIcon',
    },
  ],
}

export const RHODE_ISLAND = {
  eyebrow: 'About Rhode Island',
  headline: 'Rooted in Rhode Island',
  body:
    'Across the Ocean State—from iconic Newport harbors and South County beaches to Providence’s civic energy and the quiet bays of Narragansett Bay—Rhode Island delivers breadth without sacrificing depth. We curate narratives that elevate each destination: architecture and craft, shoreline and skyline, culinary identity, and neighborhoods that invite discovery.',
  secondaryBody:
    'Your property joins a statewide portfolio presented with intention. We showcase every region with the same meticulous standard whether the backdrop is marina views, collegiate heritage, lighthouse coasts, gallery districts, or unhurried seasonal retreats—honoring Rhode Island end to end, not through a single city lens.',
}

export const COMPLIANCE = {
  sectionTitle: 'Compliance & Care',
  eyebrowAccent: 'Responsible Stewardship',
  headline: 'Ownership Protection. Trusted Professional Standards.',
  body:
    "Rhode Island’s short-term rental landscape demands precision — from ordinance alignment to conscientious hosting. Our counsel helps owners uphold responsibility while safeguarding guests, neighborhoods, and the integrity of elite inventory.",
  secondaryBody:
    'We monitor evolving statutes, registration cadence, taxation alignment, operational documentation, neighbor communication, safety protocols, and hospitality codes — ensuring reputations endure as durably as the homes we represent.',
  points: [
    { label: 'Statewide Ordinance Literacy', icon: 'FileText' },
    { label: 'Compliance Documentation', icon: 'ClipboardCheck' },
    { label: 'Neighbor Stewardship', icon: 'Users' },
    { label: 'Guest Safety Assurance', icon: 'ShieldCheck' },
  ],
}

export const PROCESS = {
  eyebrowAccent: 'From Introduction to Excellence',
  sectionTitle: 'Our Process',
  steps: [
    {
      number: '01',
      title: 'Discover',
      description:
        'Our team aligns on your ambitions, underwriting standards, experiential goals, and the narrative your property merits.',
    },
    {
      number: '02',
      title: 'Prepare',
      description:
        'Property preparation, listing creation, and professional photography to meet our standards.',
    },
    {
      number: '03',
      title: 'Launch',
      description:
        'Your residence debuts across premium ecosystems with calibrated positioning reflecting its caliber.',
    },
    {
      number: '04',
      title: 'Manage',
      description:
        'Every guest choreography, housekeeping evolution, engineering touchpoint, and financial insight managed with obsessive detail.',
    },
    {
      number: '05',
      title: 'Optimize',
      description:
        'Continuous refinement of revenue strategy, experiential nuance, and asset preservation metrics.',
    },
  ],
}

export const FINAL_CTA = {
  headline: 'Contact Us',
  subheadline:
    'Whether you own a Rhode Island property or are planning your next Rhode Island stay, our team is here to help. Share a few details and we will follow up.',
}

export const FOOTER = {
  taglineLine1: 'Curated Stays',
  taglineLine2: 'Elevated Experiences',
  location: 'Rhode Island',
  externalBookStayHref:
    'https://www.airbnb.com/users/profile/1577609734256632821?previous_page_name=PdpHomeMarketplace',
  /** Visible label for the Airbnb portfolio link */
  externalListingsLinkLabel: 'Explore on Airbnb',
  contact: {
    company: 'Refined Spaces',
    email: 'werefinespaces@gmail.com',
    phone: '(401) 952-7897',
    phoneTel: '+14019527897',
  },
  legal: [],
}
