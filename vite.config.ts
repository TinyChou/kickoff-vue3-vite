import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // do not fail on serve (i.e. local development)
    {
      ...eslint({
        failOnWarning: false,
        failOnError: false,
        cache: true,
        fix: true,
      }),
      apply: "serve",
      enforce: "post",
    },
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
