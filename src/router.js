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
      path: '/Chart',
      name: 'Chart',
      component: () =>
        import(/* webpackChunkName: "chart" */ './views/Chart.vue'),
    },
   {
      path: '/Home',
      name: 'Home',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
   {
      path: '/User',
      name: 'User',
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
    /**
     * 异步滚动
     */
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  },
}

export default new Router(router)
