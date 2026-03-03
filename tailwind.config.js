/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          brown:  '#3B1F0E',
          beige:  '#C8A97E',
          gold:   '#B8860B',
          cream:  '#FAF7F2',
          dark:   '#1C1C1C',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

