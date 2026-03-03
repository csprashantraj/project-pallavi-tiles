/**
 * useScrollFadeIn.js
 * Custom hook that attaches IntersectionObserver to animate
 * elements with the `fade-in-up` CSS class.
 */
import { useEffect } from 'react'

export function useScrollFadeIn(containerRef) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = containerRef.current
      ? containerRef.current.querySelectorAll('.fade-in-up')
      : document.querySelectorAll('.fade-in-up')

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [containerRef])
}
