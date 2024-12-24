import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    host: '127.0.0.1',
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist', // Specify output directory
    emptyOutDir: true, // Clean the output directory before building
    sourcemap: true, // Generate source maps for debugging
    rollupOptions: {
      input: './index.html', // Entry point for the app
    },
  },
});
