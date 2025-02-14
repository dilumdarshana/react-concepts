import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path, { resolve } from 'path';

const root = path.resolve(__dirname, 'src');

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@': resolve(root, 'pages'),
    },
  }
});
