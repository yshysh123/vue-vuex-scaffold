// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .maximizeWindow()
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.containsText('h1', '欢迎来到首页')
      .click('.el-submenu__title')
      .pause(1000)
      .useXpath()
      .click('//*[@id="app"]/div[1]/ul/li[2]/ul/li[1]')
      .pause(1000)
      .setValue(
        '//*[@id="app"]/div[3]/div[1]/div[2]/div/form/div[1]/div[1]/div/div/div[1]/input',
        'yush',
      )
      .pause(1000)
      .setValue(
        '//*[@id="app"]/div[3]/div[1]/div[2]/div/form/div[1]/div[2]/div/div/div[1]/input',
        '29',
      )
      .pause(1000)
      .setValue(
        '//*[@id="app"]/div[3]/div[1]/div[2]/div/form/div[1]/div[4]/div/div/div/div/div[1]/input',
        '2018-11-19',
      )
      .pause(1000)
      .click('//*[@id="app"]/div[3]/div[1]/div[1]') // 點擊登入按鈕
      .click(
        '//*[@id="app"]/div[3]/div[1]/div[2]/div/form/div[2]/div/div/button[1]',
      ) // 點擊登入按鈕
      .pause(1000) // 等待 1 秒
      .assert.urlContains(
        'http://localhost:8081/User?pageNo=1&pageSize=10&name=yush&age=29&date=2018-11-19&x=',
      ) // 確定網址是否包含 http://www.ruten.com.tw/
      .end()
  },
}
