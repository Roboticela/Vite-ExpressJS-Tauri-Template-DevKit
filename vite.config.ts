import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Tauri (Android / iOS dev) must reach the Vite process from the device/emulator (e.g. 10.8.0.2:5173).
  // The default (localhost only) will hang with "Waiting for your frontend dev server" on mobile.
  clearScreen: false,
  server: {
    port: 5173,
    strictPort: true,
    host: '0.0.0.0',
  },
})
