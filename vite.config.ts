import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/manifest.json',
          dest: '.',
        }
      ],
    }),
  ],
    define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: './index.html',
        background: 'src/background.ts'
      },
      output: {
        entryFileNames: '[name].ts',
      }
    },
  },
  server: {
    port: 3000,
    open: true,
    watch: {
      usePolling: true,
    }
  }
})
