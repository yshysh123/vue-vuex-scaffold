const express = require('express')
const _ = require('lodash')

const router = express.Router()
const { resultData } = require('../common/utils')

router.get('/user/lists', (req, res) => {
  res.type('json')

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
  const { pageNo } = req.query
  const { pageSize } = req.query
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
  res.send(ret)
})
module.exports = router
