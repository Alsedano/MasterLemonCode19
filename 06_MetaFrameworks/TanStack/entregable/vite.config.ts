import react from '@vitejs/plugin-react';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tanstackStart(),
    react(),
    tailwindcss()
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  envPrefix: 'PUBLIC_',
});
