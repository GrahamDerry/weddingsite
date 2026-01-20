import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages deployment, set base to your repo name
  // e.g., base: '/WeddingSite/' for https://<username>.github.io/WeddingSite/
  // For local dev or custom domain, use '/'
  base: process.env.NODE_ENV === 'production' ? '/weddingsite/' : '/',
})

