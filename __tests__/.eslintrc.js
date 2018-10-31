const webpackResolve = require('../build/webpackResolve')

module.exports = {
  plugins: ['jest'],
  extends: ['plugin:jest/recommended'],
  env: {
    'jest/globals': true,
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
