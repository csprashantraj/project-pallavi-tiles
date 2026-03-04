/**
 * Navbar.jsx
 * Sticky navbar with logo, nav links, mobile hamburger,
 * active link highlighting, and scroll-shadow effect.
 */
import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/why-us', label: 'Why Us' },
  { to: '/offers', label: 'Offers' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const activeClass =
    'text-brand-gold font-semibold border-b-2 border-brand-gold'
  const inactiveClass =
    'text-brand-dark hover:text-brand-gold transition-colors duration-200'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-brand-brown flex items-center justify-center">
            <span className="text-brand-beige font-heading font-bold text-sm">PV</span>
          </div>
          <div className="leading-tight">
            <p className="font-heading font-bold text-brand-brown text-base leading-4">Pallavi</p>
            <p className="text-xs text-brand-gold font-medium tracking-wide">Tiles</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm pb-0.5 ${isActive ? activeClass : inactiveClass}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button (desktop) */}
        <Link
          to="/contact"
          className="hidden lg:block bg-brand-brown text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-brand-gold transition-colors duration-200"
        >
          Get Quote
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className="lg:hidden text-brand-dark p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2.5 px-3 rounded-lg text-sm font-medium ${
                      isActive
                        ? 'bg-brand-cream text-brand-gold font-semibold'
                        : 'text-brand-dark hover:bg-brand-cream'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block bg-brand-brown text-white text-sm font-medium px-4 py-2.5 rounded-full text-center hover:bg-brand-gold transition-colors"
              >
                Get Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
