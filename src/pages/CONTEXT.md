# src/pages/ — Context

## Purpose
One React component per route. Each page:
- Imports `SEOHead` and sets unique title/description/keywords/OG tags
- Starts with a full-width dark-brown banner (`bg-brand-brown py-24 mt-16`) as the page hero
- Uses `.fade-in-up` class on sections to trigger scroll-based reveal animations (handled by `Layout.jsx`)
- Pulls all dynamic content from `src/data/` — **no hardcoded data arrays inside pages**

---

## Page Reference

### `Home.jsx` → `/`
**Sections (top to bottom):**
1. `<HeroSection />` — full-screen animated hero
2. Business intro paragraph (hardcoded — edit directly for copy changes)
3. `<BrandStrip />` — partner brand badges
4. Product category cards (4 cards, data in `productCategories` array at top of file)
5. "Why Choose Us" points (4 cards, data in `whyPoints` array at top of file)
6. `<StatsSection />` — animated counters
7. Testimonials grid — data from `src/data/testimonials.js`

**To edit home page copy:** update `productCategories` and `whyPoints` arrays at the top, or the intro `<p>` text inline.

---

### `About.jsx` → `/about`
**Sections:**
1. Page banner
2. Founding story — 2-column layout (text + image)
3. Mission & Vision — 2 cards side by side
4. Core Values — 4 icon cards (`values` array at top of file)
5. Team — 4 avatar cards (`teamMembers` array at top of file)

**To add/edit team members:** update `teamMembers` array. Replace initials `<div>` with `<img>` for real photos.

---

### `Products.jsx` → `/products`
**Layout:** Sticky tab bar (Granite / Kajaria Tiles / Sanitaryware / Pipe Fittings) + anchor-linked sections.

**Tab click behaviour:** sets `activeTab` state + smooth-scrolls to the section `id`.

**Data sources:**
| Section | Data import |
|---|---|
| Granite (South Indian) | `graniteProducts.southIndian` from `src/data/products.js` |
| Granite (Rajasthani) | `graniteProducts.rajasthani` from `src/data/products.js` |
| Tiles | `tilesProducts` from `src/data/products.js` |
| Sanitaryware | `sanitarywareProducts` from `src/data/products.js` |
| Pipes | `pipeFittingsProducts` from `src/data/products.js` |

Each section renders `<ProductCard>` components.

**Section IDs** (used for anchor scroll): `#granite`, `#tiles`, `#sanitaryware`, `#pipes`

---

### `Gallery.jsx` → `/gallery`
**Features:**
- Filter buttons: All / Granite / Tiles / Sanitaryware / Pipes / Showroom
- CSS masonry grid using `columns-2 sm:columns-3 lg:columns-4`
- Click any image → opens `yet-another-react-lightbox`
- Data source: `src/data/galleryImages.js`

**Lightbox:** uses `slides` array of `{ src, alt }` objects; `index` tracks current image.

**To add more images:** append entries to `src/data/galleryImages.js` with the correct `category` value.

---

### `WhyChooseUs.jsx` → `/why-us`
**Sections:**
1. Page banner
2. Authorised Dealerships — 3 coloured border-left cards (data in `credentials` array at top)
3. Quality Assurance + Range & Variety — 2-column bullet lists (data in `qualityPoints` and `rangePoints` arrays)
4. `<StatsSection light />` — white-background stats
5. Customer-First Philosophy — image + text block

---

### `Contact.jsx` → `/contact`
**Left column:** Address, phones, email, business hours, WhatsApp button, Google Maps placeholder iframe.
**Right column:** Inquiry form.

**Form fields:** Name (required), Phone (required), Email (optional, validated), Product Interest (dropdown), Message (required).

**Submission:** Pure frontend — sets `submitted: true` on valid submit, shows success state. No API call.

**To add a real form backend:** replace the `handleSubmit` function body with a `fetch()` POST to your API / Formspree / EmailJS endpoint.

**To embed real Google Maps:** replace the placeholder `<div>` with:
```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_ID"
  width="100%" height="256" style={{ border: 0 }}
  allowFullScreen loading="lazy"
/>
```

**Placeholder values to replace:**
- Address: `123 Main Market Road, Near City Centre, Ahmedabad – 380001`
- Phone: `+91 98765 43210` / `+91 98765 43211`
- Email: `info@patelbuildingmaterials.com`
- WhatsApp href: same number as `WhatsAppButton.jsx`

---

### `Offers.jsx` → `/offers`
**Features:**
- Filter buttons: All / Granite / Tiles / Sanitaryware / Pipes
- Offer cards with badge overlay (Hot Deal / New / Limited Stock) + category chip
- Data source: `src/data/offers.js`

**Badge colours** are set per-item in `src/data/offers.js` via the `badgeColor` field (Tailwind class string).

---

### `NotFound.jsx` → `*` (404)
- Simple centred layout
- Large `404` text in `brand-beige`
- "Go Back Home" button → `/`
- Also prerendered to `dist/404.html` by react-snap

---

## Adding a New Page
1. Create `src/pages/YourPage.jsx`
2. Add `<SEOHead>` with unique title/description
3. Import and add a `<Route path="/your-path" element={<YourPage />} />` in `src/App.jsx`
4. Add the link to `navLinks` array in `src/components/Navbar.jsx`
5. Update `src/data/` if the page needs new data
6. Update this file
