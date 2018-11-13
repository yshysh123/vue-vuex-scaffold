const mutations = {
  setColor(state, v) {
    state.themeColor = v
  },
}
const state = {
  themeColor: ['409EFF'],
}
export default {
  namespaced: true,
  state,
  mutations,
}
