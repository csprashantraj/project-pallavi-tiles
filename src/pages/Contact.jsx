/**
 * Contact.jsx — Contact page with form, map placeholder, and business info
 */
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const PRODUCT_OPTIONS = [
  'Granite',
  'Kajaria Tiles',
  'Kerovit Sanitaryware & Faucets',
  'Astral Pipe Fittings',
  'Multiple Products',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', product: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.product) e.product = 'Please select a product'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) {
      setErrors(e2)
      return
    }
    // No backend — show success state
    setSubmitted(true)
    setForm({ name: '', phone: '', email: '', product: '', message: '' })
  }

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Patel Building Materials in Ahmedabad. Call, WhatsApp, or fill out our inquiry form for granite, tiles, sanitaryware, and pipe fittings."
        keywords="contact building materials shop Ahmedabad, inquiry form, WhatsApp building materials"
        ogTitle="Contact Us | Patel Building Materials"
        ogDescription="Reach us by phone, WhatsApp, or our online inquiry form."
      />

      {/* Banner */}
      <div className="bg-brand-brown py-24 px-4 text-center mt-16">
        <p className="text-xs font-medium tracking-widest text-brand-beige uppercase mb-3">Get In Touch</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-white/70 max-w-xl mx-auto">We'd love to hear from you. Visit us, call us, or drop a message.</p>
      </div>

      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Info */}
        <div className="space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-brown mb-6">Shop Information</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-brand-dark text-sm">Address</p>
                  <p className="text-gray-600 text-sm">Near Bazar Samiti Gate, Main Road,<br />Sitamarhi – 843302, Bihar, India</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-brand-dark text-sm">Phone</p>
                  <a href="tel:+917765906345" className="text-gray-600 text-sm hover:text-brand-gold">+91 77659 06345</a><br />
                  <a href="tel:+919931554943" className="text-gray-600 text-sm hover:text-brand-gold">+91 99315 54943</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-brand-dark text-sm">Email</p>
                  <a href="mailto:pallavitiles19@gmail.com" className="text-gray-600 text-sm hover:text-brand-gold break-all">
                    pallavitiles19@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-brand-dark text-sm">Business Hours</p>
                  <p className="text-gray-600 text-sm">Sunday – Friday: 10:00 AM – 7:00 PM</p>
                  <p className="text-gray-600 text-sm">Saturday: 10:00 AM – 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917765906345?text=Hello!%20I%20am%20interested%20in%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-full w-fit transition-colors shadow-md"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>

          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.28825819785553!2d85.51164776754601!3d26.596391137830132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf13029b006e9%3A0x8ba3781c8080217b!2sPallavi%20Tiles!5e0!3m2!1sen!2sin!4v1772650649570!5m2!1sen!2sin"
              width="100%"
              height="256"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pallavi Tiles Location"
            />
          </div>
        </div>

        {/* Right: Form */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-brand-brown mb-6">Send an Inquiry</h2>

          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16 gap-4 bg-green-50 rounded-2xl border border-green-200">
              <CheckCircle size={48} className="text-green-500" />
              <h3 className="font-heading font-bold text-xl text-brand-brown">Thank You!</h3>
              <p className="text-gray-600 text-sm max-w-xs">
                Your inquiry has been received. We will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-sm text-brand-gold hover:underline"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-gold transition ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className={`w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-gold transition ${errors.phone ? 'border-red-400' : 'border-gray-300'}`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com (optional)"
                  className={`w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-gold transition ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Product */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Interest *</label>
                <select
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  className={`w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-gold transition bg-white ${errors.product ? 'border-red-400' : 'border-gray-300'}`}
                >
                  <option value="">Select a product category</option>
                  {PRODUCT_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                {errors.product && <p className="text-red-500 text-xs mt-1">{errors.product}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your requirement..."
                  className={`w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-gold transition resize-none ${errors.message ? 'border-red-400' : 'border-gray-300'}`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-brand-brown hover:bg-brand-gold text-white font-semibold py-3.5 rounded-xl transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
