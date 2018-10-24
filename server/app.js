import path from 'path'
import URL from 'url'
import express from 'express'
import bodyParser from 'body-parser'
import webpackConfig from '../build/config'
import config from './config'
import readFixtures from './tool/readFixture'

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

app.all('*', (req, res, next) => {
  // 设置所有请求允许跨域
  let { port } = webpackConfig
  const reqUrl = req.headers.referer
  if (reqUrl) {
    port = URL.parse(reqUrl).port || 8080
  }
  res.header(
    'Access-Control-Allow-Origin',
    `${req.protocol}://${req.hostname}:${port}`,
  )
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Content-Type', 'application/json;charset=utf-8')

  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
    res.end()
    return
  }

  // 如果readFixtures处理失败，则使用其他路由
  try {
    const fixture = readFixtures(req.path)
    let result = fixture
    if (typeof fixture === 'function') {
      result = fixture(req, res)
    }
    res.json({
      code: '0',
      message: '操作成功',
      ...result,
    })
  } catch (e) {
    next()
  }
})

app.listen(config.port)
