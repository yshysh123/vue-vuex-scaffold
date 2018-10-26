import Vue from 'vue'
import Vuex from 'vuex'
import HeaderStore from 'store/headerStore'
import SiderStore from 'store/siderStore'

const store = {
  modules: {
    HeaderStore,
    SiderStore,
    /* 本路由文件由src/store.template.js文件生成，不要手动更改 */
  },
  strict: process.env.NODE_ENV !== 'production',
}

Vue.use(Vuex)

export default new Vuex.Store(store)
