const co = require('co')
// const prompt = require('co-prompt')
const cp = require('child_process')
const inquirer = require('inquirer')

module.exports = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'pageName',
        message: 'Please input your delete pageName:',
      },
    ])
    .then(answers => {
      // eslint-disable-next-line func-names
      co(() => {
        // 处理用户输入
        const child = cp.fork(`${__dirname}/rmPage/index.js`)
        child.send(answers)
      })
    })
}
