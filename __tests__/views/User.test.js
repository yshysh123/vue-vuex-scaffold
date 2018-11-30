import { mount, createLocalVue } from '@vue/test-utils'
import QueryForm from 'src/components/QueryForm.vue'
import Pagination from 'src/components/Pagination.vue'
import VueRouter from 'vue-router'
import UserStore from 'store/userStore'
import Vuex from 'vuex'
import User from 'src/views/User.vue'

const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.use(Vuex)

const router = new VueRouter()

describe('User.vue', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        UserStore,
      },
    })
    wrapper = mount(User, {
      stubs: {
        QueryForm,
        Pagination,
      },
      mocks: {
        $t: () => '欢迎来到首页',
      },
      router,
      store,
      localVue,
    })
  })

  it('测试是否含有QueryForm和Pagination', () => {
    expect(wrapper.contains(QueryForm)).toBe(true)
    expect(wrapper.contains(Pagination)).toBe(true)
  })

  it('测试QueryForm的props', () => {
    const confirm = wrapper.find(QueryForm)
    const showForm = {
      name: true,
      sex: true,
      date: true,
      age: true,
    }
    expect(confirm.props().showForm).toEqual(showForm)
  })

  it('测试Pagination的props', () => {
    const confirm = wrapper.find(Pagination)
    expect(confirm.props().store).toBe('UserStore/fetchLists')
  })
})
