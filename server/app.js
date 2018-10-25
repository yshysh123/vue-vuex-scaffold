const express = require('express')
// const _ = require('lodash')
// const fs = require('fs')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
// prettier-ignore
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

// 设置跨域访问
// prettier-ignore
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  if (req.method === 'OPTIONS') res.send(200);
  else next();
});

const me = require('./routes/me')

app.use('/', me)

const server = app.listen(8089, 'localhost', () => {
  const host = server.address().address
  const { port } = server.address()
  console.log('Example app listening at http://%s:%s', host, port)
})
