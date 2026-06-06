import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/csbs': {
        target: 'https://csbsapi.saglik.gov.tr',
        changeOrigin: true,
        secure: false,
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            // Cookie forward
            proxyReq.setHeader('Accept', 'application/json');
          });
        },
      },
    },
  },
})
