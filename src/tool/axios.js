import { Fxios } from 'fxios'
import appConfig from 'src/config'
import isObject from 'lodash/isObject'
import { emitter as soundEmitter } from '../components/SoundEffect.vue'

export const config = {
  credentials: 'include',
  redirect: 'manual',
  mode: 'cors',
  cache: 'reload',
  base: appConfig.baseURL,
}

const axios = new Fxios(config)

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

axios.interceptor.response.push((res, req) => {
  if (!res.ok) {
    const error = new Error(res.statusText)
    error.response = res
    throw error
  }
  return res.json().then(data => {
    res.message = data.message
    if (req.method.toUpperCase() !== 'GET') {
      axios.emit('success', res, req)
    }
    if (!data.data) {
      soundEmitter.emit('success')
    }
    return processList(data.data)
  })
})

const fxiosCatch = error => {
  soundEmitter.emit('failure')
  // 若emitter没有监听函数直接emit一个error，会抛出错误不执行下面的throw error
  if (axios.listeners('error').length > 0) {
    axios.emit('error', error)
  }
  throw error
}
axios.interceptor.catch.push(fxiosCatch)

export default axios
