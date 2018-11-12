const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const controller = require('./controller')

const app = new Koa()

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
  ctx.set(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  ctx.set('Access-Control-Allow-Credentials', true)
  ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  ctx.set('X-Powered-By', ' 3.2.1')
  ctx.set('Content-Type', 'application/json;charset=utf-8')
  if (ctx.request.method === 'OPTIONS') ctx.response.send(200)
  else await next()
})

app.use(bodyParser())
app.use(cors())
app.use(controller())

const server = app.listen(8089, 'localhost', () => {
  const host = server.address().address
  const { port } = server.address()
  console.log('Example app listening at http://%s:%s', host, port)
})
