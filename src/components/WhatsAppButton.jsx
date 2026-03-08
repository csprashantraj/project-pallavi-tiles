/**
 * WhatsAppButton.jsx
 * Fixed floating WhatsApp button — bottom right, above BackToTop.
 * Replace WHATSAPP_NUMBER with the real business number.
 */
const WHATSAPP_NUMBER = '+917765906345' // Format: country code + number, no +
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello! I am interested in your products. Please share more details.'
)

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-28 right-5 z-50 w-13 h-13 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
      style={{ width: '52px', height: '52px', backgroundColor: '#25D366' }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        viewBox="0 0 32 32"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.504L4 29l7.7-1.808A12.94 12.94 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.97 0-3.82-.548-5.402-1.5l-.387-.23-4.574 1.074 1.097-4.455-.252-.4A9.96 9.96 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.34-7.52c-.294-.146-1.737-.857-2.005-.954-.268-.098-.463-.146-.659.146-.195.293-.758.954-.928 1.15-.171.195-.342.22-.635.073-.294-.147-1.24-.456-2.362-1.455-.874-.78-1.463-1.744-1.635-2.037-.17-.294-.018-.452.128-.598.132-.13.294-.34.44-.51.147-.17.196-.293.294-.488.097-.195.049-.366-.025-.512-.074-.146-.659-1.59-.903-2.177-.238-.571-.48-.494-.659-.503l-.561-.01c-.195 0-.512.073-.78.366-.268.293-1.025 1.002-1.025 2.443s1.05 2.834 1.196 3.03c.147.195 2.065 3.153 5.002 4.42.7.302 1.245.482 1.67.617.702.222 1.341.19 1.846.115.563-.084 1.737-.71 1.982-1.396.244-.684.244-1.27.17-1.394-.073-.12-.268-.196-.561-.342z" />
      </svg>
    </a>
  )
}
