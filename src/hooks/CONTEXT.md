# src/hooks/ — Context

## Purpose
Custom React hooks that encapsulate reusable logic — primarily scroll/animation behaviour.

---

## Hook Reference

### `useScrollFadeIn.js`
**Exported:** named export `useScrollFadeIn`

**Purpose:** Attaches an `IntersectionObserver` to all `.fade-in-up` elements inside a container ref (or the whole document if no ref is passed) and adds the `.visible` CSS class when they scroll into view.

**Usage:**
```jsx
import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import { useRef } from 'react'

export default function MyPage() {
  const containerRef = useRef(null)
  useScrollFadeIn(containerRef)

  return (
    <div ref={containerRef}>
      <div className="fade-in-up">Animates on scroll</div>
    </div>
  )
}
```

**Note:** `Layout.jsx` already runs a global IntersectionObserver on every route change — you only need this hook if you want section-scoped control within a specific component. For most pages the Layout-level observer is sufficient.

**CSS pair (in `src/index.css`):**
```css
.fade-in-up         { opacity: 0; transform: translateY(30px); transition: ... }
.fade-in-up.visible { opacity: 1; transform: translateY(0); }
```

---

## Adding a New Hook
1. Create `src/hooks/useYourHook.js`
2. Export as a named export (`export function useYourHook ...`)
3. Document it in this file
