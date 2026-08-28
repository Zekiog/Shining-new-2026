import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
  build: {
    outDir: 'dist',
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
