const fs = require('fs')
const chalk = require('chalk')
const upperFirst = require('lodash/upperFirst')
const lowerFirst = require('lodash/lowerFirst')

const htmlTemplate = fs
  .readFileSync(`${__dirname}/newPage.vue`)
  .toString('utf8')

const searchReplace = templatePlaceholder => {
  let temp = templatePlaceholder
  temp = htmlTemplate.replace(
    /<!-- forSearch -->/g,
    `<el-card>
      <div slot="header"
        class="clearfix">
        <span style="line-height:18px;">{{$t('search')}}</span>
      </div>
      <QueryForm @onSubmit="onSubmit"
        :showForm="showForm" />
    </el-card>`,
  )
  temp = temp.replace(
    /\/\/importSearch/g,
    `import QueryForm from 'components/QueryForm'`,
  )
  temp = temp.replace(/\/\/searchComponents/g, `QueryForm`)
  temp = temp.replace(
    /\/\/searchData/g,
    `showForm: {
    name: true,
    sex: true,
    date: true,
    age: true,
  },`,
  )
  return temp
}

const tableReplace = (templatePlaceholder, answers) => {
  let temp = templatePlaceholder
  temp = htmlTemplate.replace(
    /<!-- forTable -->/g,
    `<el-card style="margin-top:5px;">
      <el-table border
        stripe
        v-loading="loading"
        :data="lists.dataSource"
        style="width:100%;">
        <el-table-column prop="name"
          :label="$t('user.name')">
        </el-table-column>
        <el-table-column prop="age"
          :label="$t('user.age')">
        </el-table-column>
        <el-table-column prop="sex"
          :label="$t('user.sex')">
        </el-table-column>
      </el-table>
      <Pagination store="UserStore/fetchLists"
        :storeLists="lists" />
    </el-card>`,
  )
  temp = temp.replace(
    /\/\/importTable/g,
    `import Pagination from 'components/Pagination'
    import { mapActions, mapState } from 'vuex'`,
  )
  temp = temp.replace(/\/\/tableComponents/g, `Pagination`)
  temp = temp.replace(
    /\/\/tableComputed/g,
    `/**
    * 映射vuex  将lists映射为this.$store.state.${lowerFirst(
      answers.pageName,
    )}Store.lists
    */
   ...mapState('${lowerFirst(answers.pageName)}Store', ['lists']),`,
  )
  temp = temp.replace(
    /\/\/tableMethods/g,
    `onSubmit(value) {
      this.fetchLists(value)
    },
    /**
     * 映射vuex  将this.fetchLists映射为this.$store.dispatch('${lowerFirst(
       answers.pageName,
     )}Store/fetchLists')
     */
    ...mapActions('${lowerFirst(answers.pageName)}Store', ['fetchLists']),`,
  )
  temp = temp.replace(/\/\/tableMounted/g, `this.onSubmit({})`)
  return temp
}

let templatePlaceholder = ''
process.on('message', answers => {
  if (answers.components.includes('table')) {
    /**
     * 根据answers生成store页面
     */
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
    /**
     * 根据answers生成koa页面
     */
    const koaTemplate = fs.readFileSync(`${__dirname}/koa.js`).toString('utf8')
    const koaTemplatePlaceholder = koaTemplate.replace(/api/g, `${answers.api}`)
    fs.writeFileSync(
      `./koa/controllers/${lowerFirst(answers.pageName)}Koa.js`,
      koaTemplatePlaceholder,
    )
    /**
     * 根据answers生成express页面
     */
    const expressTemplate = fs
      .readFileSync(`${__dirname}/express.js`)
      .toString('utf8')
    const expressTemplatePlaceholder = expressTemplate.replace(
      /api/g,
      `${answers.api}`,
    )
    fs.writeFileSync(
      `./server/routes/${lowerFirst(answers.pageName)}Express.js`,
      expressTemplatePlaceholder,
    )
    /**
     * 修改vue页面的table
     */
    templatePlaceholder = tableReplace(templatePlaceholder, answers)
    /**
     * 修改vue页面的search
     */
    if (answers.components.includes('serach')) {
      templatePlaceholder = searchReplace(templatePlaceholder)
    }
  } else if (answers.components.includes('serach')) {
    templatePlaceholder = searchReplace(templatePlaceholder)
  }
  /**
   * 修改名称
   */
  templatePlaceholder = templatePlaceholder.replace(
    /<!-- forName -->/g,
    `${answers.pageName}`,
  )
  /**
   * 重写页面名称
   */
  fs.writeFileSync(
    `./src/views/${upperFirst(answers.pageName)}.vue`,
    templatePlaceholder,
  )
  console.log(
    chalk.red(
      `\n √ 请将${upperFirst(
        answers.pageName,
      )}页面加入对应的koa和server的menu中!`,
    ),
    chalk.green(`\n √ 创建${upperFirst(answers.pageName)}页面 completed!`),
    chalk.green(`\n √ 请重启webpack，刷新路由!`),
  )
  /**
   * 退出
   */
  process.exit()
})
