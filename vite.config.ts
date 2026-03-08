import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      '@': '/src',
      '@api': '/src/app',
      '@app': '/src/app',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@constants': '/src/constants',
      '@hooks': '/src/hooks',
      '@models': '/src/models',
      '@shared': '/src/shared',
      '@utils': '/src/utils',
    },
  },

  plugins: [react()],

  server:
    mode === 'development'
      ? {
          open: true,
          port: 3000,
          host: '127.0.0.1',
        }
      : { port: 3000 },
}));
