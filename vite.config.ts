import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
  plugins: [solidPlugin(), babel({ babelHelpers: 'bundled' })],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
