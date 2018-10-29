import axios from 'axios'
import Vue from 'vue'
import { emitter as soundEmitter } from '../components/SoundEffect.vue'

axios.interceptors.request.use(
  config => {
    /* eslint-disable-next-line */
    config.url = `/api/${config.url}`
    return config
  },
  err => {
    Vue.prototype.$notify.error({
      title: '内部错误',
      message: err,
      duration: 3000,
    })
    soundEmitter.emit('failure')
  },
)

axios.interceptors.response.use(
  res => {
    if (res.data.code === '200') {
      soundEmitter.emit('success')
      if (soundEmitter.emit('success')) {
        Vue.prototype.$notify.success({
          title: '操作成功',
          message: res.data.message,
          duration: 3000,
        })
      }
      return res.data.data
    }
    return null
  },
  err => {
    if (err.response.status === 504 || err.response.status === 404) {
      // Message.error({ message: '服务器被吃了⊙﹏⊙∥' })
    } else if (err.response.status === 403) {
      // Message.error({ message: '权限不足,请联系管理员!' })
    } else {
      // Message.error({ message: '未知错误!' })
    }
    Vue.prototype.$notify.error({
      title: '接口错误',
      message: err.title || err.toString(),
      duration: 3000,
    })
    soundEmitter.emit('failure')
  },
)

export default axios
