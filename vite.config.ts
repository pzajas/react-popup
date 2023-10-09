import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    alias: {
      '@components': '/src/components',
      '@elements': '/src/elements',
      '@assets': '/src/assets',
      '@redux': '/src/redux',
    },
  },
  plugins: react(),
})
