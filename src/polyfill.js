// polyfill when needed
import 'es6-promise/auto'
import loadPolyFill from 'load-polyfill'

const getModuleDefault = mod => ('default' in mod ? mod.default : mod)

function polyfillFetch() {
  if (global.fetch) {
    const f = global.fetch().catch(() => {})
    // eslint-disable-next-line
    if (f.__proto__ && !f.__proto__.finally) {
      // eslint-disable-next-line
      f.__proto__.finally = function polyfillFinally(cb) {
        return this.then(cb).catch(cb)
      }
    }
  }
}
polyfillFetch()

export default loadPolyFill([
  [
    'assign' in Object &&
      'find' in Array.prototype &&
      'Map' in global &&
      'Set' in global &&
      'finally' in Promise.prototype &&
      'startsWith' in String.prototype,
    () => import(/* webpackChunkName: "polyfill" */ 'core-js/shim'),
  ],
  [
    'fetch' in global,
    () =>
      import(/* webpackChunkName: "fetch" */ 'isomorphic-fetch')
        .then(getModuleDefault)
        .then(mod => {
          global.fetch = mod
          // fetch的promise和全局的Promise不同，需要单独打补丁
          // eslint-disable-next-line
          polyfillFetch()
        }),
  ],
])
