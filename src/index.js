import { getHeaderIndexByRouter } from 'tool/getHeaderIndexByRouter'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './tool/axios'
import './style/index.less'
import './registerServiceWorker'
import './plugins/element'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
const vueInit = () => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
}

axios
  .get(`menu/getMenuData`)
  .then(data => {
    const index = getHeaderIndexByRouter(
      data,
      window.location.pathname.split('/')[1],
    )
    const siderMenu = data[index || 0].children
    store.commit('setHeaderMenu', data)
    store.commit('setItems', siderMenu)
  })
  .then(() =>
    axios.get(`user/getUserInfo`).then(data => {
      localStorage.setItem('ms_username', data.name)
      vueInit()
    }),
  )
  .catch(error => {
    console.log(error)
  })
