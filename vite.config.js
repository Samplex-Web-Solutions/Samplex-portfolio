import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'; 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    port: 1999, // <--- Change this to your desired port
    strictPort: true // Optional: Set to true to exit if port is in use, instead of trying next available
  },
})
