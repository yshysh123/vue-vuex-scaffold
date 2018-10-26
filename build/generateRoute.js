const fs = require('fs')
const lowerFirst = require('lodash/lowerFirst')

const routeTemplate = fs
  .readFileSync('./src/router.remplate.js')
  .toString('utf8')

const routes = fs
  .readdirSync('./src/views')
  .filter(file => {
    // Home在模板中已经定义为主路由
    if (file === 'Home.vue') {
      return false
    }
    return true
  })
  .map(
    route => `{
      path: '/${lowerFirst(route.split('.')[0])}',
      name: '${lowerFirst(route.split('.')[0])}',
      component: () =>
        import(/* webpackChunkName: "${lowerFirst(
          route.split('.')[0],
        )}" */ './views/${route.split('.')[0]}.vue'),
    }`,
  )

const templatePlaceholder = routeTemplate.replace(
  '/* template-placeholder */',
  `${routes.join(',\n  ')},\n
    /* 本路由文件由src/route.template.js文件生成，不要手动更改 */`,
)
fs.writeFileSync('./src/router.js', templatePlaceholder)
