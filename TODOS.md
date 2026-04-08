# TODOS

Tracked items from the /plan-ceo-review session on 2026-04-08.

---

## P0 — Fix Contact Form Backend (CRITICAL — currently broken)

**What:** `handleSubmit()` in `src/app/contact/ContactContent.tsx` (~line 50) calls `setSubmitted(true)` only. No data is sent anywhere. Every form submission on the live site is silently lost.

**Why:** Innogreen is losing qualified leads right now. Every enquiry submitted through the contact form disappears.

**Pros:** Actually receive leads. Everything else (support coordinator hub, form segmentation) is useless without this.

**Cons:** Requires a backend decision: Formspree (free tier, 50 submissions/month), Resend/Nodemailer (Next.js API route), or Netlify Forms. Formspree is fastest — add `action="https://formspree.io/f/{id}"` and remove client-side submit handling.

**Context:** `ContactContent.tsx` — `handleSubmit` at ~line 50. Comment says "In production, this would send to an API endpoint." Recommended fix: use Formspree (no backend needed, free tier is sufficient, 5-minute integration). Alternatively, `src/app/api/contact/route.ts` with Resend/Nodemailer if more control is needed.

**Effort:** S (human: 2h / CC: 20min) | **Priority:** P0 — do this FIRST

**Depends on:** Nothing. Fix before any other form work.

---

## P1 — GA4 Conversion Event Tracking

**What:** Add 3 GA4 client-side events to measure site effectiveness.
- `contact_form_submitted` with `enquirer_type` custom dimension
- `referral_form_downloaded` on PDF download click
- `sda_vacancy_enquiry_clicked` on vacancy enquire button

**Why:** Without this, there's no way to know if the support coordinator hub or SDA vacancies page are generating leads. Marketing is flying blind.

**Pros:** Immediate visibility into conversion by persona. Know which pages work within days of launch.

**Cons:** Requires GA4 setup (Vercel Analytics is already in place — GA4 events are additional).

**Context:** Vercel Analytics is already installed (`src/app/layout.tsx`). GA4 events are separate — they fire `window.gtag()` calls. Need GA4 tracking ID configured in layout if not already done.

**Effort:** S (human: 2h / CC: 15min) | **Priority:** P1

**Depends on:** New pages (support-coordinators, sda-vacancies, contact form segmentation) must be built first.

---

## P2 — SDA Vacancies Empty State

**What:** When no SDA properties are listed, show a graceful empty state:
"No listings currently available — join our waitlist" linking to `/contact?subject=SDA+Waitlist`.

**Why:** A blank section looks broken. This turns zero-listing state into a conversion opportunity.

**Pros:** No listing = still captures intent. Removes visual broken state.

**Cons:** Trivial. No real cons.

**Context:** The `/sda-vacancies` page will use hardcoded static data initially. When the property array is empty, render the empty state instead of an empty grid.

**Effort:** S (human: 30min / CC: 5min) | **Priority:** P2

**Depends on:** `/sda-vacancies` page built first.

---

## P2 — Resources Dropdown in Navigation

**What:** Collapse OT Resource Centre, NDIS Funding Guide, and Blog into a "Resources ▾" dropdown in the desktop nav to prevent nav crowding at 8+ items.

**Why:** 8 top-level nav items is too many. Dropdown keeps the primary nav clean while making resource pages discoverable.

**Pros:** Cleaner desktop UX. Scales as more resource pages are added. Mobile hamburger unaffected.

**Cons:** Slightly more complex `Navigation.tsx`. Requires hover/click state management.

**Context:** Currently nav has 7 items. After adding Support Coordinators and NDIS Funding Guide, it hits 9. Group OT Resources, NDIS Funding Guide, and Blog into "Resources" dropdown. Mobile hamburger already handles many items fine.

**Effort:** S (human: 2h / CC: 15min) | **Priority:** P2

**Depends on:** `/ndis-funding-guide` being built first (otherwise only 2 items in dropdown, not worth grouping).

---

## P3 — Extract CredentialBadges Component

**What:** Extract the 4-credential badge block (NDIS Registered Provider, Licensed Real Estate Agency, REIWA Member, WA Police Security Agent) into a shared `<CredentialBadges />` component in `src/components/`.

**Why:** Currently duplicated in `WhatWeDo.tsx` and `Credentials.tsx`. Any new page that needs credentials will copy-paste it a third time.

**Pros:** DRY. Single source of truth for credential display. Update once, reflects everywhere.

**Cons:** Very minor — trivial refactor.

**Context:** `WhatWeDo.tsx` renders a simple grid of 4 icon+title pairs. `Credentials.tsx` renders essentially the same thing with slightly more detail (adds `detail` subtitle). The extracted component could accept an optional `showDetail` prop. Both files live in `src/components/`.

**Effort:** S (human: 1h / CC: 10min) | **Priority:** P3

**Depends on:** Nothing.
