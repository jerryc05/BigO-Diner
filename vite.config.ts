import { constants } from 'fs'
import { access, open, readdir, readFile, stat, writeFile } from 'fs/promises'
import * as path from 'path'
import { brotliCompress } from 'zlib'

import vue from '@vitejs/plugin-vue'
import { defineConfig, normalizePath, Plugin, HtmlTagDescriptor } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import removeConsole from 'vite-plugin-remove-console'
import WindiCSS from 'vite-plugin-windicss'


// https://vitejs.dev/config/
const target = 'esnext'
const jsdelivr = 'https://cdn.jsdelivr.net'
const tags: HtmlTagDescriptor[] = [{
  injectTo: 'head-prepend',
  tag: 'meta',
  attrs: {
    'http-equiv': 'Content-Security-Policy',
    // [*-elem] doesn't work in Safari/iOS, fvck Safari
    content: `default-src 'self';script-src 'self' ${jsdelivr};style-src 'self' 'unsafe-inline' ${jsdelivr};img-src 'self' data: https://\*.ibb.co https://\*.licdn.com`,
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
const extPlugs: Plugin[] = []
if (process.env.NODE_ENV === 'production') {
  tags.push(
    {
      injectTo: 'head',
      tag: 'script',
      attrs: {
        defer: true,
        src: 'https://cdn.jsdelivr.net/npm/vue@3/dist/vue.runtime.global.prod.js',
      },
    },
    {
      injectTo: 'head',
      tag: 'script',
      attrs: {
        defer: true,
        src: 'https://cdn.jsdelivr.net/npm/vue-demi',
      },
    },
    {
      injectTo: 'head',
      tag: 'script',
      attrs: {
        defer: true,
        src: 'https://cdn.jsdelivr.net/npm/pinia',
      },
    },
    // {
    //   injectTo: 'head',
    //   tag: 'script',
    //   attrs: {
    //     defer: true,
    //     src: 'https://cdn.jsdelivr.net/npm/@vueuse/core',
    //   },
    // }
  )
  extPlugs.push(viteExternalsPlugin({
    vue: 'Vue',
    pinia: 'Pinia',
    // '@vueuse/core': 'VueUse'
  }))
  extPlugs.push(removeConsole())
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
    WindiCSS(),
    ...extPlugs,
    MyPostProcessorOnBuild(async p => {
      if (/\.(\w?js|css)$/.test(p)) {
        let content = (await readFile(p)).toString()
        const commentRegex = /\/\*[\s\S]*?\*\//g
        if (commentRegex.test(content)) {
          content = content.replace(commentRegex, '')
          await open(p, 'w').then(async f => f.write(content))
        }
      }
    }),
    MyPostProcessorOnBuild(async p => {
      p = p.split(path.sep).join(path.posix.sep)
      if (/\.+\w?(js|css|html)$/.test(p)) {
        const orig = await readFile(p)
        const compressed: Buffer = await new Promise((acc, rej) =>
          brotliCompress(orig.buffer, (e, b) => e ? rej(e) : acc(b))
        )
        await writeFile(p, compressed)
        const origSz = orig.length
        const newSz = compressed.length
        console.log(`${p}\n\t${origSz} \t-> ${newSz} bytes \t${(newSz / origSz).toFixed(4)}x`)
      } else {
        console.log(`${p} \tskipped ...`)
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
    async closeBundle() { access(outRoot, constants.F_OK).then(_ => iterDir(outRoot)) }
  }
}
