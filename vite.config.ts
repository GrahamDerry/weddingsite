import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // For GitHub Pages: use repo name as base in production build
  base: command === 'build' ? '/weddingsite/' : '/',
}))
