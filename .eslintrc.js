/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: [
    'eslint:all',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:vue/base',
    'plugin:vue/vue3-recommended',
  ],
  // must use for vue SFC
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.vue'],
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],

    'vue/component-api-style': 'error',
    'vue/html-button-has-type': 'error',
    'vue/next-tick-style': 'error',
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/prefer-prop-type-boolean-first': 'warn',
    'vue/v-on-function-call': ['error', 'never'],

    'array-element-newline': ['error', 'consistent'],
    'comma-dangle': ['error', 'only-multiline'],
    'dot-location': ['error', 'property'],
    'function-call-argument-newline': ['error', 'never'],
    'padded-blocks': ['error', 'never'],

    'capitalized-comments': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    'max-len': 'off',
    'max-lines': 'off',
    'max-params': 'off',
    'multiline-comment-style': 'off',
    'multiline-ternary': 'off',
    'no-magic-numbers': 'off',
    'no-ternary': 'off',
    'object-curly-spacing': 'off',
    'quote-props': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
  },
  ignorePatterns: ['**/*.d.ts', 'node_modules/**', 'dist/**'],
}
