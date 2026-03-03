/**
 * ProductCard.jsx
 * Generic reusable product card used across product sections and offers.
 */
export default function ProductCard({ image, name, category, size, finish, description, badge }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-brand-gold text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {badge}
          </span>
        )}
        {category && (
          <span className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-heading font-semibold text-brand-brown text-base mb-1">{name}</h3>
        {size && (
          <p className="text-xs text-gray-500 mb-0.5">
            Size: <span className="text-gray-700 font-medium">{size}</span>
          </p>
        )}
        {finish && (
          <p className="text-xs text-gray-500 mb-1">
            Finish: <span className="text-gray-700 font-medium">{finish}</span>
          </p>
        )}
        {description && (
          <p className="text-xs text-gray-600 leading-relaxed mt-1">{description}</p>
        )}
      </div>
    </div>
  )
}
