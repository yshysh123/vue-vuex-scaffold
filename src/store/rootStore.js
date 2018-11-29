const mutations = {
  setColor(state, v) {
    state.themeColor = v
  },
  setQueryFrom(state, v) {
    state.queryFormStore = Object.assign({}, v)
  },
}
const state = {
  themeColor: ['409EFF'],
  queryFormStore: {},
}
export default {
  namespaced: true,
  state,
  mutations,
}
