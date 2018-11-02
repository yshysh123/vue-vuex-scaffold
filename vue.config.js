const devServerConfig = require('./build/webpackResolve')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  configureWebpack: {
    // plugins: [new BundleAnalyzerPlugin()],
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
      before() {},
    },
    resolve: {
      ...devServerConfig,
    },
  },
}
