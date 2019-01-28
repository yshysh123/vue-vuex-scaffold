import { getHeaderIndexByRouter } from 'tool/getHeaderIndexByRouter'
import 'nprogress/nprogress.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios'
import i18n from './i18n/i18n'
import './style/index.less'
import './registerServiceWorker'
import './plugins/element'
import { base as api } from './api'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
const vueInit = () => {
  new Vue({
    router,
    i18n,
    store,
    render: h => h(App),
  }).$mount('#app')
}

axios
  .get(api.menu)
  .then(data => {
    const index = getHeaderIndexByRouter(
      data,
      window.location.pathname.split('/')[1],
    )
    const siderMenu = data[index || 0].children
    store.commit('HeaderStore/setHeaderMenu', data)
    store.commit('SiderStore/setItems', siderMenu)
  })
  .then(() =>
    axios.get(api.me).then(data => {
      localStorage.setItem('ms_username', data.name)
      vueInit()
    }),
  )
  .catch(error => {
    console.log(error)
  })
