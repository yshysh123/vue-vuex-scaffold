const devServerConfig = require('./build/webpackResolve')

module.exports = {
  configureWebpack: {
    devServer: {
      historyApiFallback: true,
      disableHostCheck: true,
      host: '0.0.0.0',
      inline: true,
      port: 8080,
      hot: true,
      contentBase: './public',
      proxy: {
        '/api/': {
          target: 'http://localhost:8089',
          pathRewrite: {
            '^/api/': '',
          },
          secure: false,
        },
      },
    },
    resolve: {
      ...devServerConfig,
    },
  },
}
