## vue 项目前端脚手架

### feature

* follow latest vue, vue-cli, vue-router vuex webpack version
* use eslint-config-airbnb
* use less for style
* use stylelint-config-recommended，stylelint-config-property-sort-order-smacss
* use single word for dir and file name
* build文件夹存放代码构建脚本。
* 最终发布文件放到dist文件夹。
* 增加国际化配置，使用i18n，配置具体使用方式见i18n以及home页面
* 使用axios，配置见/tool/axios.js


### 常用命令

- 本地模拟接口开发模式

```
yarn start
```

- 发布到生产环境。

```
yarn build:production
// 或yarn production 相同
```

- 单元测试文件夹`__test__`，运行单元测试用例
  参考[jest 文档](https://facebook.github.io/jest/)

```
yarn test
```

- 单元测试代码覆盖率
  调用 jest 生成 coverage 文件夹，查看里面的 index.html。

```
yarn coverage
```

- e2e 测试用例在`e2e/specs`文件夹，运行 e2e 测试
  参考[nightwatch 手册](http://nightwatchjs.org/api)

```
yarn e2e
```

nightwatch 启动脚本会尝试使用当前的开发环境，如果没有启动则自动打开一个新的 webpackDevServer 服务，使用 webpack.config 文件中的端口号，并运行 e2e 测试用例。
如果使用域名测试，需要配置本地 hosts 指向配置的域名后，将域名改为
使用了一些额外的[nightwatch-helpers](https://www.npmjs.com/package/nightwatch-helpers)(尤大神作品)增强工具。

- 使用 changelog 脚本自动生成 CHANGELOG.md

```
yarn changelog
```
