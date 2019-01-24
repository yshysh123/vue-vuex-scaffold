const devServerConfig = require('./build/webpackResolve')
const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 是否使用gzip
const productionGzip = true
// 需要gzip压缩的文件后缀
const productionGzipExtensions = ['js', 'css']
// 区分生产环境
const isProd = process.env.NODE_ENV === 'production'
// 区分版本号
const lastVersion = new Date().getTime()
// posix兼容方式处理路径
const assetsDir = 'static'
const posixJoin = _path => path.posix.join(assetsDir, _path)

// cdn开关
const OPENCDN = true
const webpackHtmlOptions = {
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
  },
  cdn: {
    // 生产环境
    build: {
      js: [
        'https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js',
        'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
        'https://unpkg.com/vuex@3.0.1/dist/vuex.min.js',
      ],
    },
  },
}

module.exports = {
  css: {
    // 打开开发阶段有骨架屏样式，但是所有样式无法热加载；关闭开发阶段无法加载骨架屏样式
    extract: {
      filename: posixJoin(`css/${lastVersion}-[name].[contenthash:8].css`),
      chunkFilename: posixJoin(`css/${lastVersion}-[name].[contenthash:8].css`),
    },
  },
  publicPath: isProd ? './' : '',
  productionSourceMap: !isProd,
  configureWebpack: config => {
    config.resolve = {
      ...devServerConfig,
    }
    if (isProd) {
      // config.plugins.push(new BundleAnalyzerPlugin())
      if (productionGzip) {
        config.plugins.push(
          new CompressionWebpackPlugin({
            test: new RegExp(`\\.(${productionGzipExtensions.join('|')})$`),
            threshold: 8192,
            minRatio: 0.8,
          }),
        )
      }
      // 开启cdn状态：externals不进入webpack打包
      if (OPENCDN) {
        config.externals = webpackHtmlOptions.externals
      }
    }
    config.plugins.push(
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
    if (!isProd) {
      config.devServer = {
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
  },
  chainWebpack: config => {
    config.performance.set('hints', false)
    // 将版本号写入环境变量
    config.plugin('define').tap(args => {
      args[0].app_build_version = lastVersion
      return args
    })
    config.when(isProd, configs =>
      // 生产环境js增加版本号
      configs.output
        .set('filename', posixJoin(`js/${lastVersion}-[name].[chunkhash].js`))
        .set(
          'chunkFilename',
          posixJoin(`js/${lastVersion}-[id].[chunkhash].js`),
        ),
    )
    /**
     * 添加CDN参数到htmlWebpackPlugin配置中， 修改 public/index.html
     */
    config.plugin('html').tap(args => {
      // 生产环境将cdn写入webpackHtmlOptions，在public/index.html应用
      if (isProd && OPENCDN) {
        args[0].cdn = webpackHtmlOptions.cdn.build
      }
      // dns预加载
      args[0].dnsPrefetch = webpackHtmlOptions.dnsPrefetch
      return args
    })
  },
}
