/**
 * Products.jsx — Products page with category tabs / anchor sections
 */
import { useState } from 'react'
import SEOHead from '../components/SEOHead'
import ProductCard from '../components/ProductCard'
import { graniteProducts, tilesProducts, sanitarywareProducts, pipeFittingsProducts } from '../data/products'

const TABS = [
  { id: 'granite', label: 'Granite' },
  { id: 'tiles', label: 'Kajaria Tiles' },
  { id: 'sanitaryware', label: 'Sanitaryware & Faucets' },
  { id: 'pipes', label: 'Pipe Fittings' },
]

function SectionHeader({ badge, title, subtitle }) {
  return (
    <div className="mb-8">
      {badge && (
        <span className="inline-block bg-brand-gold text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-brown mb-2">{title}</h2>
      {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
    </div>
  )
}

export default function Products() {
  const [activeTab, setActiveTab] = useState('granite')

  return (
    <>
      <SEOHead
        title="Products"
        description="Browse our full range of building materials: premium granite, Kajaria tiles, Kervit sanitaryware & faucets, and Astral pipe fittings."
        keywords="granite slabs, kajaria tiles, kervit sanitaryware, astral pipes, building materials products"
        ogTitle="Products | Patel Building Materials"
        ogDescription="Granite, Kajaria Tiles, Kervit Sanitaryware & Astral Pipes — all under one roof."
      />

      {/* Banner */}
      <div className="bg-brand-brown py-24 px-4 text-center mt-16">
        <p className="text-xs font-medium tracking-widest text-brand-beige uppercase mb-3">Explore</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Our Products</h1>
        <p className="text-white/70 max-w-xl mx-auto">2,000+ products across four premium categories.</p>
      </div>

      {/* Sticky tabs */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto no-scrollbar gap-1 py-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id)
                document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors shrink-0 ${
                activeTab === tab.id
                  ? 'bg-brand-brown text-white'
                  : 'text-gray-600 hover:bg-brand-cream'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {/* ── Granite ── */}
        <section id="granite">
          <SectionHeader title="Granite" subtitle="Sourced from South India and Rajasthan" />

          <div className="mb-8">
            <h3 className="font-heading font-semibold text-brand-brown text-xl mb-4">
              South Indian Granite
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {graniteProducts.southIndian.map((p) => (
                <ProductCard key={p.id} image={p.image} name={p.name} category={p.origin} finish={p.finish} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-brand-brown text-xl mb-4">
              Rajasthani Granite
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {graniteProducts.rajasthani.map((p) => (
                <ProductCard key={p.id} image={p.image} name={p.name} category={p.origin} finish={p.finish} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Tiles ── */}
        <section id="tiles">
          <SectionHeader badge="Kajaria Prime Dealership" title="Kajaria Tiles" subtitle="India's No. 1 tile brand — floor, wall, vitrified & parking tiles" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tilesProducts.map((p) => (
              <ProductCard key={p.id} image={p.image} name={p.name} category={p.category} size={p.size} finish={p.finish} />
            ))}
          </div>
        </section>

        {/* ── Sanitaryware ── */}
        <section id="sanitaryware">
          <SectionHeader title="Sanitaryware & Faucets" subtitle="Kervit brand — premium bathroom solutions" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sanitarywareProducts.map((p) => (
              <ProductCard key={p.id} image={p.image} name={p.name} category={p.category} description={p.description} />
            ))}
          </div>
        </section>

        {/* ── Pipes ── */}
        <section id="pipes">
          <SectionHeader badge="Astral Pipes Distributorship" title="Pipe Fittings" subtitle="CPVC, UPVC & SWR pipes for all plumbing needs" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pipeFittingsProducts.map((p) => (
              <ProductCard key={p.id} image={p.image} name={p.name} category={p.category} description={p.description} size={p.sizes} />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
