import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
      cssFileName: 'style',
    },
    rollupOptions: {
      external: ['vue', '@paperpic/core'],
    },
  },
  test: {
    environment: 'happy-dom',
    alias: {
      '@paperpic/core': fileURLToPath(new URL('../core/src/index.ts', import.meta.url)),
    },
  },
})
