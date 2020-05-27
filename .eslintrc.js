'use strict';

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    radix: ['error', 'always'],
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    strict: ['error', 'global'],
    'eol-last': ['error', 'always'],
    indent: 'off',
    'linebreak-style': ['error', 'unix'],
    'no-else-return': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
    ],
    'prefer-const': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
