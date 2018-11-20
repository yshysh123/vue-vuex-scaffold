const HtmlReporter = require('nightwatch-html-reporter')

const reporter = new HtmlReporter({
  openBrowser: true,
  reportsDirectory: `${__dirname}/reports`,
  uniqueFilename: true, // 測試報告是否要加上 timestamp
  separateReportPerSuite: true, // 測試報告是否要加上 test suite 的名稱
  themeName: 'cover',
})

module.exports = {
  reporter: reporter.fn,
  before(done) {
    process.argv.forEach(string => {
      const key = string.replace(/^--(.*)=.*/, '$1')
      const value = string.replace(/^--.*=(.*)/, '$1')
      // eslint-disable-next-line default-case
      switch (key) {
        case 'rtEnv':
        case 'userName':
        case 'customTag':
          this.rtContext[key] = value
          break
      }
    })

    done()
  },
  after(done) {
    done()
  },
  beforeEach(browser, done) {
    done()
  },
  afterEach(browser, done) {
    done()
  },
}
