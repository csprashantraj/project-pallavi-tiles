# Patel Building Materials — Website

A modern, responsive, SEO-optimised static website for a family-owned building materials business in India. Built with **React + Vite + Tailwind CSS**.

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 + Vite 5 | Frontend framework and build tool |
| Tailwind CSS 3 | Utility-first styling |
| React Router DOM 6 | Client-side routing |
| react-helmet-async | Per-page SEO meta tags |
| react-snap | Post-build static HTML prerendering |
| framer-motion | Hero section animations |
| yet-another-react-lightbox | Gallery lightbox |
| lucide-react | SVG icons |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install Dependencies
```bash
npm install
```

### Run Locally (Development)
```bash
npm run dev
```
Opens at `http://localhost:5173`

### Build for Production
```bash
npm run build
```
This runs `vite build` followed by `react-snap` (prerendering). Output goes to the `dist/` folder.

---

## Deployment

### Option 1: Apache Shared Hosting (cPanel)

1. Run `npm run build` locally.
2. Upload the entire contents of `dist/` to your `public_html` directory via File Manager or FTP.
3. Ensure `.htaccess` is included (it will be in `dist/` after build, or upload from the project root).
4. Visit your domain — the site should be live.

### Option 2: VPS with Nginx

1. Run `npm run build` locally.
2. Upload `dist/` to your server:
   ```bash
   scp -r dist/ user@your-server-ip:/var/www/yoursite/
   ```
3. Copy and configure Nginx:
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/yoursite
   sudo ln -s /etc/nginx/sites-available/yoursite /etc/nginx/sites-enabled/
   # Edit nginx.conf: replace yourdomain.com and root path
   sudo nginx -t && sudo systemctl reload nginx
   ```

---

## Replacing Placeholder Content

| What to replace | Where |
|---|---|
| Business name, address, phone, email | `src/components/Footer.jsx`, `src/pages/Contact.jsx` |
| WhatsApp number | `src/components/WhatsAppButton.jsx`, `src/pages/Contact.jsx` |
| Google Maps embed | `src/pages/Contact.jsx` — replace placeholder `<div>` with `<iframe>` |
| Favicon | `public/favicon.ico` |
| OG image | `public/og-image.jpg` (1200×630 px) |
| Product images & data | `src/data/products.js` |
| Gallery images | `src/data/galleryImages.js` |
| Offers & deals | `src/data/offers.js` |
| Stats numbers | `src/data/stats.js` |
| Testimonials | `src/data/testimonials.js` |
| Brand logos | `src/components/BrandStrip.jsx` |
| Per-page SEO | `<SEOHead>` props in each `src/pages/*.jsx` file |

---

## Project Structure

```
/public           ← favicon, og-image
/src
  /assets         ← images, icons
  /components     ← Navbar, Footer, HeroSection, ProductCard, etc.
  /pages          ← Home, About, Products, Gallery, WhyChooseUs, Contact, Offers, NotFound
  /data           ← products.js, testimonials.js, offers.js, brands.js, stats.js, galleryImages.js
  /hooks          ← useScrollFadeIn.js
  App.jsx         ← Router
  main.jsx        ← Entry (HelmetProvider + hydration)
  index.css       ← Tailwind + globals
nginx.conf        ← Nginx VPS config
.htaccess         ← Apache shared hosting config
```

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
