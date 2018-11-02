import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

const cn = {
  base: {
    title: '项目主体',
  },
  noMatch: {
    message: '抱歉，您访问的页面不存在',
    backToHome: '回到首页',
  },
  message: {
    hello: '欢迎来到首页',
    msg: '提示',
  },
  login: '登录',
  form: {
    submit: '提交',
    reset: '重置',
  },
  search: '查询',
  user: {
    name: '姓名',
    namePlaceHolder: '请输入姓名',
    rulesName: '请输入姓名',
    rulesNameLength: '请输入3-5个字符',
    age: '年龄',
    rulesAge: '请输入年龄',
    agePlaceHolder: '请输入年龄',
    sex: '性别',
    rulesSex: '请输入性别',
    sexMan: '男',
    sexWoman: '女',
    sexPlaceHolder: '请选择性别',
    date: '日期',
    rulesDate: '请输入日期',
    datePlaceHolder: '请选择日期',
  },
  ...zhLocale,
}

export default cn
