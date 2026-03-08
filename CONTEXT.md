# public/ — Context

## Purpose
Static files served **as-is** from the root URL — Vite copies them to `dist/` without processing or hashing.
Reference these with absolute paths starting with `/` (e.g. `href="/favicon.ico"`).

## Current Files
| File | Purpose |
|---|---|
| `favicon.ico` | Browser tab icon — replace with real brand icon before launch |
| `og-image.jpg` | Open Graph / social share image — referenced by `SEOHead.jsx` as `/og-image.jpg` |

## Replacement Guide

### `favicon.ico`
- Ideal size: 32×32 px (also provide 16×16 and 48×48 inside the `.ico` container)
- Tools: [realfavicongenerator.net](https://realfavicongenerator.net) — generate all sizes from one source image
- After replacement: no code changes needed, `index.html` already references `/favicon.ico`

### `og-image.jpg`
- Required dimensions: **1200 × 630 px**
- Should include: business name, logo, key brand names (Kajaria / Astral / Kervit), and a product photo
- After replacement: no code changes needed, `SEOHead.jsx` already references `/og-image.jpg`

## Adding More Public Files
Place any file here that must be reachable at a fixed, unhashed URL:
- `robots.txt` — search engine crawl rules
- `sitemap.xml` — for better SEO indexing (generate after final route list is confirmed)
- `manifest.json` — if adding PWA support later
- Brand PDF catalogues available for download

**Example `robots.txt`:**
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```
