import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      "/api/v1/users": {
        target: "https://spendwise-website-production.up.railway.app/",
        changeOrigin: true,
        secure: false,
      }
    }
  },
  plugins: [react()],
})
