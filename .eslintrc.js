module.exports = {
  root: true,
  plugins: [
    'eslint-comments',
    'import',
    'node',
    'prettier',
    'promise',
    'unicorn'
  ],
  extends: [
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:node/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/unicorn'
  ],
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    sourceType: 'script'
  },
  rules: {
    strict: ['error', 'global'],
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    // https://github.com/basarat/typescript-book/blob/master/docs/tips/defaultIsBad.md
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off'
  }
}
