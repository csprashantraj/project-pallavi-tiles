/**
 * Gallery.jsx — Photo gallery with category filter and lightbox
 */
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import SEOHead from '../components/SEOHead'
import galleryImages from '../data/galleryImages'

const CATEGORIES = ['All', 'Granite', 'Tiles', 'Sanitaryware', 'Pipes', 'Showroom']

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filtered =
    filter === 'All' ? galleryImages : galleryImages.filter((img) => img.category === filter)

  const slides = filtered.map((img) => ({ src: img.src, alt: img.alt }))

  const openLightbox = (idx) => {
    setLightboxIndex(idx)
    setLightboxOpen(true)
  }

  return (
    <>
      <SEOHead
        title="Gallery"
        description="Browse our gallery of installed granite, Kajaria tiles, Kerovit sanitaryware, and Astral pipe projects."
        keywords="gallery, granite photos, tiles installation, sanitaryware showroom"
        ogTitle="Gallery | Pallavi Tiles"
        ogDescription="See our completed projects and showroom display."
      />

      {/* Banner */}
      <div className="bg-brand-brown py-24 px-4 text-center mt-16">
        <p className="text-xs font-medium tracking-widest text-brand-beige uppercase mb-3">Visual Tour</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Gallery</h1>
        <p className="text-white/70 max-w-xl mx-auto">A glimpse of our products and completed installations.</p>
      </div>

      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {CATEGORIES.map((cat) => (
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

        {/* Masonry grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img, idx) => (
            <div
              key={img.id}
              className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={img.thumb}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-400 rounded-xl"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-xl flex items-end p-3">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-medium bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-16">No images in this category yet.</p>
        )}
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        on={{ view: ({ index }) => setLightboxIndex(index) }}
      />
    </>
  )
}
