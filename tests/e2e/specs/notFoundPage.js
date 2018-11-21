// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'test notFound page': browser => {
    browser
      .url('http://localhost:8080/xxxx')
      .maximizeWindow()
      .useXpath()
      .assert.containsText('//*[@id="app"]/div[3]/div[2]/h1', '404')
      .assert.containsText(
        '//*[@id="app"]/div[3]/div[2]/h2',
        '抱歉，您访问的页面不存在',
      )
      .pause(1000)
      .assert.urlContains('http://localhost:8080/xxxx')
      .click('//*[@id="app"]/div[3]/div[2]/div/button')
      .pause(1000)
      .assert.urlContains('http://localhost:8080/Home')
      .end()
  },
}
