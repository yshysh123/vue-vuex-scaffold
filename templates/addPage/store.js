import axios from 'plugins/axios'

const mutations = {
  setLists(state, param) {
    state.lists = param
  },
}
const state = {
  lists: {
    dataSource: [],
  },
}
const actions = {
  fetchLists: (store, params = { pageNo: 1, pageSize: 10 }) => {
    params.pageNo = params.pageNo ? params.pageNo : 1
    params.pageSize = params.pageSize ? params.pageSize : 10
    axios.get('replaceApi', { params }).then(data => {
      store.commit('setLists', data)
    })
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
