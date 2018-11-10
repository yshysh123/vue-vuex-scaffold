const mutations = {
  setColor(state, v) {
    state.themeColor = v
    console.log(state.themeColor)
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
