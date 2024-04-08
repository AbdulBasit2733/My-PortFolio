import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/My-PortFolio/",
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['react-scripts'],
  },
})
