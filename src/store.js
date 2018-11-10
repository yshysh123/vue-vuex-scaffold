import Vue from 'vue'
import Vuex from 'vuex'
import HeaderStore from 'store/headerStore'
import RootStore from 'store/rootStore'
import SiderStore from 'store/siderStore'
import UserStore from 'store/userStore'

const store = {
  modules: {
    HeaderStore,
    RootStore,
    SiderStore,
    UserStore,
    /* 本路由文件由src/store.template.js文件生成，不要手动更改 */
  },
  strict: process.env.NODE_ENV !== 'production',
}

Vue.use(Vuex)

export default new Vuex.Store(store)
