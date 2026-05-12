# Refined Spaces

Boutique-hotel-level property management in Providence, Rhode Island. Curated stays for guests. Trusted management for owners.

**Live site:** [refinedspaces.netlify.app](https://refinedspaces.netlify.app/)

**Public inquiries (company / team inbox):**  
**Refined Spaces** · [werefinespaces@gmail.com](mailto:werefinespaces@gmail.com) · [(401) 952-7897](tel:+14019527897)  
(Configuration also lives in `src/constants/content.js`.)

---

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Preview Production Build

```bash
npm run preview
```

## Deploy

Hosted on [Netlify](https://www.netlify.com/). Deploys from the `main` branch automatically.

- **Preview deploy:** `netlify deploy`
- **Production deploy:** `netlify deploy --prod`

Build command: `npm run build`
Publish directory: `dist`

---

## Tech Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Forms:** Netlify Forms (with mailto fallback)

Secrets (not committed): copy `.env.example` to `.env` for local `netlify dev`. In **Netlify → Site settings → Environment variables**, add:

- **`RESEND_API_KEY`** — API key from Resend (rotate if ever exposed)
- **`RESEND_TO_EMAIL`** — **`werefinespaces@gmail.com`**
- **`RESEND_FROM_EMAIL`** — **`Refined Spaces <onboarding@resend.dev>`** (or your verified domain sender)

Inquiries are captured in **Netlify Forms** first; a serverless function **`contact-email`** sends a Resend notification after a successful form POST. The API key is never sent to the browser.

## Brand System

### Colors

| Token       | Hex       | Usage                        |
|-------------|-----------|------------------------------|
| Navy        | `#0D1E30` | Primary dark / backgrounds   |
| Navy Light  | `#162838` | Card backgrounds (dark)      |
| Gold        | `#C5A96A` | Accent / CTAs / icons        |
| Gold Light  | `#D4BA88` | Hover states                 |
| Ivory       | `#FFFDF9` | Text on dark                 |
| Cream       | `#FDFBF7` | Light section backgrounds    |
| Linen       | `#F5F0E8` | Alternate light backgrounds  |
| Charcoal    | `#2E3A3F` | Body text on light           |
| Slate       | `#4A6070` | Secondary text               |

### Typography

| Role    | Font               | Usage                   |
|---------|--------------------|-------------------------|
| Serif   | Playfair Display   | Headlines, logo wordmark|
| Sans    | DM Sans            | Body copy, UI text      |
| Accent  | Cormorant Garamond | Eyebrows, editorial     |

### Logo

Concept 2 RS monogram lockups:

- `LogoCompact` — Navbar (`iconVariant="nav"` navy tile mark + wordmark); optional `iconFramed` open-corner variant for other contexts
- `LogoIcon` — placements / favicon; pass `variant="nav"` or `framed`
- `LogoFooter` — Footer circle badge
- `LogoHeroHorizontal` — Hero only: navy framed RS tile, divider, wordmark + gold tagline (no locale)
- `LogoStacked` / `LogoHorizontal` — Stacked/collateral lockups (horizontal may include locale)

All lockups are defined in `src/components/ui/Logo.jsx`.

---

## Project Structure

```
src/
├── App.jsx                     # Root layout
├── main.jsx                    # Entry point
├── index.css                   # Theme tokens + global styles
├── constants/
│   └── content.js              # All copy in one place
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── TrustValue.jsx
│   │   ├── OwnerServices.jsx
│   │   ├── GuestExperience.jsx
│   │   ├── RhodeIsland.jsx
│   │   ├── ComplianceCare.jsx
│   │   ├── Process.jsx
│   │   └── FinalCTA.jsx        # Contact form (Netlify Forms)
│   └── ui/
│       ├── AnimateOnScroll.jsx
│       ├── BackToTop.jsx
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Logo.jsx
│       ├── SectionEyebrow.jsx
│       └── TimelineStep.jsx
└── hooks/
    └── useScrollPosition.js
```
