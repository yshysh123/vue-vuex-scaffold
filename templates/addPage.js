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
        if (answers.components.includes('serach')) {
          inquirer
            .prompt([
              {
                type: 'checkbox',
                name: 'serachKeys',
                message: 'Please select default serachKeys:',
                choices: [
                  'name',
                  'sex',
                  'date',
                  'age',
                  '只生成组件,内容自己添加',
                ],
              },
            ])
            .then(serachKeys => {
              co(() => {
                const childSend = Object.assign(answers, serachKeys)
                const child = cp.fork(`${__dirname}/addPage/index.js`)
                child.send(childSend)
              })
            })
        } else if (answers.components.includes('table')) {
          inquirer
            .prompt([
              {
                type: 'checkbox',
                name: 'tableKeys',
                message: 'Please select default tableKeys:',
                choices: ['name', 'age', 'sex', '只生成组件,内容自己添加'],
              },
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
        } else if (
          answers.components.includes('serach') &&
          answers.components.includes('table')
        ) {
          inquirer
            .prompt([
              {
                type: 'checkbox',
                name: 'serachKeys',
                message: 'Please select default serachKeys:',
                choices: [
                  'name',
                  'sex',
                  'date',
                  'age',
                  '只生成组件,内容自己添加',
                ],
              },
              {
                type: 'checkbox',
                name: 'tableKeys',
                message: 'Please select default tableKeys:',
                choices: ['name', 'age', 'sex', '只生成组件,内容自己添加'],
              },
              {
                type: 'checkbox',
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
        } else {
          const child = cp.fork(`${__dirname}/addPage/index.js`)
          child.send(answers)
        }
      })
    })
}
