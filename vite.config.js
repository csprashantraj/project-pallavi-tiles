import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Target ES2015 so react-snap's bundled Chromium can execute the JS
    target: 'es2015',
  },
})
