import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[name]__[local]__[hash:base64:2]"
    }
  },
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 8000,
  }
})
