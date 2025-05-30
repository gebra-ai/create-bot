import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/create-bot/',
  server: {
    port: parseInt(process.env.PORT || '8300'),
    host: true,
    allowedHosts: ['monitor.gebra.ai']
  }
})
