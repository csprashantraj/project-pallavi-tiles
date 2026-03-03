/**
 * TestimonialCard.jsx
 * Displays a single customer testimonial with star rating.
 */
import { Star } from 'lucide-react'

export default function TestimonialCard({ name, location, rating, review, avatar }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}
          />
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">"{review}"</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-brand-brown flex items-center justify-center shrink-0">
          <span className="text-brand-beige font-heading font-bold text-xs">{avatar}</span>
        </div>
        <div>
          <p className="font-semibold text-brand-dark text-sm">{name}</p>
          <p className="text-xs text-gray-400">{location}</p>
        </div>
      </div>
    </div>
  )
}
