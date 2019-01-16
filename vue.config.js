const devServerConfig = require('./build/webpackResolve')
const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 是否使用gzip
const productionGzip = true
// 需要gzip压缩的文件后缀
const productionGzipExtensions = ['js', 'css']
module.exports = {
  css: {
    // 打开开发阶段有骨架屏样式，但是所有样式无法热加载；关闭开发阶段无法加载骨架屏样式
    extract: true,
  },
  transpileDependencies: [
    /\/node_modules\/vue-echarts\//,
    /\/node_modules\/resize-detector\//,
  ],
  publicPath: process.env.NODE_ENV === 'production' ? './' : '',
  productionSourceMap: process.env.NODE_ENV !== 'production',
  configureWebpack: () => {
    const myConfig = {}
    myConfig.plugins = []
    if (process.env.NODE_ENV === 'production') {
      // myConfig.plugins.push(new BundleAnalyzerPlugin())
      if (productionGzip) {
        myConfig.plugins.push(
          new CompressionWebpackPlugin({
            test: new RegExp(`\\.(${productionGzipExtensions.join('|')})$`),
            threshold: 8192,
            minRatio: 0.8,
          }),
        )
      }
    }
    myConfig.plugins.push(
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
    )
    if (process.env.NODE_ENV === 'development') {
      myConfig.devServer = {
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
      }
    }
    myConfig.resolve = {
      ...devServerConfig,
    }
    return myConfig
  },
}
