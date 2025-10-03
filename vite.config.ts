import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  base: '/',        // << change from '/crevo/' to '/'
  build: { outDir: 'dist' },
  optimizeDeps: { exclude: ['lucide-react'] },
})
