/**
 * BackToTop.jsx
 * Fixed back-to-top button that appears after scrolling down 300px.
 */
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-5 right-5 z-50 w-10 h-10 rounded-full bg-brand-brown text-white shadow-lg flex items-center justify-center hover:bg-brand-gold hover:scale-110 transition-all duration-200"
    >
      <ArrowUp size={18} />
    </button>
  )
}
