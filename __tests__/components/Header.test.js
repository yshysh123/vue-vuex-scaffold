import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Header from 'components/Header.vue'
import menu from 'fixture/menu.json'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

const router = new VueRouter()

describe('Header.vue', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        HeaderStore: {
          state: {
            headerMenu: menu,
          },
        },
        SiderStore: {
          state: {
            collapse: false,
          },
        },
      },
    })
    wrapper = mount(Header, {
      store,
      router,
      localVue,
      mocks: {
        $t: () => 'some specific text',
      },
    })
  })

  it('测试计算属性是否准确', () => {
    expect(wrapper.vm.activeIndex).toEqual(undefined)
    expect(wrapper.vm.headerMenu).toEqual(undefined)
    expect(wrapper.vm.username).toBe('linxin')
  })

  it('测试handleCommand方法', () => {
    const mockFn = jest.fn()
    wrapper.setMethods({
      handleCommand: mockFn,
    })
    expect(mockFn).not.toHaveBeenCalled()
    wrapper
      .findAll('el-dropdown')
      .at(1)
      .trigger('command')
    expect(mockFn).toHaveBeenCalled()
  })

  it('测试collapseChage方法', () => {
    const mockFn = jest.fn()
    wrapper.setMethods({
      collapseChage: mockFn,
    })
    expect(mockFn).not.toHaveBeenCalled()
    wrapper.find('.collapse-btn').trigger('click')
    expect(mockFn).toHaveBeenCalled()
  })

  it('测试handleSelect方法', () => {
    const spy = jest.spyOn(wrapper.vm.$router, 'push')
    expect(spy).not.toHaveBeenCalled()
    wrapper.vm.handleSelect('Menu2_1')
    expect(spy).toHaveBeenCalled()
  })
  it('测试handleSetLanguage方法', () => {
    const mockFn = jest.fn()
    wrapper.setMethods({
      handleSetLanguage: mockFn,
    })
    expect(mockFn).not.toHaveBeenCalled()
    wrapper
      .findAll('el-dropdown')
      .at(0)
      .trigger('command')
    expect(mockFn).toHaveBeenCalled()
  })

  it('测试getLanguage方法', () => {
    wrapper.vm.getLanguage('cn')
    expect(wrapper.vm.language).toBe('中文')
    wrapper.vm.getLanguage('en')
    expect(wrapper.vm.language).toBe('English')
  })
})
