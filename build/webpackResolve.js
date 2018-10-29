const path = require('path')
const cp = require('child_process')

cp.fork('./build/generateRoute.js')
cp.fork('./build/generateStore.js')
cp.fork('./build/generateServer.js')
// 确保不同环境传入的路径是一样的
const resolvePath = relativePath =>
  path.resolve(`${__dirname}/..`, relativePath)
/**
 * 创建 import 或 require 的别名，来确保模块引入变得更简单。
 * 在使用中，不需要../../tool/xxx 直接使用tool/xxx
 */
const alias = {
  tool: resolvePath('./src/tool'),
  components: resolvePath('./src/components'),
  page: resolvePath('./src/page'),
  store: resolvePath('./src/store'),
  style: resolvePath('./src/style'),
  locale: resolvePath('./src/locale'),
  src: resolvePath('./src'),
  fixture: resolvePath('./__test__/fixture'),
}

module.exports = {
  alias,
  /**
   * 自动解析确定的扩展。
   * 能够使用户在引入模块时不带扩展
   */
  extensions: ['.js', '.jsx', '.css', '.less', '.vue'],
}
