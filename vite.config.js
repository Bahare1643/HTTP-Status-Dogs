import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,       // 👈 Use port 3000 like CRA
    host: true,       // 👈 Allow external access if needed
  },
})
