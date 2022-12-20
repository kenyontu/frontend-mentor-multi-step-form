import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/frontend-mentor-multi-step-form/',
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
})
