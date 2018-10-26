const fs = require('fs')
const upperFirst = require('lodash/upperFirst')

const routerTemplate = fs
  .readFileSync('./src/store.template.js')
  .toString('utf8')
const files = fs
  .readdirSync('./src/store')
  .map(fileName => fileName.replace(/\.js$/, ''))

const imports = files.map(
  store => `import ${upperFirst(store)} from 'store/${store}'`,
)

const importsPlaceholder = routerTemplate.replace(
  '/* imports-placeholder */',
  imports.join('\n'),
)
const upperFIrstimports = files.map(store => `${upperFirst(store)}`)
const storesPlaceholder = importsPlaceholder.replace(
  '/* stores-placeholder */',
  `${upperFIrstimports.join(',\n    ')},
    /* 本路由文件由src/store.template.js文件生成，不要手动更改 */`,
)
fs.writeFileSync('./src/store.js', storesPlaceholder)
