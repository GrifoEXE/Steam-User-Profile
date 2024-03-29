import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/profile': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});
