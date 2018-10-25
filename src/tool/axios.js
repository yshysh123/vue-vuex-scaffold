import axios from 'axios'

axios.interceptors.request.use(
  config => {
    /* eslint-disable-next-line */
    config.url = `/api/${config.url}`
    return config
  },
  err =>
    // Message.error({ message: '请求超时!' })
    Promise.resolve(err),
)

axios.interceptors.response.use(
  res => {
    if (res.data.code === '200') {
      // Message.error({ message: data.data.msg })
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
    return Promise.resolve(err)
  },
)

export default axios
