import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import RootStore from 'store/rootStore'
import NoMatch from 'src/components/NoMatch.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const router = new VueRouter()

describe('NoMatch.vue', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        RootStore,
      },
    })
    wrapper = mount(NoMatch, {
      store,
      router,
      localVue,
      mocks: {
        $t: () => 'some specific text',
      },
    })
  })

  it('测试HTML是否包含正确', () => {
    expect(wrapper.html()).toContain('some specific text')
  })

  it('测试是否含有el-button', () => {
    expect(wrapper.contains('el-button')).toBe(true)
    expect(wrapper.find('el-button').text()).toBe('some specific text')
  })

  it('测试点击button，是否触发事件', () => {
    const button = wrapper.find('el-button')
    const spy = jest.spyOn(wrapper.vm.$router, 'push')
    expect(spy).not.toHaveBeenCalled()
    button.trigger('click')
    expect(spy).toHaveBeenCalled()
  })
})
