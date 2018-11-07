import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Sider from 'src/components/Sider.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const router = new VueRouter()
router.push('/some')

describe('Sider.vue', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        SiderStore: {
          state: {
            collapse: false,
            items: [],
          },
        },
      },
    })
    wrapper = mount(Sider, {
      store,
      router,
      localVue,
    })
  })

  it('测试计算属性是否准确', () => {
    router.push('/some')
    expect(wrapper.vm.onRoutes).toBe('some')
    // expect(wrapper.vm.items).toEqual([])
    // expect(wrapper.vm.collapse).toBe(false)
  })
})
