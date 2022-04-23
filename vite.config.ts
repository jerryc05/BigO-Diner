import { open, readdir, readFile, stat } from 'fs/promises'
import * as path from 'path'
import { brotliCompress } from 'zlib'

import vue from '@vitejs/plugin-vue'
import { defineConfig, normalizePath, Plugin, HtmlTagDescriptor } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { viteExternalsPlugin } from 'vite-plugin-externals'


// https://vitejs.dev/config/
const target = 'esnext'
const jsdelivr = 'https://cdn.jsdelivr.net'
const tags: HtmlTagDescriptor[] = [{
  injectTo: 'head-prepend',
  tag: 'meta',
  attrs: {
    'http-equiv': 'Content-Security-Policy',
    // [*-elem] doesn't work in Safari/iOS, fvck Safari
    content: `default-src 'self';script-src 'self' ${jsdelivr};style-src 'self' 'unsafe-inline' ${jsdelivr}`,
  },
},
{
  injectTo: 'head-prepend',
  tag: 'meta',
  attrs: {
    'http-equiv': 'X-Content-Type-Options',
    content: 'nosniff',
  },
},
{
  injectTo: 'head-prepend',
  tag: 'title',
  children: 'BigO Diner'
},
{
  injectTo: 'head-prepend',
  tag: 'link',
  attrs: {
    rel: 'icon',
    href: '/logo.png'
  },
},
{
  injectTo: 'head-prepend',
  tag: 'meta',
  attrs: {
    name: 'viewport',
    content: 'width=device-width,initial-scale=1.0',
  },
},
{
  injectTo: 'head-prepend',
  tag: 'meta',
  attrs: {
    charset: 'UTF-8',
  },
},
]
let extPlug = undefined
if (process.env.NODE_ENV === 'production') {
  tags.push(
    {
      injectTo: 'head',
      tag: 'script',
      attrs: {
        src: 'https://cdn.jsdelivr.net/npm/vue@3/dist/vue.runtime.global.prod.js',
      },
    },
    {
      injectTo: 'head',
      tag: 'script',
      attrs: {
        src: 'https://cdn.jsdelivr.net/npm/vue-demi',
      },
    },
    {
      injectTo: 'head',
      tag: 'script',
      attrs: {
        src: 'https://cdn.jsdelivr.net/npm/pinia',
      },
    })
  extPlug = viteExternalsPlugin({
    vue: 'Vue',
    pinia: 'Pinia'
  })
}
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          entry: 'src/main.ts',
          filename: 'index.html',
          template: 'index.html',
          injectOptions: {
            data: {
              htmlLang: '"en-US"',  // '"zh-cmn-Hans"',
            },
            tags,
          },
        }
      ]
    }),
    extPlug,
    MyPostProcessorOnBuild(async p => {
      if (/\.(\w?js|css)$/.test(p)) {
        let content = await (await readFile(p)).toString()
        const commentRegex = /\/\*[\s\S]*?\*\//g
        if (commentRegex.test(content)) {
          content = content.replace(commentRegex, '')
          await open(p, 'w').then(async f => f.write(content))
        }
      }
    }),
    MyPostProcessorOnBuild(async p => {
      if (/\.\w?(js|css|html)$/.test(p)) {
        const f = await open(p, 'r+')
        const orig = await f.read()
        const compressed: Buffer = await new Promise((acc, rej) =>
          brotliCompress(orig.buffer, (e, b) => e ? rej(e) : acc(b))
        )
        await f.write(compressed, 0, compressed.length, 0)
        const origSz = orig.bytesRead
        const newSz = compressed.length
        console.log(`${p}\n\t${origSz} \t-> ${newSz} bytes \t${(newSz / origSz).toFixed(4)}x`)
      }
    })
  ],
  build: {
    reportCompressedSize: false,  // improve speed
    target
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // check tsconfig.json => paths
    },
  },
  // base: ''  # Default: '/'
  //       └-> Removes leading slash from the path
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target
    }
  },
  server: {
    host: true,
    port: 5000,
    strictPort: false,
    // https: {
    //   minVersion: 'TLSv1.3',
    //   cert: 'server.crt',
    //   key: 'server.key',
    // }
  }
})





function MyPostProcessorOnBuild(fn: (p: string) => Promise<void> | void): Plugin {
  let outRoot: string
  async function iterDir(dir: string) {
    await readdir(dir).then(xs => xs.forEach(async x => {
      x = path.resolve(dir, x)
      await stat(x).then(async s => {
        if (!s.isDirectory()) await fn(x)
        else await iterDir(x)
      })
    }
    ))
  }
  return {
    name: MyPostProcessorOnBuild.name,
    enforce: "post",
    apply: "build",
    configResolved(conf) {
      outRoot = normalizePath(path.resolve(conf.root, conf.build.outDir))
    },
    async closeBundle() { await iterDir(outRoot) }
  }
}
