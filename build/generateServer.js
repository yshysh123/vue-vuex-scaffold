const fs = require('fs')

const serverTemplate = fs
  .readFileSync('./server/server.template.js')
  .toString('utf8')
const files = fs
  .readdirSync('./server/routes')
  .map(fileName => fileName.replace(/\.js$/, ''))

const servers = files.map(
  server =>
    `const ${server} = require('./routes/${server}')\n\napp.use('/', ${server})`,
)

const serversPlaceholder = serverTemplate.replace(
  '/* server-placeholder */',
  `${servers.join(
    '\n\n',
  )}\n\n/* 本路由文件由server/server.template.js文件生成，不要手动更改 */`,
)
fs.writeFileSync('./server/app.js', serversPlaceholder)
