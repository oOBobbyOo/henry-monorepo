import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
// @see https://github.com/antfu/unocss
import UnoCSS from 'unocss/vite'

import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      UnoCSS(),
      react(),
    ],
  }
})
