import Vue from 'vue'
import Vuex from 'vuex'
import HeaderStore from 'store/headerStore'
import SiderStore from 'store/siderStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    HeaderStore,
    SiderStore,
  },
  strict: process.env.NODE_ENV !== 'production',
})
