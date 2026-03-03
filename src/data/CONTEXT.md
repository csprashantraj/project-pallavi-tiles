# src/data/ — Context

## Purpose
**Single source of truth for all static content.** Every piece of displayed data lives here as a plain JS array/object export. Pages and components import from here — nothing is hardcoded inside UI files (except structural copy like hero taglines).

Updating content = edit these files only, no component changes needed.

---

## File Reference

### `products.js`
Exports **named** exports (not default):
```js
import { graniteProducts, tilesProducts, sanitarywareProducts, pipeFittingsProducts }
  from '../data/products'
```

| Export | Type | Used in |
|---|---|---|
| `graniteProducts.southIndian` | Array of `{ id, name, image, finish, origin }` | `Products.jsx` |
| `graniteProducts.rajasthani` | Array of `{ id, name, image, finish, origin }` | `Products.jsx` |
| `tilesProducts` | Array of `{ id, name, category, size, finish, image }` | `Products.jsx` |
| `sanitarywareProducts` | Array of `{ id, name, category, image, description }` | `Products.jsx` |
| `pipeFittingsProducts` | Array of `{ id, name, category, image, sizes, description }` | `Products.jsx` |

**Image URLs:** Unsplash placeholders — replace with real hosted product photos before launch.
**To add a product:** append a new object to the relevant array following the existing shape.

---

### `galleryImages.js`
Default export: array of gallery image objects.
```js
import galleryImages from '../data/galleryImages'
```

**Object shape:**
```js
{
  id: number,
  src: string,      // full-size URL (opened in lightbox)
  thumb: string,    // thumbnail URL (shown in grid — use smaller ?w=400)
  alt: string,      // accessibility alt text
  category: string  // must match one of: 'Granite' | 'Tiles' | 'Sanitaryware' | 'Pipes' | 'Showroom'
}
```

**To add images:** append objects. `category` must exactly match the filter button labels in `Gallery.jsx`.
**To add a new category:** add the category string here AND add it to the `CATEGORIES` array in `Gallery.jsx`.

---

### `offers.js`
Default export: array of offer/deal objects.
```js
import offers from '../data/offers'
```

**Object shape:**
```js
{
  id: string,
  badge: string,       // e.g. 'Hot Deal' | 'New' | 'Limited Stock'
  badgeColor: string,  // Tailwind bg class: 'bg-red-500' | 'bg-green-500' | 'bg-yellow-500'
  category: string,    // must match filter: 'Granite' | 'Tiles' | 'Sanitaryware' | 'Pipes'
  title: string,
  description: string,
  discount: string,    // e.g. 'Up to 15% off'
  validTill: string,   // e.g. '31 Mar 2026'
  image: string,       // card cover image URL
}
```

**To add/remove offers:** edit this array. `validTill` is display-only string — no date logic.
**To add a new filter category:** add here AND update `FILTER_CATS` in `Offers.jsx`.

---

### `brands.js`
Default export: array of brand partner objects.
```js
import brands from '../data/brands'
```

**Object shape:**
```js
{
  id: string,          // 'kajaria' | 'astral' | 'kervit'
  name: string,
  tagline: string,
  credential: string,  // shown as badge under logo in BrandStrip
  color: string,       // hex — used for tinted backgrounds and text
  description: string, // used in WhyChooseUs credentials section
  logo: null,          // replace null with image path when real logos available
}
```

**Used by:** `BrandStrip.jsx`, `WhyChooseUs.jsx`

---

### `stats.js`
Default export: array of animated stat objects.
```js
import stats from '../data/stats'
```

**Object shape:**
```js
{
  id: number,
  value: number,     // the number to count up to
  suffix: string,    // e.g. '+', '%', '' (empty for plain numbers)
  label: string,     // e.g. 'Years in Business'
  description: string, // sub-label below the number
}
```

**Used by:** `StatsSection.jsx` (on `Home.jsx` and `WhyChooseUs.jsx`)
**To update:** change `value` and `label` fields. The animated counter uses `value` as its target.

---

### `testimonials.js`
Default export: array of customer review objects.
```js
import testimonials from '../data/testimonials'
```

**Object shape:**
```js
{
  id: number,
  name: string,
  location: string,
  rating: number,    // 1–5
  review: string,
  avatar: string,    // 2-letter initials shown in the avatar circle
}
```

**Used by:** `Home.jsx`
**To replace:** swap out placeholder reviews with real customer quotes before launch.

---

## Adding a New Data File
1. Create `src/data/yourData.js` with a named or default export
2. Import in the relevant page/component
3. Document the shape in this file
