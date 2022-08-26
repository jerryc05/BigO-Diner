/* eslint-disable unicorn/prefer-module, unicorn/prefer-module */
const MAX_LEN = 115
const INDENT = 2


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

    'plugin:optimize-regex/all',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:json/recommended',
    'plugin:markdown/recommended',
    'plugin:n/recommended',
    'plugin:no-unsanitized/DOM',
    'plugin:promise/recommended',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/all',
    'standard',
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
    '@typescript-eslint',

    'html',
    'import',
    'json',
    'markdown',
    'n',
    'no-secrets',
    'promise',
    'sonarjs',
  ],
  ignorePatterns: ['**/*.d.ts', 'node_modules/**', 'dist/**', '**/vite.config.*'],
  settings: {
    'html/indent': INDENT,
  },
  rules: {
    'indent': ['error', INDENT],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],


    'vue/component-api-style': 'error',
    'vue/first-attribute-linebreak': [
      'error', {
        'singleline': 'beside',
        'multiline': 'beside'
      }
    ],
    'vue/html-button-has-type': 'error',
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
    'vue/max-len': [
      'error', {
        'code': MAX_LEN,
        'ignoreStrings': true,
        'ignoreComments': true,
      }
    ],
    'vue/next-tick-style': 'error',
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/prefer-prop-type-boolean-first': 'warn',
    'vue/v-on-function-call': ['error', 'never'],


    'array-element-newline': ['error', 'consistent'],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'only-multiline'],
    'curly': ['error', 'multi'],
    'dot-location': ['error', 'property'],
    'func-style': ['error', 'declaration'],
    'function-paren-newline': ['error', 'consistent'],
    'max-len': [
      'error', {
        'code': MAX_LEN,
        'ignoreComments': true
      }
    ],
    'no-extra-parens': [
      'error', 'all', {
        'nestedBinaryExpressions': false,
        'enforceForArrowConditionals': false
      }
    ],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-multiple-empty-lines': ['error', { 'max': 6 }],
    'no-secrets/no-secrets': 'error',
    'no-warning-comments': 'warn',
    'padded-blocks': ['error', 'never'],
    'sort-imports': ['error', { 'ignoreCase': true }],
    'space-before-function-paren': ['error', 'never'],


    '@typescript-eslint/no-non-null-assertion': 'off',
    'capitalized-comments': 'off',
    'function-call-argument-newline': 'off',
    'id-length': 'off',
    'import/no-unresolved': 'off',  // Only vite
    'lines-between-class-members': 'off',
    'line-comment-position': 'off',
    'max-classes-per-file': 'off',
    'max-lines': 'off',
    'max-params': 'off',
    'multiline-comment-style': 'off',
    'multiline-ternary': 'off',
    'n/no-missing-import': 'off',  // Only vite
    'n/no-unpublished-import': 'off',  // Only vite
    'n/no-unsupported-features/es-syntax': 'off',
    'no-console': 'off',
    'no-inline-comments': 'off',
    'no-magic-numbers': 'off',
    'no-ternary': 'off',
    'object-curly-spacing': 'off',
    'quote-props': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'unicorn/filename-case': [
      'error', {
        cases: {
          kebabCase: true,
          pascalCase: true,
        }
      }
    ],
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'vue/max-attributes-per-line': 'off',
  },
}
