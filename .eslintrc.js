/*
pnpm i -D eslint @types/eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier eslint-plugin-json eslint-plugin-markdown eslint-plugin-n eslint-plugin-no-unsanitized eslint-plugin-optimize-regex eslint-plugin-promise eslint-plugin-security eslint-plugin-sonarjs  eslint-plugin-sort-keys eslint-plugin-unicorn eslint-plugin-no-secrets
*/

/* eslint-disable unicorn/prefer-module */
const MAX_LEN = [
  'warn',
  {
    code: 100,
    ignoreComments: true,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
  },
]
const INDENT = 2
const QUOTE = ['warn', 'single', { avoidEscape: true }]
const ESLINT_PARSER = '@typescript-eslint/parser'

/** @type {import('eslint').Linter.Config} */
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
const vue = {
  extends: ['plugin:vue/base', 'plugin:vue/vue3-recommended'],
  parser: 'vue-eslint-parser', // must use for vue SFC
  parserOptions: {
    extraFileExtensions: ['.vue'],
    parser: ESLINT_PARSER,
  },
  plugins: ['vue'],
  rules: {
    'max-len': 'off',
    'vue/component-api-style': 'error',
    'vue/html-button-has-type': 'error',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        multiline: 'never',
        singleline: 'never',
      },
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        alignAttributesVertically: false,
        attribute: 1,
      },
    ],
    'vue/html-quotes': QUOTE,
    'vue/html-self-closing': ['error', { html: { normal: 'never' } }],
    'vue/max-attributes-per-line': 'off',
    'vue/max-len': [
      MAX_LEN[0],
      { ...MAX_LEN[1], ignoreHTMLAttributeValues: true },
    ],
    'vue/next-tick-style': 'error',
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/prefer-prop-type-boolean-first': 'warn',
    'vue/v-on-function-call': ['error', 'never'],
  },
}

/**
 * @param {import('eslint').Linter.Config} cfg
 * @return {import('eslint').Linter.Config}
 */
function includeJsx(cfg) {
  return {
    ...cfg,
    extends: [...(cfg.extends ?? []), 'plugin:react/jsx-runtime'],
    rules: {
      ...(cfg.rules ?? []),
      'react/button-has-type': 'warn',
      // 'react/jsx-closing-bracket-location': [
      //   'warn',
      //   { nonEmpty: 'tag-aligned', selfClosing: 'after-props' },
      // ],
      'react/jsx-closing-tag-location': 'warn',
      'react/jsx-curly-newline': [
        'warn',
        { multiline: 'consistent', singleline: 'forbid' },
      ],
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.jsx', '.tsx'] },
      ],
      'react/jsx-indent': ['warn', INDENT],
      'react/jsx-indent-props': ['warn', 'first'],
      'react/jsx-max-depth': 'off',
      'react/jsx-newline': 'off',
      'react/jsx-no-literals': 'off',
      'react/jsx-sort-props': 'off',
    },
  }
}

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
const react = includeJsx({
  extends: ['plugin:react/all', 'plugin:react-hooks/recommended'],
  rules: {
    'react/display-name': 'off',
    'react/no-multi-comp': 'off',
    'react/require-default-props': 'off',
  },
  settings: { react: { version: 'detect' } },
})

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
const solidjs = includeJsx({
  extends: ['plugin:solid/typescript'],
  plugins: ['solid'],
})

/** @type {import('eslint').Linter.Config} */
const framework = solidjs

const plugins = [
  ...(framework.plugins ?? []),

  '@typescript-eslint',

  'json',
  'markdown',
  'n',
  'no-secrets',
  'promise',
  'sonarjs',
  'sort-keys',
]

/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    ...(framework.extends ?? []),

    'eslint:all',

    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',

    'plugin:optimize-regex/all',
    'plugin:json/recommended',
    'plugin:markdown/recommended',
    'plugin:n/recommended',
    'plugin:no-unsanitized/DOM',
    'plugin:promise/recommended',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/all',

    'prettier',
  ],
  parser: framework.parser ?? ESLINT_PARSER,
  parserOptions: {
    ecmaFeatures: { impliedStrict: true, jsx: true },
    ecmaVersion: 'latest',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    extraFileExtensions: framework.parserOptions?.extraFileExtensions,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    parser: framework.parserOptions?.parser,
    project: ['./tsconfig.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins,
  root: true,

  rules: {
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/restrict-template-expressions': [
      'warn',
      {
        allowBoolean: true,
        allowNullish: true,
        allowNumber: true,
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    'array-bracket-newline': 'warn',
    'array-element-newline': ['error', 'consistent'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'warn',
    'block-spacing': 'warn',
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    'capitalized-comments': 'off',
    'comma-dangle': ['warn', 'only-multiline'],
    'comma-spacing': 'warn',
    curly: ['error', 'multi'],
    'default-case': 'off', // only typescript
    'dot-location': ['error', 'property'],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'function-call-argument-newline': 'off',
    // 'function-paren-newline': ['warn', 'consistent'],
    'id-length': 'off',
    // 'implicit-arrow-linebreak': 'warn',
    // indent: [
    //   'warn',
    //   INDENT,
    //   { SwitchCase: 1, ignoredNodes: ['JSXElement *', 'JSXElement'] },
    // ],
    // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
    'jsx-quotes': ['warn', `prefer-${QUOTE[1]}`],
    'key-spacing': 'warn',
    'line-comment-position': 'off',
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    // 'max-len': MAX_LEN,
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'multiline-comment-style': 'off',
    // 'multiline-ternary': ['warn', 'always-multiline'],
    'n/no-missing-import': 'off', // only vite
    'n/no-unpublished-import': 'off', // only vite
    'n/no-unpublished-require': 'off',
    'no-console': ['warn', { allow: ['error'] }],
    /*
    'no-extra-parens': [
      'warn', 'all', {
        enforceForArrowConditionals: false,
        ignoreJSX: 'all',
        nestedBinaryExpressions: false,
      }
    ], */
    'no-inline-comments': 'off',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'warn',
    'no-multi-spaces': ['warn', { ignoreEOLComments: true }],
    'no-multiple-empty-lines': 'warn',
    'no-secrets/no-secrets': 'warn',
    'no-shadow': 'off', // only typescript
    'no-ternary': 'off',
    'no-trailing-spaces': 'warn',
    'no-undefined': 'off',
    'no-warning-comments': 'warn',
    'nonblock-statement-body-position': 'off',
    // 'object-curly-newline': ['warn', { multiline: true }],
    'object-curly-spacing': ['warn', 'always'],
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
    'one-var': 'off',
    'padded-blocks': 'off',
    'promise/always-return': ['warn', { ignoreLastCallback: true }],
    'quote-props': ['warn', 'as-needed'],
    quotes: QUOTE,
    semi: ['warn', 'never'],
    'sonarjs/cognitive-complexity': 'off',
    'sort-imports': 'off', // use prettier plugin
    'sort-keys': [
      'warn',
      'asc',
      { allowLineSeparatedGroups: true, natural: true },
    ],
    'sort-keys/sort-keys-fix': 'warn',
    'sort-vars': 'off',
    'space-before-function-paren': ['warn', 'never'],
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': 'warn',
    'unicorn/catch-error-name': 'off',
    'unicorn/consistent-function-scoping': 'off',  // only prettier
    'unicorn/filename-case': [
      'warn',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/switch-case-braces': 'off',
    'wrap-regex': 'off',

    ...(framework.rules ?? []),
  },
}
