/*
pnpm i -D prettier @trivago/prettier-plugin-sort-imports
*/

const addSortImport = cfg => ({
  ...cfg,
  importOrder: ['^@/', '^./'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [...(cfg.plugins ?? []), '@trivago/prettier-plugin-sort-imports'],
})

module.exports = addSortImport({
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: 'avoid',
  vueIndentScriptAndStyle: true,
})
