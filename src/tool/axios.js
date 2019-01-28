import axios from 'axios'
import appConfig from 'src/config'
import isObject from 'lodash/isObject'
import router from '../router'
import { emitter as soundEmitter } from '../components/SoundEffect.vue'

const service = axios.create({
  // 设置超时时间
  timeout: 60000,
  baseURL: appConfig.baseURL,
})

/**
 * 请求前拦截
 * 用于处理需要在请求前的操作
 */
service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  error => Promise.reject(error),
)

/**
 * 对表格数据做一些处理
 */
const processList = response => {
  const { data } = response.data
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
  /**
   * 如果返回的data是null 说明是交互类操作，播放成功声音
   */
  if (!data) {
    soundEmitter.emit('success')
  }
  return data
}

/**
 * 请求响应拦截
 * 用于处理需要在请求返回后的操作
 */
service.interceptors.response.use(
  response => {
    const responseCode = response.status
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (responseCode === 200) {
      /**
       * 在这里可以判断数据的code码，根据具体业务逻辑判断
       * soundEmitter.emit('failure')是失败的操作，也要加到对应的code码中
       */
      return Promise.resolve(processList(response))
    }
    soundEmitter.emit('failure')
    return Promise.reject(response)
  },
  error => {
    /**
     * 断网处理
     */
    if (!error.response) {
      // 请求超时状态
      if (error.message.includes('timeout')) {
        console.log('超时了')
        // Message.error('请求超时，请检查网络是否连接正常')
      } else {
        // 可以展示断网组件
        console.log('断网了')
        // Message.error('请求失败，请检查网络是否已连接')
      }
    }
    // 服务器返回不是 2 开头的情况，会进入这个回调
    // 可以根据后端返回的状态码进行不同的操作
    const responseCode = error.response.status
    switch (responseCode) {
      // 401：未登录
      case 401:
        // 跳转登录页
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath,
          },
        })
        break
      // 403: token过期
      case 403:
        // 弹出错误信息
        // Message({
        //   type: 'error',
        //   message: '登录信息过期，请重新登录',
        // })
        // 清除token
        localStorage.removeItem('token')
        // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
        setTimeout(() => {
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath,
            },
          })
        }, 1000)
        break
      // 404请求不存在
      case 404:
        // Message({
        //   message: '网络请求不存在',
        //   type: 'error',
        // })
        break
      // 其他错误，直接抛出错误提示
      default:
      // Message({
      //   message: error.response.data.message,
      //   type: 'error',
      // })
    }
    return Promise.reject(error)
  },
)

export default service
