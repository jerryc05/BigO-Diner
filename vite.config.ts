import { babel } from '@rollup/plugin-babel'
// @ts-expect-error: no type declaration file
import incstr from 'incstr'
import assert from 'node:assert'
import { execSync } from 'node:child_process'
import { constants, existsSync, readFileSync, unlinkSync } from 'node:fs'
import { access, open, readFile, readdir, stat } from 'node:fs/promises'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompress } from 'node:zlib'
import { PluginOption, defineConfig, normalizePath } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import solidPlugin from 'vite-plugin-solid'

import { SW_PATH } from './src/utils/constants'

// PWA files
const favicon = '/favicon.webp'
const pwaManifest = '/pwa.webmanifest'

for (const f of [favicon, pwaManifest]) {
  assert(
    existsSync(
      path.resolve(path.dirname(fileURLToPath(import.meta.url)), `public/${f}`),
    ),
  )
}
const swJsPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  `public${SW_PATH}`,
)
const swtsPath = `${swJsPath.substring(0, swJsPath.length - 3)}.ts`
try {
  unlinkSync(swJsPath)
} catch {}
// todo
/*
import esbuild from 'esbuild';
import { minifier } from '../types';

export default minifier(async ({ code }) => {
	const minified = await esbuild.transform(code, {
		minify: true,
		sourcemap: false,
		legalComments: 'none',
		treeShaking: true,
	});

	return minified.code;
});
 */
execSync(`npx tsc ${swtsPath} --lib webworker`, { stdio: 'inherit' })
assert(existsSync(swJsPath))

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
const nextId = incstr.idGenerator({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/restrict-template-expressions
  alphabet: `${incstr.alphabet}-_`,
}) as () => string
const cssClassMap = new Map<string, string>()
const jsdelivr = 'https://cdn.jsdelivr.net'

function buildPostProcessor(
  fn: (p: string) => Promise<void> | void,
): PluginOption {
  let outRoot = ''
  async function iterDir(dir: string) {
    await readdir(dir).then(xs =>
      Promise.all(
        xs.map(async x_ => {
          const x = path.resolve(dir, x_)
          const statRes = await stat(x)
          await (statRes.isDirectory()
            ? iterDir(x)
            : fn(
                path.relative(path.dirname(fileURLToPath(import.meta.url)), x),
              ))
        }),
      ),
    )
  }
  return {
    apply: 'build',
    async closeBundle() {
      await access(outRoot, constants.F_OK).then(() => iterDir(outRoot))
    },
    configResolved(conf) {
      outRoot = normalizePath(path.resolve(conf.root, conf.build.outDir))
    },
    enforce: 'post',
    name: buildPostProcessor.name,
  }
}

export default defineConfig({
  build: {
    reportCompressedSize: false, // improve speed,
    target: 'esnext',
  },
  css: {
    modules: {
      generateScopedName:
        process.env.NODE_ENV === 'production'
          ? (name, filename /* , css */) => {
              const key = `${name}@${filename}`
              if (!cssClassMap.get(key)) {
                let id = ''
                while (!/(?:-?[A-Z_a-z]+|--)[\w-]*/u.test(id)) id = nextId()
                cssClassMap.set(key, id)
              }
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              return cssClassMap.get(key)!
            }
          : undefined,
    },
  },
  plugins: [
    solidPlugin(),
    babel({ babelHelpers: 'bundled' }),
    createHtmlPlugin({
      entry: 'src/index.tsx',
      inject: {
        tags: [
          {
            attrs: {
              content: 'width=device-width,initial-scale=1',
              name: 'viewport',
            },
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
              'http-equiv': 'Strict-Transport-Security',
            },
            injectTo: 'head-prepend',
            tag: 'meta',
          },
          {
            attrs: {
              content: `upgrade-insecure-requests;default-src 'self' data:;script-src 'self' ${jsdelivr};style-src 'self' 'unsafe-inline' ${jsdelivr};connect-src 'self' https://sso.jerryc05.icu`, // [*-elem] doesn't work in Safari/iOS, fvck Safari
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
          {
            injectTo: 'head-prepend',
            tag: 'link',
            attrs: {
              rel: 'icon',
              type: 'image/webp',
              href: favicon,
            },
          },
          {
            injectTo: 'head-prepend',
            tag: 'link',
            attrs: {
              rel: 'manifest',
              href: pwaManifest,
            },
          },
        ],
      },
      minify: true,
    }),
    buildPostProcessor(async p => {
      // p = p.split(path.sep).join(path.posix.sep)
      if (!/\.(?:js|css|html|svg)$/u.test(p)) return
      const newFileName = p,
        orig = await readFile(p),
        compressed: Buffer = await new Promise((resolve, reject) => {
          brotliCompress(orig, (e, b) => (e ? reject(e) : resolve(b)))
        }),
        newSz = compressed.byteLength,
        origSz = await stat(p).then(s => s.size),
        willSave = newSz < origSz * 0.99
      if (willSave)
        await open(newFileName, 'w').then(async f => f.write(compressed))
      // if alredy exist then err out
      // eslint-disable-next-line no-console
      console.log(
        `${p}\n\t${origSz} \t-> ${newSz} bytes \t` +
          `${(newSz / origSz).toFixed(4)}x ${willSave ? '✅' : '❌'}`,
      )
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        './src',
      ) /* check tsconfig.json => paths */,
    },
  },
  server: { host: true },
})
