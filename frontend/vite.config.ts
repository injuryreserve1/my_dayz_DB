import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
  server: {
    proxy: {
      '/dayzimages': 'http://localhost:4000',
      '/graphql': 'http://localhost:4000',
    },
  },
});
