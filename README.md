# InvestoXpert homepage

A Next.js recreation of the InvestoXpert homepage from the Figma file `Investoxpert Final` (frame "Homepage", node 1-12437).
At a 1440px-wide viewport the page matches the Figma frame pixel for pixel: same copy (including the design's spelling),
Poppins typography, colours, spacing, card sizes, radii, shadows, icons and the images exported from Figma.

## Prerequisites

- Node.js 20 or newer (developed on Node 22)
- npm

## Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## How the page is built

- `src/app/page.tsx` renders the sections in design order inside a fixed 1440px canvas (`.page`).
- One component per section in `src/components/`, and one stylesheet per section in `src/styles/<section>.css`.
  Each section root has the exact height of that section in the Figma frame, so the page is 11,579px tall like the design.
- Copy and image paths live in `src/data/homepage.ts`. Copy is verbatim from the Figma frame.
- Images are the Figma exports, resized and renamed into `public/design/`. The original exports are still in `public/`
  under their hashed names and are not referenced by the page.
- Icons are inline SVGs traced from the design so their shapes match.
- Fonts: Poppins (global), plus Inter where the design uses it (developer strip label, project chips and prices).

## Responsive behaviour

- **1440px and wider:** the design at 1:1, centred.
- **1200–1439px (laptops):** `src/components/FitScale.tsx` zooms the whole 1440px canvas to the viewport width, so it
  looks identical to the design, just smaller.
- **Below 1200px (phones and tablets):** a fluid stacked layout from `src/styles/mobile/<section>.css` (rules only inside
  `@media (max-width: 1199px)`).
- **700–1199px (tablets):** `src/styles/tablet.css` builds on the fluid layout with wider gutters, larger type and
  multi-column grids (denser again from 960px, e.g. iPad landscape).

## Interactivity

Search tabs, property type select and location search; project city menu and filter chips; insight carousel;
testimonial playlist and play state; events rail; FAQ accordion; and a contact dialog opened by every "Contact Us",
"Book Appointment", "View Details" and consultation button.

## SSR and the App Router

The homepage is a React Server Component. Sections that need state (hero search, projects, insights, testimonials,
events, FAQ, contact dialog) are Client Components; the server still renders their initial HTML and the browser hydrates
only those islands.
