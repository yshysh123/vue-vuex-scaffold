const webpackResolve = require('./build/webpackResolve')

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['html', 'vue'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        useTabs: false,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        parser: 'flow',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: webpackResolve,
        },
      },
    },
  },
}
