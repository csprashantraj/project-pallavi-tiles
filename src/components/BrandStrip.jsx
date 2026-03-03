/**
 * BrandStrip.jsx
 * Horizontal strip showing partner brand badges/logos.
 */
import brands from '../data/brands'

export default function BrandStrip() {
  return (
    <section className="bg-white border-y border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-6 font-medium">
          Our Authorised Brand Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col items-center gap-1.5 group"
            >
              {/* Logo placeholder — replace with <img> when real logo is available */}
              <div
                className="w-28 h-14 rounded-xl flex items-center justify-center px-3 border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow"
                style={{ backgroundColor: brand.color + '15', borderColor: brand.color + '30' }}
              >
                <span
                  className="font-heading font-bold text-sm text-center leading-tight"
                  style={{ color: brand.color }}
                >
                  {brand.name}
                </span>
              </div>
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{ backgroundColor: brand.color + '15', color: brand.color }}
              >
                {brand.credential}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
