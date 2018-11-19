## vue 项目前端脚手架

### todo

- templates模板 功能完善
- queryForm 增加url带参数以及参数回填 - 100% 
- markdownLint 
- e2e 

### feature

- follow latest vue, vue-cli, vue-router vuex webpack version
- use eslint-config-airbnb
- use less for style
- use stylelint-config-recommended，stylelint-config-property-sort-order-smacss
- use single word for dir and file name
- build 文件夹存放代码构建脚本。
- 最终发布文件放到 dist 文件夹。
- 增加国际化配置，使用 i18n，配置具体使用方式见 i18n 以及 home 页面
- 使用 axios，配置见/tool/axios.js
- webpack 配置文件在 build/config.js
- 所有接口地址都在 src/api/index.js 中配置，避免接口到处硬编码。
- add commitizen and commitlint for git commit format
- UI 库使用 element 按需加载 对应使用组件在 src/plugins 里
- 使用 webpack-bundle-analyzer，查看打包文件体积和内容，不用时候注释掉
- 增加换肤功能，如果需要修改默认颜色，见 components/ThemePicker.vue。颜色渐变数组放入rootStore，使用方法见Header、sider
- 增加全局加载条。如需修改，在 axios 的配置文件里修改。
- 项目启用 node 子进程，router、store、server 接口不需要手动配置，会根据对应文件夹下文件自动加入配置（需重启 webpack）
  - router 会根据 src/views/的文件自动生成 router.js
  - store 会根据 src/store 的文件自动生成 store.js
  - server/app.js 会根据 server/routes 自动生成更新 app.js
- 单元测试不断更新 ing 目前单元测试进度 50% 可使用 yarn run coverage 进行查看。
- 增加对echarts的简单封装
- 本地server使用express和koa2 2种方式，具体内容见文件夹server以及koa。

### VS code 插件配置

- 安装 stylelint 以及 ESLint 以及 Prettier 插件，然后按照.vscode 里面的配置，配置完成。编辑器会自动修改 eslint 错误。
- 安装 vetur 插件配置 For Vue

### 脚本命令

- 新增页面(会根据选择 创建是否带表格、search的页面。目前search和表格字段不支持定制，后期完善定制字段)
```
yarn run addPage
```

- 删除页面
```
yarn run deletePage
```


### 常用命令

- 本地模拟接口开发模式:express

```
yarn start
```

- 本地模拟接口开发模式：koa2
```
yarn run start:koa
```

- 打包发布

```
yarn run build
```

- 单元测试文件夹`__tests__`，运行单元测试用例
  参考[jest 文档](https://facebook.github.io/jest/)

```
yarn run test
```

- 单元测试代码覆盖率
  调用 jest 生成 coverage 文件夹，查看里面的 index.html。

```
yarn run coverage
```

- e2e 测试用例在`e2e/specs`文件夹，运行 e2e 测试
  参考[nightwatch 手册](http://nightwatchjs.org/api)

```
yarn run e2e
```

nightwatch 启动脚本会尝试使用当前的开发环境，如果没有启动则自动打开一个新的 webpackDevServer 服务，使用 webpack.config 文件中的端口号，并运行 e2e 测试用例。
如果使用域名测试，需要配置本地 hosts 指向配置的域名后，将域名改为
使用了一些额外的[nightwatch-helpers](https://www.npmjs.com/package/nightwatch-helpers)(尤大神作品)增强工具。

- 使用 changelog 脚本自动生成 CHANGELOG.md

```
yarn run changelog
```
