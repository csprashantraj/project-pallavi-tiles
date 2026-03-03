# src/assets/icons/ — Context

## Purpose
Reserved for custom SVG icon files specific to this project.

## Current State
Empty — no custom icons yet.

## When to Add Files Here
- Custom SVG icons that don't exist in `lucide-react`
- Brand-specific iconography (e.g. a granite slab silhouette, a pipe fitting icon)
- Favourable to inline SVGs scattered across component files

## Usage Pattern
```jsx
import GraniteIcon from '../assets/icons/granite.svg?react'
// Vite's ?react query transform renders SVG as a React component
// <GraniteIcon className="w-6 h-6 text-brand-brown" />
```

> Requires `@vitejs/plugin-react` which is already installed — SVG-as-React-component works out of the box via the `?react` import suffix with Vite 5.
