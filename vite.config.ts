import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

import { babel } from '@rollup/plugin-babel'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin(), babel({ babelHelpers: 'bundled' })],
  server: { port: 3000 },
  build: { target: 'esnext' },
  resolve: {
    alias: { '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src'), // check tsconfig.json => paths
    },
  }
})
