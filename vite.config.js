import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 600, // Raise limit temporarily (optional)
    rollupOptions: {
      output: {
        manualChunks: {
          // Group heavy libraries
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },
  server: {
    // host: '0.0.0.0'
    host: true,     // ✅ expose both localhost and LAN
    port: 5175,
    strictPort: false, // ✅ allow auto-pick another port if busy
  },
  theme: {
    extend: {
      keyframes: {
        pop: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        pop: 'pop 0.5s ease-out',
      },
    },
  },
})
