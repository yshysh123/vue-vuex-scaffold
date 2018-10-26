const mutations = {
  setCollapse(state, v) {
    state.collapse = v
  },
  setItems(state, v) {
    state.items = v
  },
}
const state = {
  author: 'Wise Wrong',
  collapse: false,
  items: [],
}
export default {
  state,
  mutations,
}
