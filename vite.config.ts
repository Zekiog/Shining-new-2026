import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'client',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared'),
      '@assets': path.resolve(__dirname, './attached_assets'),
    },
  },
  build: {
    outDir: '../dist/public',
    emptyOutDir: true,
    sourcemap: false,
    // Disable manualChunks for stability; re-enable gradually after preview validation
    rollupOptions: {
      output: {
        // Use default Vite chunking strategy
      },
    },
  },
  server: {
    port: 3000,
  },
});
