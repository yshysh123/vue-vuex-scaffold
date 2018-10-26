import loader from 'src/polyfill'

loader.then(() => {
  import(/* webpackChunkName: "main" */ './index')
})
