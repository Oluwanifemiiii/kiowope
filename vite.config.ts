import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
  host: true,
  allowedHosts: [
    'tamar-unlanguishing-grimacingly.ng',
    '.ngrok-free.app',
    '.ngrok-free.dev',
    '.ngrok.io',
    '.ngrok.app',
  ],
},
})
