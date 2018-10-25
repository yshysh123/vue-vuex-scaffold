## vue 项目前端脚手架

### feature

- follow latest vue, vue-router, vuex webpack version
- use eslint-vue-airbnb
- use less for style
- use stylelint-config-recommended，stylelint-config-property-sort-order-smacss
- use single word for dir and file name
- 最终发布文件放到 dist 文件夹。
- 增加 vscode 配置以及 prettier 配置、stylelint 配置、eslint 配置，需要安装 vscode 对应的插件 stylelint eslint prettier 以及 editorconfig。
- 本项目使用严格 eslint airbnb 验证规则，如果验证不过，无法提交代码。
- 使用 server 文件夹存放作为后端服务提供开发伪数据。
- 使用 axios 获取接口数据。
- 当前项目与后端的约定配置，比如返回状态码为 200 则为成功，返回分页数据格式等，需要在 src/tool/fxios 中配置。
- 开发模式 webpack 使用 8080 端口，模拟后端数据的 mockServer 使用 8089 端口。
  webpack 配置文件在使用 vue-cli3.0 默认配置，修改配置在 vue.config.js 里面
- server 配置文件在 server/config.js
- 在本地模拟接口数据开发环境中，直接使用请求路径的 url 在 server/fixture 文件夹中写入对应的模拟数据即可生成响应。
- 所有接口地址都在 src/api/index.js 中配置，避免接口到处硬编码。
  例如接口配置
  src/api/index.js

```
{
  me: 'user/me',
  ...
}
```

在本地开发模式中，在 mockServer/fixture/me.json 的结果将自动返回到该接口的请求结果中。
也可根据逻辑写成 mockerServer/fixture/me.js，里面的内容可根据请求动态返回。

- 项目所用配置文件在 src/config.js，详见代码注释。

- src/page 文件夹内的每个组件都会自动映射为路由。例如 src/page/User 组件会映射为/user 路由。
  如需要配置特殊路由，在 src/route.template.jsx 中单独配置。
  src/route.js 每次启动项目会从 src/route.template.jsx 文件自动生成覆盖，所以不要编辑它。

- src/store 文件夹中的文件会自动挂载为组件的 mobx store。例如 src/store/user.js，在组件内即 this.props.store.user。

- 项目使用 src/theme.js 中的样式注入全局 less 环境，因此该文件中定义的 less 变量可在项目的所有.less 或.m.less 文件中使用，并覆盖 antd 的同名变量。缺点在于每次修改该文件后需要重启项目才能生效。参考[antd 定制样式](https://ant.design/docs/react/customize-theme-cn)

- 参考[mobx 最佳实践](https://medium.com/dailyjs/mobx-react-best-practices-17e01cec4140)

- add commitizen and commitlint for git commit format

- add serviceWorker support, copy code from create-react-app example.
  in development env, you can generate self signed certificates
  https://stackoverflow.com/questions/9519707/can-nodejs-generate-ssl-certificates

  ```
  openssl genrsa -out server-key.pem 1024
  openssl req -new -key server-key.pem -out server-csr.pem
  openssl x509 -req -in server-csr.pem -signkey server-key.pem -out server-cert.pem
  ```

  and add ssl support to your local nginx conf file, see [nginx conf example](https://github.com/rmbf2e/react-mobx-scaffold/blob/master/nginx/default.conf)

  then start chrome in command line with ignore ignore certificates error param.

  ```
  google-chrome --unsafely-treat-insecure-origin-as-secure=https://dist.jd.m --ignore-certificate-errors
  ```

  see [https://localhost] to test your serviceWorker.

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
