/**
 * Layout.jsx — Shared layout wrapper: Navbar + page content + Footer + floating buttons
 */
import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import BackToTop from './BackToTop'

export default function Layout() {
  const { pathname } = useLocation()
  const pageRef = useRef(null)

  // Re-initialise scroll-fade-in observers on each route change
  useEffect(() => {
    window.scrollTo(0, 0)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    // Small delay so the new page has rendered
    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-in-up').forEach((el) => {
        el.classList.remove('visible')
        observer.observe(el)
      })
    }, 80)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [pathname])

  return (
    <div ref={pageRef} className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}
