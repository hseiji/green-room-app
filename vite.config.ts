import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Use '/' for local dev and '/green-room-app/' for production
  base: process.env.NODE_ENV === 'production' ? '/green-room-app/' : '/',
  plugins: [react()],
})
