# src/ — Context

## What Lives Here
The root of all application source code.

## Files

### `App.jsx`
- Sets up `BrowserRouter` with a single nested `<Route element={<Layout />}>` wrapping all page routes
- All 8 routes are defined here; adding a new page = add one `<Route>` line and import the page component
- Route map:
  | Path | Component |
  |---|---|
  | `/` | `Home` |
  | `/about` | `About` |
  | `/products` | `Products` |
  | `/gallery` | `Gallery` |
  | `/why-us` | `WhyChooseUs` |
  | `/contact` | `Contact` |
  | `/offers` | `Offers` |
  | `*` | `NotFound` |

### `main.jsx`
- Entry point loaded by `index.html`
- Wraps everything in `<HelmetProvider>` (required by react-helmet-async)
- Uses `hydrateRoot` when react-snap has pre-populated `#root` with HTML; falls back to `createRoot` for normal dev

### `index.css`
- Google Fonts `@import` **must stay as the very first line** (before `@tailwind` directives — CSS spec requirement)
- `@tailwind base/components/utilities` directives follow
- Global resets (`box-sizing`, `scroll-behavior: smooth`)
- `.fade-in-up` / `.fade-in-up.visible` — the CSS animation pair driven by IntersectionObserver in `Layout.jsx`
- Custom scrollbar styles

## Sub-directories
| Folder | Purpose |
|---|---|
| `components/` | Reusable UI pieces shared across pages |
| `pages/` | One component per route |
| `data/` | Static JS data arrays — single source of truth for all content |
| `hooks/` | Custom React hooks |
| `assets/` | Static images and SVG icons bundled by Vite |
