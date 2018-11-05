const mutations = {
  setAuthor(state, v) {
    state.author = v
  },
  setHeaderMenu(state, v) {
    state.headerMenu = v
  },
  setActiveIndex(state, v) {
    state.activeIndex = v
  },
}
const state = {
  author: 'Wise Wrong',
  headerMenu: [],
  activeIndex: '',
}
export default {
  namespaced: true,
  state,
  mutations,
}
