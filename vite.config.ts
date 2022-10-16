/// <reference types="vitest"/>
/// <reference types="vite/client"/>


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/dui-validator-00011417/',
  test:
  {
    globals: true, // para no estar importando React en cada test
    environment: 'jsdom', 
    setupFiles: 'src/test/setup.ts',
  }
})
