import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/2024-rocketseat-reactjs/2-aprofundando-em-hooks/to-do-pomodoro/dist',
})
