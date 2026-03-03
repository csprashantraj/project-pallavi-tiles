# src/components/ — Context

## Purpose
Reusable UI components shared across multiple pages.
No component fetches remote data — all content is passed via props or imported from `src/data/`.

---

## Component Reference

### `Layout.jsx`
**Role:** Shared page shell — wraps every route.
- Renders: `<Navbar>` → `<Outlet>` (page content) → `<Footer>` → `<WhatsAppButton>` → `<BackToTop>`
- On every route change: scrolls to top, re-runs `IntersectionObserver` to trigger `.fade-in-up` animations
- Uses `useLocation()` to detect route changes

---

### `Navbar.jsx`
**Role:** Fixed top navigation bar.
- Logo: text-based "Patel / Building Materials" — **replace** the text in the `<Link to="/">` block with a real `<img>` logo
- Nav links array: `navLinks` — add/remove routes here
- Scroll shadow: toggles `shadow-md` + `bg-white/95` after 40px scroll
- Mobile: hamburger (`<Menu>`) toggles a full-width drawer
- Active link: `NavLink` `isActive` prop applies `text-brand-gold border-b-2 border-brand-gold`
- Desktop CTA: "Get Quote" button → `/contact`

**To update nav links:** edit the `navLinks` array at the top of the file.

---

### `Footer.jsx`
**Role:** Site-wide footer.
- Three columns: Brand info + tagline | Quick Links | Contact details
- Bottom bar: copyright + social icon row (Facebook, Instagram, YouTube — placeholder `href="#"`)
- **Replace:** address, phone, email, and social media `href` values

---

### `HeroSection.jsx`
**Role:** Full-screen hero on the Home page.
- Animated with `framer-motion` (`initial → animate` on mount)
- Background: CSS `linear-gradient` from `#3B1F0E` to `#C8A97E`
- Two CTAs: "Explore Products" → `/products` and "Contact Us" → `/contact`
- Scroll indicator at the bottom
- **No data dependency** — all text is hardcoded here; edit directly for tagline changes

---

### `ProductCard.jsx`
**Role:** Generic card for any product item.
**Props:**
| Prop | Type | Description |
|---|---|---|
| `image` | string | Image URL |
| `name` | string | Product name (heading) |
| `category` | string | Shown as overlay badge |
| `size` | string | Optional — shown if provided |
| `finish` | string | Optional — shown if provided |
| `description` | string | Optional — short text below name |
| `badge` | string | Optional — gold top-left badge (e.g. "New") |

---

### `TestimonialCard.jsx`
**Role:** Displays a single customer review.
**Props:** `name`, `location`, `rating` (1–5), `review`, `avatar` (2-letter initials)
- Stars rendered via `Array.from({ length: 5 })` — filled yellow up to `rating`
- Data source: `src/data/testimonials.js`

---

### `BrandStrip.jsx`
**Role:** Horizontal brand-partner badges strip.
- Reads from `src/data/brands.js`
- Currently renders coloured text boxes as logo placeholders
- **To add real logos:** replace the `<div>` placeholder in the `.map()` with `<img src={brand.logo} alt={brand.name} />`

---

### `StatsSection.jsx`
**Role:** Animated number counters section. Used on Home page and WhyChooseUs page.
**Props:** `light` (boolean) — `true` = white background, `false` = dark brown background
- `AnimatedCounter` sub-component uses `IntersectionObserver` + `requestAnimationFrame` for count-up animation
- Data source: `src/data/stats.js`

---

### `WhatsAppButton.jsx`
**Role:** Fixed floating WhatsApp CTA.
- Position: `bottom-20 right-5` (above `BackToTop`)
- **To update number:** change `WHATSAPP_NUMBER` constant at the top of the file
- Format: country code + number with no `+` (e.g. `919876543210`)
- Pre-filled message text in `WHATSAPP_MESSAGE`

---

### `BackToTop.jsx`
**Role:** Fixed floating scroll-to-top button.
- Position: `bottom-5 right-5`
- Appears only after `window.scrollY > 300`
- Smooth scrolls to top on click

---

### `SEOHead.jsx`
**Role:** Reusable `<Helmet>` wrapper for per-page SEO tags.
**Props:**
| Prop | Required | Description |
|---|---|---|
| `title` | ✅ | Page title (appended with `| Patel Building Materials`) |
| `description` | ✅ | `<meta name="description">` |
| `keywords` | ❌ | `<meta name="keywords">` |
| `ogTitle` | ❌ | OG title (defaults to `title`) |
| `ogDescription` | ❌ | OG description (defaults to `description`) |

**To change the site name:** edit `SITE_NAME` constant at the top of the file.
**To change OG image:** edit `DEFAULT_OG_IMAGE` (currently `/og-image.jpg`).

---

## Adding a New Component
1. Create `src/components/YourComponent.jsx`
2. Export a default function
3. Import and use in the relevant page or `Layout.jsx`
4. Update this file with its description
