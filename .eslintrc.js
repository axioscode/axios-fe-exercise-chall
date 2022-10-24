module.exports = {
  extends: ['next', 'prettier', 'plugin:chai-friendly/recommended'],
  plugins: ['prettier', 'simple-import-sort', 'lodash', 'chai-friendly', 'typescript-plugin-css-modules'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    eqeqeq: 'error',
    'for-direction': 'error',
    'no-class-assign': 'error',
    'no-debugger': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-case': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-redeclare': 'off',
    'no-restricted-globals': 'off',
    'no-unreachable': 'error',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    'chai-friendly/no-unused-expressions': 'warn',
    'no-use-before-define': 'off',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'quote-props': ['error', 'as-needed'],
    'use-isnan': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/exports-last': 'error',
    'import/first': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': ['error', { allowArrowFunction: true }],
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': ['error'],
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-namespace': 'error',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'lodash/import-scope': 'error',
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        arrowParens: 'always',
      },
    ],
    'react/default-props-match-prop-types': 'error',
    'react/no-unknown-property': 'error',
    'simple-import-sort/exports': 'error',
    'spaced-comment': 'error',
    yoda: ['error', 'never'],
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'import/no-unresolved': 'error',
        'no-unused-vars': 'error',
        'no-restricted-globals': 'error',
        'import/no-unassigned-import': 'error',
      },
    },
    {
      files: ['**/*.stories.*'],
      rules: {
        'simple-import-sort/exports': 'off',
      },
    },
  ],
}