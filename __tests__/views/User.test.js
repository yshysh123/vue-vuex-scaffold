import { mount, createLocalVue } from '@vue/test-utils'
// import QueryForm from 'components/QueryForm.vue'
// import Pagination from 'components/Pagination.vue'
import Vuex from 'vuex'
import User from 'src/views/User.vue'
import userStore from 'src/store/userStore'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('NoMatch.vue', () => {
  let store
  const getters = []
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        myModule: {
          actions: userStore.actions,
          state: userStore.state,
          getters,
        },
      },
    })
  })

  it('测试table列', () => {
    const wrapper = mount(User, {
      store,
      localVue,
      mocks: {
        $t: () => '欢迎来到首页',
      },
    })

    const th = wrapper.findAll('th')
    expect(th.at(0).text()).toBe('')
    expect(th.at(1).text()).toBe('姓名')
    expect(th.at(2).text()).toBe('年龄')
    expect(th.at(3).text()).toBe('性别')
  })

  // it('测试是否含有QueryForm和Pagination', () => {
  //   const wrapper = mount(User, {
  //     store,
  //     localVue,
  //     stubs: {
  //       QueryForm,
  //       Pagination,
  //     },
  //   })

  //   expect(wrapper.contains(QueryForm)).toBe(true)
  //   expect(wrapper.contains(Pagination)).toBe(true)
  // })

  // it('测试QueryForm的props', () => {
  //   const wrapper = mount(User, {
  //     store,
  //     localVue,
  //     stubs: {
  //       QueryForm,
  //       Pagination,
  //     },
  //   })

  //   const queryForm = wrapper.find(QueryForm)
  //   expect(queryForm.props().showForm).toBe(Object)
  // })

  // it('测试Pagination的props', () => {
  //   const wrapper = mount(User, {
  //     store,
  //     localVue,
  //     stubs: {
  //       QueryForm,
  //       Pagination,
  //     },
  //   })

  //   const pagination = wrapper.find(Pagination)
  //   expect(pagination.props().store).toBe('UserStore/fetchLists')
  //   expect(pagination.props().storeLists).toBe(Array)
  // })
})
