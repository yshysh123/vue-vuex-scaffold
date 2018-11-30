import { mount, createLocalVue } from '@vue/test-utils'
import user from 'fixture/user.json'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Pagination from 'src/components/Pagination.vue'

const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.use(Vuex)

const router = new VueRouter()

describe('QueryForm.vue', () => {
  let actions
  let store
  let wrapper

  beforeEach(() => {
    actions = {
      'UserStore/fetchLists': jest.fn(),
    }
    store = new Vuex.Store({
      state: {},
      actions,
    })
    wrapper = mount(Pagination, {
      propsData: {
        store: 'UserStore/fetchLists',
        storeLists: user,
      },
      router,
      store,
      localVue,
    })
  })

  it('测试接收到了prop参数', () => {
    expect(wrapper.props().store).toBe('UserStore/fetchLists')
    expect(wrapper.props().storeLists).toEqual(user)
  })

  it('测试计算属性是否准确', () => {
    expect(wrapper.vm.lists).toEqual(user)
  })

  it('测试handleSizeChange方法，是否触发store的dispatch', () => {
    const input = wrapper.find('el-pagination')
    input.element['page-sizes'] = 40
    input.trigger('size-change')
    expect(actions['UserStore/fetchLists']).toHaveBeenCalled()
  })

  it('测试handleSizeChange方法内部', () => {
    const spy = jest.spyOn(wrapper.vm.$router, 'push')
    expect(spy).not.toHaveBeenCalled()
    wrapper.vm.handleCurrentChange('5')
    expect(spy).toHaveBeenCalledWith({
      query: {
        pageNo: '5',
        pageSize: 20,
      },
    })
  })
})
