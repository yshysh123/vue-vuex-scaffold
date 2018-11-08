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
    /* template-placeholder */
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
