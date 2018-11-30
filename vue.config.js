const devServerConfig = require('./build/webpackResolve')
const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  css: {
    // 打开开发阶段有骨架屏样式，但是所有样式无法热加载；关闭开发阶段无法加载骨架屏样式
    extract: true,
  },
  transpileDependencies: [
    /\/node_modules\/vue-echarts\//,
    /\/node_modules\/resize-detector\//,
  ],
  configureWebpack: {
    // plugins: [new BundleAnalyzerPlugin()],
    plugins: [
      new SkeletonWebpackPlugin({
        webpackConfig: {
          entry: {
            app: path.join(__dirname, './src/skeleton.js'),
          },
        },
        minimize: true,
        quiet: true,
        router: {
          mode: 'history',
          routes: [
            {
              path: /^\/Home/,
              skeletonId: 'skeleton1',
            },
            {
              path: /^\/User/,
              skeletonId: 'skeleton2',
            },
            {
              path: /^[0-9a-zA-Z]*/,
              skeletonId: 'skeleton1',
            },
          ],
        },
      }),
    ],
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
