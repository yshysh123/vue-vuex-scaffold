const express = require('express')

const router = express.Router()
const { resultData } = require('../common/utils')

router.get('/user/getUserInfo', (req, res) => {
  res.type('json')
  const ret = {}
  const data = {
    name: 'yush',
    erp: 'yush1',
  }
  Object.assign(ret, resultData, {
    data,
  })
  res.send(ret)
})

router.get('/user/testVideo', (req, res) => {
  res.type('json')
  const ret = {}
  const data = null
  Object.assign(ret, resultData, {
    data,
  })
  res.send(ret)
})

module.exports = router
