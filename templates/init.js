const program = require('commander')
// const co = require('co')

const appInfo = require('../package.json')

program.allowUnknownOption()
program.version(appInfo.version)

program
  .command('add')
  .description('Add a new template')
  .alias('a')
  .action(() => {
    // eslint-disable-next-line global-require
    require('./addPage.js')()
  })

program
  .command('del')
  .description('Delete a new template')
  .alias('a')
  .action(() => {
    // eslint-disable-next-line global-require
    require('./rmPage.js')()
  })

program.command('*').action(env => {
  console.error('不存在命令 "%s"', env)
})

program.on('--help', () => {
  console.log('  Examples:')
  console.log('')
  console.log('    $ createDOC --help')
  console.log('    $ createDOC -h')
  console.log('    $ createDOC show')
  console.log('')
})

program.parse(process.argv)
