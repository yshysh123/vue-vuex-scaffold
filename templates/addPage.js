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
        message: 'Please input your pageName:',
      },
      {
        type: 'checkbox',
        name: 'components',
        message: 'Please select default components:',
        choices: ['serach', 'table', 'other'],
      },
    ])
    .then(answers => {
      // eslint-disable-next-line func-names
      co(() => {
        // 处理用户输入
        if (
          answers.components.includes('serach') &&
          answers.components.includes('table')
        ) {
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'api',
                message: 'Please input default api:',
              },
            ])
            .then(allKeys => {
              co(() => {
                const childSend = Object.assign(answers, allKeys)
                const child = cp.fork(`${__dirname}/addPage/index.js`)
                child.send(childSend)
              })
            })
        } else if (answers.components.includes('serach')) {
          const childSend = Object.assign({}, answers)
          const child = cp.fork(`${__dirname}/addPage/index.js`)
          child.send(childSend)
        } else if (answers.components.includes('table')) {
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'api',
                message: 'Please input default api:',
              },
            ])
            .then(tableKeys => {
              co(() => {
                const childSend = Object.assign(answers, tableKeys)
                const child = cp.fork(`${__dirname}/addPage/index.js`)
                child.send(childSend)
              })
            })
        } else {
          const child = cp.fork(`${__dirname}/addPage/index.js`)
          child.send(answers)
        }
      })
    })
}
