# Project Root — Context

## What This Project Is
A complete **static frontend website** for a family-owned building materials retail shop in India.
No backend, no database. Fully prerendered at build time and deployable to any static host.

## Tech Stack
| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 5 | Build tool / dev server |
| Tailwind CSS | 3 | Utility-first styling |
| React Router DOM | 6 | Client-side routing (BrowserRouter) |
| react-helmet-async | 3 | Per-page SEO meta tags |
| react-snap | 1 | Post-build static HTML prerendering |
| yet-another-react-lightbox | 3 | Gallery lightbox |
| framer-motion | 12 | Hero section animations |
| lucide-react | latest | SVG icons |

> Node 18 compatible — all deps are pinned to versions that do NOT require Node 20+.

## Business Context
| Field | Value |
|---|---|
| Business type | Building Materials Retail Shop |
| Products | Granite, Kajaria Tiles, Kervit Sanitaryware & Faucets, Astral Pipes |
| Brand credentials | Kajaria Prime Dealership · Astral Distributorship · Kervit Authorised Dealer |
| Placeholder city | Ahmedabad, Gujarat |
| Placeholder phone | +91 98765 43210 |
| Placeholder email | info@patelbuildingmaterials.com |
| WhatsApp number | 919876543210 (in `WhatsAppButton.jsx`) |

## Design Tokens (Tailwind custom colours)
```
brand-brown  →  #3B1F0E   (primary)
brand-beige  →  #C8A97E   (secondary / accents)
brand-gold   →  #B8860B   (highlights / CTA hover)
brand-cream  →  #FAF7F2   (page background)
brand-dark   →  #1C1C1C   (body text)
```

## Fonts
- **Headings:** Playfair Display (Google Fonts) — loaded in `src/index.css`
- **Body:** Inter (Google Fonts)

## Folder Structure
```
/public              → Static assets (favicon.ico, og-image.jpg)
/src
  App.jsx            → Router + route definitions
  main.jsx           → Entry point; HelmetProvider + react-snap hydration logic
  index.css          → Tailwind directives, Google Fonts @import, global resets, .fade-in-up
  /assets            → SVG icons and images (currently placeholder)
  /components        → Reusable UI components (see components/CONTEXT.md)
  /data              → All static JS data arrays (see data/CONTEXT.md)
  /hooks             → Custom React hooks
  /pages             → One file per route (see pages/CONTEXT.md)
nginx.conf           → Nginx VPS deployment config
.htaccess            → Apache/cPanel shared hosting config
README.md            → Setup, build, and deployment instructions
CONTEXT.md           → This file
```

## Key Scripts
```bash
npm run dev       # Vite dev server (localhost:5173)
npm run build     # Vite build + react-snap postbuild (outputs to dist/)
npm run preview   # Preview the production dist/ locally
```

## Build Output (`dist/`)
- `index.html` — app shell
- `about/index.html`, `products/index.html`, etc. — prerendered per-route HTML
- `404.html` — prerendered 404 page
- `assets/` — hashed JS + CSS bundles

## Prerendering Notes
- `react-snap` crawls all routes after `vite build` and writes static HTML
- `vite.config.js` sets `build.target: 'es2015'` so react-snap's bundled Chromium can parse the JS
- `main.jsx` uses `hydrateRoot` when prerendered HTML exists, `createRoot` otherwise
- react-snap config lives inside `package.json` under the `"reactSnap"` key

## Deployment
| Host type | Config file | Notes |
|---|---|---|
| Nginx VPS | `nginx.conf` | `try_files $uri $uri/ $uri.html /index.html` |
| Apache / cPanel | `.htaccess` | RewriteRule serves `.html` files for prerendered routes |

## How to Replace Placeholder Content
| Item | File to edit |
|---|---|
| Business name / logo text | `src/components/Navbar.jsx` → logo `<Link>` block |
| Contact info | `src/pages/Contact.jsx` · `src/components/Footer.jsx` |
| WhatsApp number | `src/components/WhatsAppButton.jsx` → `WHATSAPP_NUMBER` |
| SEO site name | `src/components/SEOHead.jsx` → `SITE_NAME` constant |
| Product data | `src/data/products.js` |
| Gallery images | `src/data/galleryImages.js` |
| Offers | `src/data/offers.js` |
| Stats numbers | `src/data/stats.js` |
| Testimonials | `src/data/testimonials.js` |
| Brand details | `src/data/brands.js` |
| OG image | `public/og-image.jpg` (replace file) |
| Favicon | `public/favicon.ico` (replace file) |
| Domain in nginx | `nginx.conf` → `server_name` |
