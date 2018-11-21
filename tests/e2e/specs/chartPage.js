// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'test chart page': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .maximizeWindow()
      .click('.el-submenu__title')
      .pause(1000)
      .useXpath()
      .click('//*[@id="app"]/div[1]/ul/li[2]/ul/li[2]')
      .pause(1000)
      .assert.urlContains('http://localhost:8081/Chart')
      .assert.attributeEquals('//*[@id="app"]/div[3]', 'class', 'Chart Router')
      .end()
  },
}
