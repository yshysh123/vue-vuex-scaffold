const fs = require('fs')
const chalk = require('chalk')

process.on('message', answers => {
  fs.readdirSync('./src/views').forEach(route => {
    if (route.split('.')[0] === answers.pageName) {
      fs.unlinkSync(`./src/views/${answers.pageName}.vue`)
    }
  })
  fs.readdirSync('./src/store').forEach(route => {
    if (route === `${answers.pageName}Store.js`) {
      fs.unlinkSync(`./src/store/${answers.pageName}Store.js`)
    }
  })
  fs.readdirSync('./koa/controllers').forEach(route => {
    if (route === `${answers.pageName}Koa.js`) {
      fs.unlinkSync(`./koa/controllers/${answers.pageName}Koa.js`)
    }
  })
  fs.readdirSync('./server/routes').forEach(route => {
    if (route === `${answers.pageName}Express.js`) {
      fs.unlinkSync(`./server/routes/${answers.pageName}Express.js`)
    }
  })

  console.log(
    chalk.green(`\n √ 删除${answers.pageName}页面 completed!`),
    chalk.green(`\n √ 请重启webpack，刷新路由!`),
  )
  /**
   * 退出
   */
  process.exit()
})
