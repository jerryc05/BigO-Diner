/* eslint-disable camelcase, unicorn/prefer-module */
const MAX_LEN = [
  'error', {
    code: 100,
    ignoreComments: true,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
  }
]
const INDENT = 2
const QUOTE = ['warn', 'single', { avoidEscape: true }]


// eslint-disable-next-line no-unused-vars
const vue = {
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-recommended',
  ],
  parser: 'vue-eslint-parser', // must use for vue SFC
  parserOptions_extraFileExtensions: ['.vue'],
  plugins: ['vue'],
  rules: {
    'vue/component-api-style': 'error',
    'vue/first-attribute-linebreak': [
      'error', {
        multiline: 'beside',
        singleline: 'beside'
      }
    ],
    'vue/html-button-has-type': 'error',
    'vue/html-closing-bracket-newline': [
      'error', {
        multiline: 'never',
        singleline: 'never'
      }
    ],
    'vue/html-indent': [
      'error', 2, {
        alignAttributesVertically: false,
        attribute: 1
      }
    ],
    'vue/html-quotes': QUOTE,
    'vue/max-len': MAX_LEN,
    'vue/next-tick-style': 'error',
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/prefer-prop-type-boolean-first': 'warn',
    'vue/v-on-function-call': ['error', 'never'],


    'vue/max-attributes-per-line': 'off',
  }

}

// eslint-disable-next-line no-unused-vars
const react = {
  extends: [
    'plugin:react/all',
    'plugin:react/jsx-runtime'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-indent': ['error', INDENT],
    'react/jsx-indent-props': ['error', INDENT],

    'react/jsx-sort-props': 'off'
  }
}


/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,

  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: [
    ...vue.extends,

    'eslint:all',

    'plugin:optimize-regex/all',
    'plugin:json/recommended',
    'plugin:markdown/recommended',
    'plugin:n/recommended',
    'plugin:no-unsanitized/DOM',
    'plugin:promise/recommended',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/all',
  ],
  parser: vue.parser,
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    extraFileExtensions: [...vue.parserOptions_extraFileExtensions],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    ...vue.plugins,

    'html',
    'json',
    'markdown',
    'n',
    'no-secrets',
    'promise',
    'sonarjs',
  ],
  settings: {
    'html/indent': INDENT,
  },

  rules: {
    ...vue.rules,

    // enabled
    'array-element-newline': ['error', 'consistent'],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'only-multiline'],
    curly: ['error', 'multi'],
    'dot-location': ['error', 'property'],
    'func-style': ['error', 'declaration'],
    'function-paren-newline': ['error', 'consistent'],
    indent: ['warn', INDENT, { SwitchCase: 1 }],
    'jsx-quotes': ['warn', `prefer-${QUOTE[1]}`],
    'linebreak-style': ['error', 'unix'],
    'max-len': MAX_LEN,
    'no-console': ['warn', { allow: ['error'] }],
    'no-extra-parens': [
      'error', 'all', {
        enforceForArrowConditionals: false,
        ignoreJSX: 'all',
        nestedBinaryExpressions: false,
      }
    ],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-secrets/no-secrets': 'error',
    'no-warning-comments': 'warn',
    'nonblock-statement-body-position': ['warn', 'below'],
    'quote-props': ['warn', 'as-needed'],
    quotes: QUOTE,
    semi: ['warn', 'never'],
    'sort-imports': [
      'warn', {
        allowSeparatedGroups: true,
        memberSyntaxSortOrder: ['all', 'multiple', 'single', 'none']
      }
    ],
    'sort-keys': ['error', 'asc', { allowLineSeparatedGroups: true, natural: true }],
    'space-before-function-paren': ['error', 'never'],

    // enabled plugin
    'unicorn/filename-case': [
      'warn', {
        cases: {
          camelCase: true,
          pascalCase: true,
        }
      }
    ],

    // disabled
    '@typescript-eslint/no-non-null-assertion': 'off',
    'capitalized-comments': 'off',
    'function-call-argument-newline': 'off',
    'id-length': 'off',
    'line-comment-position': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'multiline-comment-style': 'off',
    'multiline-ternary': 'off',
    'n/no-missing-import': 'off',  // Only vite
    'n/no-unpublished-import': 'off',  // Only vite
    'n/no-unsupported-features/es-syntax': 'off',
    'no-inline-comments': 'off',
    'no-magic-numbers': 'off',
    'no-ternary': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'one-var': 'off',
    'padded-blocks': 'off',
    'sonarjs/cognitive-complexity': 'off',
    'sort-vars': 'off',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/switch-case-braces': 'off',
    'wrap-regex': 'off',
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
      ],
      plugins: ['@typescript-eslint'],

      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.json'],
      }, rules: {
        'default-case': 'off',  // only typescript
        'no-shadow': 'off',  // only typescript

        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/no-redundant-type-constituents': 'error',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
      }
    },
  ],
}
