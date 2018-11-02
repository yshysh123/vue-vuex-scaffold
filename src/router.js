import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NoMatch from './components/NoMatch.vue'

Vue.use(Router)

const router = {
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/home',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () =>
        import(/* webpackChunkName: "user" */ './views/User.vue'),
    },

    /* 本路由文件由src/route.template.js文件生成，不要手动更改 */
    {
      name: 'NoMatch',
      path: '*',
      component: NoMatch,
      meta: {
        breadName: '404找不到页面',
        title: '404找不到页面',
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
}

export default new Router(router)
