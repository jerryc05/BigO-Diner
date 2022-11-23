import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

import { babel } from '@rollup/plugin-babel'
// @ts-expect-error: no type declaration file
import incstr from 'incstr'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/restrict-template-expressions
const nextId = incstr.idGenerator({ alphabet: `${incstr.alphabet}-_` }) as ()=>string
const cssClassMap = new Map<string, string>()

export default defineConfig({
  build: {
    reportCompressedSize: false, // improve speed,
    target: 'esnext'
  },
  css: {
    modules: {
      generateScopedName: process.env.NODE_ENV === 'production'
        ? (name, filename/* , css */) => {
          const key = `${name}@${filename}`
          if (!cssClassMap.get(key)) {
            let id = ''
            while (!/(?:-?[A-Z_a-z]+|--)[\w-]*/u.test(id))
              id = nextId()
            cssClassMap.set(key, id)
          }
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          return cssClassMap.get(key)!
        }
        : undefined,
    }
  },
  plugins: [solidPlugin(), babel({ babelHelpers: 'bundled' })],
  resolve: { alias: { '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src') /* check tsconfig.json => paths */ } },
  server: { port: 3000 }
})
