# src/assets/images/ — Context

## Purpose
Local image files bundled by Vite into `dist/assets/` with content-hash filenames.

## Current State
Empty — all images currently use Unsplash placeholder URLs defined in `src/data/`.

## Image Replacement Guide

### Step 1 — Prepare images
- Recommended formats: `.webp` (best compression) or `.jpg`
- Recommended sizes:
  | Use case | Recommended dimensions |
  |---|---|
  | Product card thumbnails | 400 × 300 px |
  | Gallery thumbs | 400 × 300 px |
  | Gallery lightbox full | 800 × 600 px |
  | Offer card covers | 600 × 400 px |
  | About / Why Us section | 700 × 500 px |
  | Hero background | 1920 × 1080 px (if using a photo bg) |
  | OG image (`public/og-image.jpg`) | 1200 × 630 px |

### Step 2 — Add files
Place images here: `src/assets/images/`

Suggested sub-folder structure:
```
images/
  logo.svg
  brands/
    kajaria-logo.png
    astral-logo.png
    kervit-logo.png
  granite/
    black-galaxy.jpg
    absolute-black.jpg
    colonial-white.jpg
    steel-grey.jpg
    jodhpur-pink.jpg
    jaisalmer-yellow.jpg
    dholpur-beige.jpg
  tiles/
    wooden-oak.jpg
    marble-finish.jpg
    ...
  sanitaryware/
    wall-hung-basin.jpg
    ...
  pipes/
    cpvc-pipe.jpg
    ...
  showroom/
    showroom-1.jpg
    showroom-2.jpg
  team/
    rameshbhai.jpg
    ...
```

### Step 3 — Wire up in data files
In `src/data/products.js`, `galleryImages.js`, or `offers.js`:
```js
import blackGalaxy from '../assets/images/granite/black-galaxy.jpg'

export const graniteProducts = {
  southIndian: [
    {
      id: 'si-1',
      name: 'Black Galaxy',
      image: blackGalaxy,   // ← replace Unsplash URL with imported variable
      ...
    },
  ]
}
```

> **CDN alternative:** Skip local imports and use CDN URLs directly as strings — simpler for large image sets.
