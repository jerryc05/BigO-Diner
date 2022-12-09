import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

import { babel } from '@rollup/plugin-babel'
// @ts-expect-error: no type declaration file
import incstr from 'incstr'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import solidPlugin from 'vite-plugin-solid'

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/restrict-template-expressions
const nextId = incstr.idGenerator({ alphabet: `${incstr.alphabet}-_` }) as ()=>string
const cssClassMap = new Map<string, string>()
const jsdelivr = 'https://cdn.jsdelivr.net'

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
  plugins: [
    solidPlugin(), babel({ babelHelpers: 'bundled' }), createHtmlPlugin({
      entry: 'src/index.tsx',
      inject: {
        tags: [
          {
            attrs: { content: 'width=device-width,initial-scale=1', name: 'viewport' },
            // eslint-disable-next-line sonarjs/no-duplicate-string
            injectTo: 'head-prepend',
            tag: 'meta',
          },
          {
            attrs: { charset: 'utf8' },
            injectTo: 'head-prepend',
            tag: 'meta',
          },
          {
            attrs: {
              content: 'max-age=9999999;includeSubDomains',
              'http-equiv': 'Strict-Transport-Security'
            },
            injectTo: 'head-prepend',
            tag: 'meta',
          },
          {
            attrs: {
              content: `upgrade-insecure-requests;default-src 'self';script-src 'self' ${jsdelivr};style-src 'self' 'unsafe-inline' ${jsdelivr}`,  // [*-elem] doesn't work in Safari/iOS, fvck Safari
              'http-equiv': 'Content-Security-Policy',
            },
            injectTo: 'head-prepend',
            tag: 'meta',
          },
          {
            attrs: {
              content: 'nosniff',
              'http-equiv': 'X-Content-Type-Options',
            },
            injectTo: 'head-prepend',
            tag: 'meta',
          },
        // {
        //   injectTo: 'head-prepend',
        //   tag: 'title',
        //   children: 'Title'
        // },
        // {
        //   injectTo: 'head-prepend',
        //   tag: 'link',
        //   attrs: {
        //     rel: 'icon',
        //     href: '/favicon.ico',
        //   },
        // },
        ]
      },
      minify: true
    })
  ],
  resolve: { alias: { '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src') /* check tsconfig.json => paths */ } },
  server: { port: 3000 }
})
