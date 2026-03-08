/**
 * WhyChooseUs.jsx — Why Choose Us page
 */
import { CheckCircle, Award, Layers, Users, ThumbsUp } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import StatsSection from '../components/StatsSection'
import brands from '../data/brands'

const credentials = [
  {
    title: 'Kajaria Prime Dealership',
    body: "We are an authorised Kajaria Prime Dealer — meaning we have direct access to Kajaria's full product catalogue, best pricing, and latest collections before they reach the open market.",
    color: '#C8102E',
  },
  {
    title: 'Astral Pipes Distributorship',
    body: "As an authorised Astral Pipes distributor, we maintain bulk stock of CPVC, UPVC, and SWR pipes ensuring availability for both retail and large project orders.",
    color: '#1B4F9B',
  },
  {
    title: 'Kerovit Authorised Dealer',
    body: 'Our Kerovit dealership guarantees genuine sanitaryware and faucets with manufacturer warranty, installation support, and access to the complete product range.',
    color: '#2C7BE5',
  },
]

const qualityPoints = [
  'All products come with valid manufacturer warranties',
  'Factory-direct sourcing eliminates counterfeit risk',
  'Batch-tested granite and stone products',
  'ISI/BIS marked pipes and fittings',
  'Certified ceramic and vitrified tiles only',
  // 'Proper invoicing and GST compliance on every purchase',
]

const rangePoints = [
  '5+ granite varieties from South India and Rajasthan',
  '500+ tile designs across all categories',
  'Full bathroom solution from basins to shower panels',
  'Complete plumbing system: pipes, fittings, and accessories',
  'All size variants available in stock',
  'A one step shop for all your building material needs'
]

export default function WhyChooseUs() {
  return (
    <>
      <SEOHead
        title="Why Choose Us"
        description="Discover why Pallavi Tiles is the most trusted building materials dealer in Sitamarhi — authorised dealerships, quality assurance, and customer-first service."
        keywords="why choose us, building materials dealer, quality assurance, kajaria authorized dealer, astral distributor"
        ogTitle="Why Choose Us | Pallavi Tiles"
        ogDescription="Authorised dealerships, quality guarantee, and 13+ years of trusted service."
      />

      {/* Banner */}
      <div className="bg-brand-brown py-24 px-4 text-center mt-16">
        <p className="text-xs font-medium tracking-widest text-brand-beige uppercase mb-3">Our Edge</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Why Choose Us</h1>
        <p className="text-white/70 max-w-xl mx-auto">The reasons thousands of customers trust us with their dream projects.</p>
      </div>

      {/* Credentials */}
      <section className="py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <p className="text-xs font-medium tracking-widest text-brand-gold uppercase mb-3">Our Credentials</p>
            <h2 className="font-heading text-3xl font-bold text-brand-brown">Authorised Dealerships</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {credentials.map((c) => (
              <div key={c.title} className="fade-in-up rounded-2xl p-6 border-l-4" style={{ borderColor: c.color, backgroundColor: c.color + '08' }}>
                <Award size={28} className="mb-3" style={{ color: c.color }} />
                <h3 className="font-heading font-bold text-brand-brown text-lg mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Range */}
      <section className="py-16 bg-brand-cream">
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="fade-in-up">
            <CheckCircle size={32} className="text-brand-gold mb-4" />
            <h2 className="font-heading text-2xl font-bold text-brand-brown mb-4">Quality Assurance</h2>
            <ul className="space-y-3">
              {qualityPoints.map((p) => (
                <li key={p} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="fade-in-up">
            <Layers size={32} className="text-brand-gold mb-4" />
            <h2 className="font-heading text-2xl font-bold text-brand-brown mb-4">Range & Variety</h2>
            <ul className="space-y-3">
              {rangePoints.map((p) => (
                <li key={p} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection light />

      {/* Customer First */}
      <section className="py-16 bg-brand-cream">
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&h=500&fit=crop"
              alt="Customer service"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
          <div className="fade-in-up">
            <ThumbsUp size={32} className="text-brand-gold mb-4" />
            <h2 className="font-heading text-3xl font-bold text-brand-brown mb-4">Customer-First Philosophy</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>We believe that the best building material is the one that perfectly fits your project, budget, and aesthetic — and our job is to help you find it.</p>
              <p>Our team of experienced professionals will walk you through all available options, explain the pros and cons of each, and help you make an informed decision — with zero pressure to upsell.</p>
              <p>After your purchase, we remain available for installation advice, warranty claims, and any follow-up support you may need.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
