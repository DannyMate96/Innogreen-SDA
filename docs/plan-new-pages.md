# New Pages Implementation Plan

> OT Resource Centre + Blog system for innogreen.net.au (main branch, v1 style)

## Summary

Add 2 new page types (3 routes) to the existing v1 site while maintaining full design consistency.

| Page | URL | Description |
|------|-----|-------------|
| OT Resource Centre | `/ot-resource-centre` | Occupational Therapy resources hub — OT services, FAQ, useful links |
| Blog List | `/blog` | Blog post card grid with category filter |
| Blog Post | `/blog/[slug]` | Individual MDX blog post with share buttons |

## Current Tech Stack

- Next.js 16, React 19, Tailwind v4
- react-icons (io5, hi, tb)
- framer-motion + AnimatedSection wrapper
- Fonts: Plus Jakarta Sans (headings), Inter (body)
- Colors: cyan #00BCD4 / green #7FD03F gradient
- Pattern: gradient hero → content sections → CTA

## Phase 1: Blog Infrastructure

1. Install `next-mdx-remote`
2. Create `/content/blog/` directory with 3 seed posts (MDX + frontmatter)
   - `smart-home-ndis-guide.mdx` — NDIS smart home technology guide
   - `sda-eligibility-explained.mdx` — SDA eligibility and application process
   - `ot-assessments-what-to-expect.mdx` — What to expect from an OT assessment
3. Create `src/lib/blog.ts` — MDX file reader, frontmatter parser, slug utilities

### Blog Post Frontmatter Schema

```yaml
---
title: string
description: string
date: YYYY-MM-DD
category: "Smart Homes" | "SDA" | "OT" | "NDIS"
image: /images/blog/filename.jpg (optional)
author: "Innogreen"
---
```

## Phase 2: Page Implementation

### 2A. OT Resource Centre (`/ot-resource-centre`)

Structure (matches v1 page pattern):
- Gradient hero section (title + subtitle)
- What is OT? — intro section with icon cards
- OT Services — service cards grid (Home Modifications, Assistive Tech Assessment, etc.)
- Who Can Benefit — audience cards
- FAQ Accordion — common OT questions
- CTA Banner — link to Contact page

Files:
- `src/app/ot-resource-centre/page.tsx` (metadata export)
- `src/app/ot-resource-centre/OTResourceContent.tsx` ("use client" component)

### 2B. Blog List (`/blog`)

Structure:
- Gradient hero section
- Category filter bar (All, Smart Homes, SDA, OT, NDIS)
- Blog post card grid (image, title, date, category badge, excerpt)
- Cards link to `/blog/[slug]`

Files:
- `src/app/blog/page.tsx` (metadata + server component calling lib/blog.ts)
- `src/app/blog/BlogList.tsx` ("use client" — filter + card grid)

### 2C. Blog Post (`/blog/[slug]`)

Structure:
- Back to blog link
- Post header (title, date, category badge, author)
- MDX rendered content (prose styling)
- Share buttons (copy link, Facebook, LinkedIn)
- Related posts section (same category)

Files:
- `src/app/blog/[slug]/page.tsx` (generateStaticParams + MDX rendering)

## Phase 3: Navigation & Finishing

1. **Navigation.tsx** — Update navLinks:
   ```
   Home | Smart Homes | SDA | OT Resource Centre | Blog | About | Contact
   ```
2. **Footer.tsx** — Add OT Resource Centre and Blog to Quick Links
3. **SEO** — metadata + JSON-LD for each new page
4. **Build test** — `npm run build` to verify no errors
5. **Commit & push** to main

## Design Rules (v1 Consistency)

- Hero: `bg-gradient-to-br from-brand-teal to-brand-green py-24 text-white`
- Section wrapper: `AnimatedSection` from framer-motion
- Headings: `font-heading text-brand-slate`
- Cards: `rounded-2xl border border-brand-border card-hover`
- Icons: `react-icons/io5` primary, `react-icons/hi` secondary
- CTA buttons: `bg-brand-teal hover:bg-brand-teal-dark text-white rounded-lg`
- Max width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

## Estimated File Changes

| Type | Files |
|------|-------|
| New | 6 files (3 pages + blog lib + 3 MDX posts) |
| Modified | 2 files (Navigation.tsx, Footer.tsx) |
| New dependency | next-mdx-remote |
