const fs = require('fs')

function addMapping(router, mapping) {
  for (const url in mapping) {
    if (url.startsWith('GET ')) {
      const path = url.substring(4)
      router.get(path, mapping[url])
      console.log(`register URL mapping: GET ${path}`)
    } else if (url.startsWith('POST ')) {
      const path = url.substring(5)
      router.post(path, mapping[url])
      console.log(`register URL mapping: POST ${path}`)
    } else if (url.startsWith('PUT ')) {
      const path = url.substring(4)
      router.put(path, mapping[url])
      console.log(`register URL mapping: PUT ${path}`)
    } else if (url.startsWith('DELETE ')) {
      const path = url.substring(7)
      router.del(path, mapping[url])
      console.log(`register URL mapping: DELETE ${path}`)
    } else {
      console.log(`invalid URL: ${url}`)
    }
  }
}

function addControllers(router, dir) {
  fs.readdirSync(`${__dirname}/${dir}`)
    .filter(f => f.endsWith('.js'))
    .forEach(f => {
      console.log(`process controller: ${f}...`)
      const mapping = require(`${__dirname}/${dir}/${f}`)
      addMapping(router, mapping)
    })
}

module.exports = function(dir) {
  const controllersDir = dir || 'controllers'
  const router = require('koa-router')()
  addControllers(router, controllersDir)
  return router.routes()
}
