/**
 * Footer.jsx
 * Site-wide footer with contact info, quick links, and social icons.
 */
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/why-us', label: 'Why Choose Us' },
  { to: '/offers', label: 'Offers' },
  { to: '/contact', label: 'Contact Us' },
]

const productLinks = [
  { to: '/products#granite', label: 'Granite' },
  { to: '/products#tiles', label: 'Kajaria Tiles' },
  { to: '/products#sanitaryware', label: 'Sanitaryware & Faucets' },
  { to: '/products#pipes', label: 'Astral Pipe Fittings' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-brand-beige flex items-center justify-center">
              <span className="text-brand-brown font-heading font-bold text-sm">PB</span>
            </div>
            <div className="leading-tight">
              <p className="font-heading font-bold text-lg leading-4">Patel</p>
              <p className="text-xs text-brand-beige tracking-wide">Building Materials</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Your trusted family-owned building materials shop since 2000.
            Authorised dealers for Kajaria, Astral, and Kervit.
          </p>
          {/* Social */}
          <div className="flex gap-3">
            {[
              { Icon: Facebook, href: '#', label: 'Facebook' },
              { Icon: Instagram, href: '#', label: 'Instagram' },
              { Icon: Youtube, href: '#', label: 'YouTube' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-gold flex items-center justify-center transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading font-semibold text-brand-beige mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-gray-300 hover:text-brand-beige text-sm transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-heading font-semibold text-brand-beige mb-4">Our Products</h3>
          <ul className="space-y-2">
            {productLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-gray-300 hover:text-brand-beige text-sm transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-semibold text-brand-beige mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-gray-300">
              <MapPin size={15} className="mt-0.5 shrink-0 text-brand-beige" />
              <span>123 Main Market Road, Near City Centre,<br />Ahmedabad – 380001, Gujarat</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-300">
              <Phone size={15} className="shrink-0 text-brand-beige" />
              <a href="tel:+919876543210" className="hover:text-brand-beige transition-colors">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-300">
              <Mail size={15} className="shrink-0 text-brand-beige" />
              <a href="mailto:info@patelbuildingmaterials.com" className="hover:text-brand-beige transition-colors break-all">
                info@patelbuildingmaterials.com
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-300">
              <Clock size={15} className="mt-0.5 shrink-0 text-brand-beige" />
              <span>Mon–Sat: 9AM–7PM<br />Sun: 10AM–4PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Patel Building Materials. All rights reserved.</p>
          <p>
            Authorised dealer of{' '}
            <span className="text-brand-beige">Kajaria · Astral · Kervit</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
