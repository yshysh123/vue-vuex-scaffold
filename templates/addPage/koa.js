const _ = require('lodash')
// eslint-disable-next-line import/no-unresolved
const { resultData } = require('../common/utils')

const lists = async ctx => {
  const ret = {}

  const datas = _.times(200, i => {
    const num = i + 1
    return {
      id: num,
      name: `小红${num}`,
      age: _.random(1, 99),
      sex: _.random(0, 1) ? '男' : '女',
    }
  })
  const { pageNo } = ctx.request.query
  const { pageSize } = ctx.request.query
  const start = (pageNo - 1) * pageSize
  const end = pageNo * pageSize
  const entities = datas.filter((obj, i) => i >= start && i < end)
  Object.assign(ret, resultData, {
    data: {
      entities,
      pageNo: Number(pageNo),
      pageSize: Number(pageSize),
      total: '200',
    },
  })
  ctx.response.body = ret
}

module.exports = {
  'GET /api': lists,
}
