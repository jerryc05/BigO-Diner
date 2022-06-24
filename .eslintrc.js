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
  parser: 'vue-eslint-parser', // must use for vue SFC
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
  ignorePatterns: ['**/*.d.ts', 'node_modules/**', 'dist/**', '**/vite.config.*'],
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
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'only-multiline'],
    'dot-location': ['error', 'property'],
    'func-style': ['error', 'declaration'],
    'function-paren-newline': ['error', 'consistent'],
    'max-len': [
      'error', {
        'code': 120,
        'ignoreComments': true
      }
    ],
    'no-extra-parens': [
      'error', 'all', {'nestedBinaryExpressions': false,
        'enforceForArrowConditionals': false }
    ],
    'no-multiple-empty-lines': ['error', {'max': 6}],
    'padded-blocks': ['error', 'never'],
    'sort-imports': ['error', { 'ignoreCase': true }],
    'vue/first-attribute-linebreak': [
      'error', {
        'singleline': 'beside',
        'multiline': 'beside'
      }
    ],
    'vue/html-closing-bracket-newline': [
      'error', {
        'singleline': 'never',
        'multiline': 'never'
      }
    ],
    'vue/html-indent': [
      'error', 2, {
        'attribute': 1,
        'alignAttributesVertically': false
      }
    ],


    '@typescript-eslint/no-non-null-assertion': 'off',
    'capitalized-comments': 'off',
    'function-call-argument-newline': 'off',
    'id-length': 'off',
    'lines-between-class-members': 'off',
    'line-comment-position': 'off',
    'max-classes-per-file': 'off',
    'max-lines': 'off',
    'max-params': 'off',
    'multiline-comment-style': 'off',
    'multiline-ternary': 'off',
    'no-console': 'off',
    'no-inline-comments': 'off',
    'no-magic-numbers': 'off',
    'no-ternary': 'off',
    'object-curly-spacing': 'off',
    'quote-props': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'vue/max-attributes-per-line': 'off',
  },
}
