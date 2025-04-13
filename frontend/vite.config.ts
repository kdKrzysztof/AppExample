import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
process.env = { ...process.env, ...loadEnv('build', process.cwd()) };

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: './',
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API,
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  define: {
    global: {
      window: {}
    }
  }
});
