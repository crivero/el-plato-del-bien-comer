// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.', // raíz del proyecto
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
