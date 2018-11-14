const fs = require('fs')
const chalk = require('chalk')
const upperFirst = require('lodash/upperFirst')
const lowerFirst = require('lodash/lowerFirst')

const htmlTemplate = fs
  .readFileSync(`${__dirname}/newPage.vue`)
  .toString('utf8')

process.on('message', answers => {
  console.log(answers)
  if (answers.tableKeys) {
    const storeTemplate = fs
      .readFileSync(`${__dirname}/store.js`)
      .toString('utf8')
    const storeTemplatePlaceholder = storeTemplate.replace(
      /replaceApi/g,
      `${answers.api}`,
    )
    fs.writeFileSync(
      `./src/store/${lowerFirst(answers.pageName)}Store.js`,
      storeTemplatePlaceholder,
    )
  }
  const templatePlaceholder = htmlTemplate.replace(
    /<!-- forName -->/g,
    `${answers.pageName}`,
  )
  fs.writeFileSync(
    `./src/views/${upperFirst(answers.pageName)}.vue`,
    templatePlaceholder,
  )
  console.log(
    chalk.green(`\n √ 创建${upperFirst(answers.pageName)}页面 completed!`),
    chalk.green(`\n √ 请重启webpack，刷新路由!`),
  )
  process.exit()
})
