/**
 * Offers.jsx — Current deals and new arrivals page
 */
import SEOHead from '../components/SEOHead'
import offers from '../data/offers'

const FILTER_CATS = ['All', 'Granite', 'Tiles', 'Sanitaryware', 'Pipes']

import { useState } from 'react'
import { Tag, Clock } from 'lucide-react'

export default function Offers() {
  const [filter, setFilter] = useState('All')

  const filtered =
    filter === 'All' ? offers : offers.filter((o) => o.category === filter)

  return (
    <>
      <SEOHead
        title="Offers & New Arrivals"
        description="Discover the latest deals and new stock arrivals at Pallavi Tiles — granite, Kajaria tiles, Kerovit sanitaryware, and Astral pipes."
        keywords="offers, deals, new arrivals, building materials sale, kajaria sale, granite offer"
        ogTitle="Offers & New Arrivals | Pallavi Tiles"
        ogDescription="Latest deals and new stock across all building material categories."
      />

      {/* Banner */}
      <div className="bg-brand-brown py-24 px-4 text-center mt-16">
        <p className="text-xs font-medium tracking-widest text-brand-beige uppercase mb-3">Special Deals</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Offers & New Arrivals</h1>
        <p className="text-white/70 max-w-xl mx-auto">Hot deals, new stock, and limited-time offers — updated regularly.</p>
      </div>

      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {FILTER_CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                filter === cat
                  ? 'bg-brand-brown text-white border-brand-brown'
                  : 'border-gray-300 text-gray-600 hover:border-brand-brown hover:text-brand-brown'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <span className={`absolute top-3 left-3 ${offer.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
                  {offer.badge}
                </span>
                <span className="absolute top-3 right-3 bg-brand-brown/80 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {offer.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-brand-brown text-lg mb-2 leading-snug">
                  {offer.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{offer.description}</p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-brand-gold">
                    <Tag size={14} />
                    <span className="text-sm font-semibold">{offer.discount}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Clock size={13} />
                    <span className="text-xs">{offer.validTill}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-16">No offers in this category right now.</p>
        )}
      </section>
    </>
  )
}
