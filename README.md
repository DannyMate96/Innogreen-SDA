# Innogreen — Smart, Secure & Accessible Homes in Perth

A professional NDIS-specialized property management website built with Next.js, TypeScript, and Tailwind CSS.

Licensed property management agency and registered NDIS provider specialising in Smart Home technology and Specialist Disability Accommodation (SDA).

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** React Icons (Ionicons, Hero Icons, Tabler Icons)
- **Accessibility:** WCAG 2.1 AA compliant

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm (included with Node.js)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Innogreen

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation & footer
│   ├── page.tsx            # Homepage (all 11 sections)
│   ├── globals.css         # Global styles & Tailwind config
│   ├── about/
│   │   ├── page.tsx        # About Us page metadata
│   │   └── AboutContent.tsx
│   ├── smart-homes/
│   │   ├── page.tsx        # Smart Homes page metadata
│   │   └── SmartHomesContent.tsx
│   ├── sda/
│   │   ├── page.tsx        # SDA page metadata
│   │   └── SDAContent.tsx
│   └── contact/
│       ├── page.tsx        # Contact page metadata
│       └── ContactContent.tsx
├── components/
│   ├── AnimatedSection.tsx # Framer Motion scroll animation wrapper
│   ├── Navigation.tsx      # Sticky nav with mobile hamburger menu
│   ├── Footer.tsx          # Multi-column footer
│   ├── Hero.tsx            # Hero with trust badges
│   ├── WhatWeDo.tsx        # What We Do + credentials
│   ├── ServicesCards.tsx    # Smart Homes & SDA service cards
│   ├── InnoGreenHomes.tsx  # Innogreen Homes highlight section
│   ├── SmartHomeTech.tsx   # Technology features grid
│   ├── WhyChooseUs.tsx     # Key differentiators
│   ├── LocationAreas.tsx   # Perth service areas
│   ├── SeniorServices.tsx  # Seniors video doorbell section
│   ├── Testimonials.tsx    # Resident testimonials
│   ├── Credentials.tsx     # Credentials & partnerships
│   └── CallToAction.tsx    # CTA with contact info
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all major sections |
| `/about` | Company history, mission, values, team, accreditations |
| `/smart-homes` | Smart home services, process, FAQ |
| `/sda` | SDA explanation, available properties, application process |
| `/contact` | Contact form, location, contact information |

## Customization

### Content Placeholders

Update these values throughout the codebase to match your real information:

| Placeholder | Current Value |
|-------------|---------------|
| Phone Number | `08 1234 5678` |
| Email | `info@innogreen.net.au` |
| NDIS Provider No | `4050064987` |
| License No | `RA82486` |
| Director License | `RA72601` |
| Director Name | `Arian David Gorjy` |
| Be Connected No | `8006518` |
| Facebook URL | `https://facebook.com` |
| LinkedIn URL | `https://linkedin.com` |

### Brand Colors

Configured in `src/app/globals.css` via Tailwind v4 `@theme` block:

| Token | Color | Usage |
|-------|-------|-------|
| `brand-teal` | `#00BCD4` | Primary accent |
| `brand-green` | `#7FD03F` | Secondary accent / success |
| `brand-blue` | `#4A90E2` | Links |
| `brand-slate` | `#0F172A` | Headlines |
| `brand-gray` | `#475569` | Body text |

## Accessibility Features

- Skip to main content link
- Semantic HTML (`nav`, `main`, `section`, `footer`)
- ARIA labels and roles
- Keyboard navigation support
- Focus-visible indicators (3px teal outline)
- Minimum 44x44px touch targets
- WCAG AA color contrast ratios
- `prefers-reduced-motion` support
- Proper heading hierarchy

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Deploy — no additional configuration needed

### Other Platforms

Build the production bundle:

```bash
npm run build
```

The output will be in the `.next` directory, ready for deployment on any Node.js hosting platform.

## License

All rights reserved. NDIS Provider No: 4050064987 | Real Estate Agency: RA82486
