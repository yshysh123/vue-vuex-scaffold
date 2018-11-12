const { resultData } = require('../common/utils')

const getUserInfo = async ctx => {
  const ret = {}
  const data = {
    name: '于偲鸿',
    erp: 'yusihong1',
  }
  Object.assign(ret, resultData, {
    data,
  })
  ctx.response.body = ret
}

const testVideo = async ctx => {
  const ret = {}
  const data = null
  Object.assign(ret, resultData, {
    data,
  })
  ctx.response.body = ret
}

module.exports = {
  'GET /user/getUserInfo': getUserInfo,
  'GET /user/testVideo': testVideo,
}
