/**
 * Home.jsx — Landing page
 */
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { Mountain, Square, Droplets, PipetteIcon as Pipe, ShieldCheck, Package, Award, Users } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import HeroSection from '../components/HeroSection'
import BrandStrip from '../components/BrandStrip'
import TestimonialCard from '../components/TestimonialCard'
import StatsSection from '../components/StatsSection'
import testimonials from '../data/testimonials'

const productCategories = [
  {
    Icon: Mountain,
    title: 'Granite',
    desc: 'Premium South Indian and Rajasthani granite sourced directly from quarries. Available in polished, flamed, and leather finishes.',
    href: '/products#granite',
    color: 'bg-stone-100',
    iconColor: 'text-stone-600',
  },
  {
    Icon: Square,
    title: 'Kajaria Tiles',
    desc: 'Authorised Prime Dealer for Kajaria Ceramics — floor tiles, wall tiles, vitrified tiles, and parking tiles.',
    href: '/products#tiles',
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    Icon: Droplets,
    title: 'Sanitaryware & Faucets',
    desc: 'Kervit branded wash basins, toilet sets, faucets, and shower panels for bathrooms of every style.',
    href: '/products#sanitaryware',
    color: 'bg-sky-50',
    iconColor: 'text-sky-600',
  },
  {
    Icon: Pipe,
    title: 'Pipe Fittings',
    desc: 'Authorised Astral Pipes distributor — CPVC, UPVC, and SWR pipes for all plumbing applications.',
    href: '/products#pipes',
    color: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
]

const whyPoints = [
  { Icon: Award, title: 'Prime Dealership', desc: 'We hold official dealerships and distributorships for Kajaria, Astral, and Kervit — guaranteeing genuine products.' },
  { Icon: Package, title: 'Wide Product Range', desc: 'Over 2,000 SKUs across granite, tiles, sanitaryware, and pipes all under one roof.' },
  { Icon: ShieldCheck, title: 'Trusted Brands', desc: "Every product is sourced from India's most reputed building material manufacturers." },
  { Icon: Users, title: 'Customer First', desc: 'Our experienced team provides personalised guidance from selection to installation.' },
]

export default function Home() {
  const sectionRef = useRef(null)

  return (
    <>
      <SEOHead
        title="Home"
        description="Patel Building Materials — your authorised dealer for Kajaria Tiles, Astral Pipes, Kervit Sanitaryware, and premium Granite in Ahmedabad, Gujarat."
        keywords="building materials, granite, kajaria tiles, astral pipes, kervit sanitaryware, Ahmedabad"
        ogTitle="Patel Building Materials | Granite · Tiles · Sanitaryware · Pipes"
        ogDescription="One-stop shop for premium building materials in Ahmedabad. Authorised dealer for Kajaria, Astral & Kervit."
      />

      {/* Hero */}
      <HeroSection />

      {/* Business intro */}
      <section className="bg-brand-cream py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-medium tracking-widest text-brand-gold uppercase mb-3">Who We Are</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-brown mb-5">
            A Family Business Built on Trust
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Patel Building Materials has been serving homeowners, architects, and contractors in
            Gujarat since 2000. As a family-owned business, we combine the warmth of personal service
            with the depth of a fully stocked showroom. From granite slabs to pipe fittings, we are
            your single-stop solution for every building need.
          </p>
        </div>
      </section>

      {/* Brand Strip */}
      <BrandStrip />

      {/* Product Categories */}
      <section className="py-16 bg-white" ref={sectionRef}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <p className="text-xs font-medium tracking-widest text-brand-gold uppercase mb-3">What We Offer</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-brown">
              Our Product Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map(({ Icon, title, desc, href, color, iconColor }) => (
              <Link
                key={title}
                to={href}
                className="fade-in-up group rounded-2xl p-6 border border-gray-100 hover:border-brand-beige hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={22} className={iconColor} />
                </div>
                <h3 className="font-heading font-bold text-brand-brown text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-brand-cream">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <p className="text-xs font-medium tracking-widest text-brand-gold uppercase mb-3">Our Promise</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-brown">
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPoints.map(({ Icon, title, desc }) => (
              <div key={title} className="fade-in-up bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-brand-brown/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-brand-brown" />
                </div>
                <h3 className="font-heading font-bold text-brand-brown mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Testimonials */}
      <section className="py-16 bg-brand-cream">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <p className="text-xs font-medium tracking-widest text-brand-gold uppercase mb-3">Reviews</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-brown">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="fade-in-up">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
