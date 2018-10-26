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
    /**
     * 由于Vuex存储的状态由Vue激活，当我们改变状态时，观察状态的Vue组件将自动更新。
     * 这也意味着Vuex突变在使用普通Vue时会受到相同的警告错误
     * https://vuex.vuejs.org/en/mutations.html
     * 它确实意味着您必须改变参数以获得对实际状态的任何更改。唯一的解决方案是关闭该规则。
     * 我们的解决方案，是将state和一些有可能影响到的值，加入ignorePropertyModificationsFor数组中，这样就不会有提示警告
     */
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          'state', // for Vuex scopes
        ],
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
