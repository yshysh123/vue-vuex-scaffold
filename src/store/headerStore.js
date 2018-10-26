const mutations = {
  setAuthor(state, v) {
    state.author = v
  },
  setHeaderMenu(state, v) {
    state.headerMenu = v
  },
}
const state = {
  author: 'Wise Wrong',
  headerMenu: [],
}
export default {
  state,
  mutations,
}
