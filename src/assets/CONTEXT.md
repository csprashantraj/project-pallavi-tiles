# src/assets/ — Context

## Purpose
Static assets (images and SVG icons) bundled by Vite at build time.
Import these directly in JSX and Vite will include them in the `dist/assets/` output with content hashes.

```jsx
import logo from '../assets/images/logo.png'
// <img src={logo} alt="Logo" />
```

---

## Current Contents

### `assets/icons/`
Currently empty — reserved for custom SVG icon files.
WhatsApp icon is inlined as raw SVG in `WhatsAppButton.jsx` (no file needed).
All other icons are sourced from `lucide-react` (tree-shaken at build time).

### `assets/images/`
Currently empty — all product/gallery images use Unsplash URLs.

---

## What to Add Before Launch
| File | Purpose |
|---|---|
| `images/logo.png` or `logo.svg` | Real business logo — use in `Navbar.jsx` |
| `images/kajaria-logo.png` | Replace placeholder in `BrandStrip.jsx` → `brands.js` `logo` field |
| `images/astral-logo.png` | Same as above |
| `images/kervit-logo.png` | Same as above |
| `images/showroom-*.jpg` | Real showroom photos for Gallery and About pages |
| `images/products/granite/*.jpg` | Real granite slab photos |
| `images/products/tiles/*.jpg` | Real tile photos |
| `icons/granite.svg` | Optional custom icon for Granite category card |

## Replacing Unsplash Placeholder Images
1. Add your image file to `src/assets/images/`
2. Import it at the top of the relevant data file or component:
   ```js
   import myPhoto from '../assets/images/myPhoto.jpg'
   ```
3. Use `myPhoto` as the `image` or `src` value in place of the Unsplash URL

> **Alternative:** Host images on a CDN (Cloudinary, Imgix, etc.) and use the CDN URL directly in `src/data/*.js` — no import needed.
