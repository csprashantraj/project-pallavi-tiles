/**
 * NotFound.jsx — 404 page
 */
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import SEOHead from '../components/SEOHead'

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="404 — Page Not Found"
        description="The page you are looking for does not exist."
      />
      <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center px-4 text-center">
        <p className="font-heading font-bold text-9xl text-brand-beige select-none">404</p>
        <h1 className="font-heading text-3xl font-bold text-brand-brown mt-4 mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-500 max-w-md mb-8 text-sm leading-relaxed">
          Oops! The page you are looking for may have been moved or doesn't exist.
          Let's get you back to familiar ground.
        </p>
        <Link
          to="/"
          className="flex items-center gap-2 bg-brand-brown text-white font-semibold px-6 py-3 rounded-full hover:bg-brand-gold transition-colors shadow-md"
        >
          <Home size={18} />
          Go Back Home
        </Link>
      </div>
    </>
  )
}
