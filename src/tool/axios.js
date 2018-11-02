import axios from 'axios'
import Vue from 'vue'
import isObject from 'lodash/isObject'
import timeFormat from 'tool/timeFormat'
import { emitter as soundEmitter } from '../components/SoundEffect.vue'

axios.interceptors.request.use(
  config => {
    config.url = `/api/${config.url}`
    /**
     * 判断是否有Date格式的入参，统一转成字符串格式
     */
    if (config.params) {
      Object.keys(config.params).forEach(item => {
        if (config.params[item] instanceof Date) {
          config.params[item] = timeFormat(config.params[item])
        }
      })
    }
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

const processList = data => {
  if (isObject(data) && 'entities' in data) {
    const d = data
    return {
      originalData: d,
      dataSource: d.entities,
      total: Number(d.total) || 0,
      pageNo: Number(d.pageNo) || 1,
      pageSize: Number(d.pageSize) || 20,
    }
  }
  return data
}

axios.interceptors.response.use(
  res => {
    if (res.data.code === '200') {
      /**
       * 如果没有返回数据，说明是用户操作，弹出提示框，并且增加声音
       */
      if (!res.data.data) {
        soundEmitter.emit('success')
        Vue.prototype.$notify.success({
          title: '操作成功',
          message: res.data.message,
          duration: 3000,
        })
      }
      return processList(res.data.data)
    }
    Vue.prototype.$notify.error({
      title: '接口错误',
      message: res.data.message,
      duration: 3000,
    })
    soundEmitter.emit('failure')
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
      title: '服务器错误',
      message: err.title || err.toString(),
      duration: 3000,
    })
    soundEmitter.emit('failure')
  },
)

export default axios
