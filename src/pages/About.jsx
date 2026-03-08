/**
 * About.jsx — About Us page
 */
import { Heart, Star, Layers, Headphones } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const values = [
  { Icon: Star, title: 'Quality', desc: 'We never compromise on the quality of materials we stock. Every product is sourced from verified manufacturers.' },
  { Icon: Heart, title: 'Trust', desc: 'Over one and half decade of honest business dealings have built unshakeable trust with our clients.' },
  { Icon: Layers, title: 'Variety', desc: '2,000+ products across 4 major categories means you will always find exactly what you need.' },
  { Icon: Headphones, title: 'Service', desc: 'From showroom consultation to after-sale support, our team is always here for you.' },
]

const teamMembers = [
  { name: 'Rubi Devi', role: 'Proprietor', initials: 'RD' },
  { name: 'Surendra Prasad', role: 'Founder and Operational Manager', initials: 'SP' }
]

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about Pallavi Tiles — a business with 13+ years of experience in granite, tiles, sanitaryware, and pipe fittings in Sitamarhi."
        keywords="about Pallavi Tiles, business, building materials Sitamarhi, history"
        ogTitle="About Us | Pallavi Tiles"
        ogDescription="13+ years of serving Sitamarhi with premium building materials."
      />

      {/* Hero banner */}
      <div className="bg-brand-brown py-24 px-4 text-center mt-16">
        <p className="text-xs font-medium tracking-widest text-brand-beige uppercase mb-3">Our Story</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">About Us</h1>
        <p className="text-white/70 max-w-xl mx-auto">Business rooted in values, built on relationships.</p>
      </div>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <p className="text-xs font-medium tracking-widest text-brand-gold uppercase mb-3">Our Founding</p>
            <h2 className="font-heading text-3xl font-bold text-brand-brown mb-5">
              From Humble Beginnings to a Trusted Name
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Pallavi Tiles was founded in the year 2013 by Surendra Prasad and Rubi Devi with a small
                granite trading business in Sitamarhi. What started as a single-floor shop with a handful
                of granite samples has grown into one of the region's most comprehensive building materials
                showrooms.
              </p>
              <p>
                Driven by an unwavering commitment to quality and fair pricing, our family gradually
                expanded into Kajaria tiles, Kerovit sanitaryware, and Astral pipe fittings —
                becoming an authorised dealer and distributor for all three premium brands.
              </p>
              <p>
                Today, our family continues to run every aspect of the business personally —
                because we believe that personal attention and genuine relationships
                are what truly distinguish us from larger, impersonal retailers.
              </p>
            </div>
          </div>
          <div className="fade-in-up">
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&h=500&fit=crop"
              alt="Our showroom"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-brand-cream">
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="fade-in-up bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-brand-brown flex items-center justify-center mb-4">
              <span className="text-brand-beige font-bold text-lg">M</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-brand-brown mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide every customer — from individual homeowners to large contractors —
              with premium building materials at fair prices, backed by honest advice
              and personalised service that turns construction projects into dreams fulfilled.
            </p>
          </div>
          <div className="fade-in-up bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center mb-4">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-brand-brown mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted building materials partner in Sitamarhi, Bihar — a name that
              homeowners, architects, and contractors recommend without hesitation 
              because of our unwavering commitment to quality, integrity, and personalised service.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <p className="text-xs font-medium tracking-widest text-brand-gold uppercase mb-3">What Guides Us</p>
            <h2 className="font-heading text-3xl font-bold text-brand-brown">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ Icon, title, desc }) => (
              <div key={title} className="fade-in-up text-center p-6 rounded-2xl bg-brand-cream hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-brand-brown flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-brand-beige" />
                </div>
                <h3 className="font-heading font-bold text-brand-brown text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-brand-cream">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <p className="text-xs font-medium tracking-widest text-brand-gold uppercase mb-3">The People Behind It</p>
            <h2 className="font-heading text-3xl font-bold text-brand-brown">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((m) => (
              <div key={m.name} className="fade-in-up bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                {/* Photo placeholder */}
                <div className="w-20 h-20 rounded-full bg-brand-brown mx-auto mb-4 flex items-center justify-center">
                  <span className="font-heading font-bold text-brand-beige text-xl">{m.initials}</span>
                </div>
                <h3 className="font-heading font-bold text-brand-brown text-base">{m.name}</h3>
                <p className="text-brand-gold text-sm font-medium mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
