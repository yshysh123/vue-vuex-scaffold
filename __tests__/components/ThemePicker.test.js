import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import RootStore from 'store/rootStore'
import ThemePicker from 'components/ThemePicker.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('ThemePicker.vue', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        RootStore,
      },
    })

    wrapper = mount(ThemePicker, {
      store,
      localVue,
      mocks: {
        $t: () => 'some specific text',
        $message: () => jest.fn(),
      },
    })
  })

  it('测试watch方法', () => {
    wrapper.vm.theme = '#FF0000'
    expect(wrapper.vm.themeCluster).toEqual([
      'FF0000',
      '255,0,0',
      '#ff1a1a',
      '#ff3333',
      '#ff4d4d',
      '#ff6666',
      '#ff8080',
      '#ff9999',
      '#ffb3b3',
      '#ffcccc',
      '#ffe6e6',
      '#e600',
    ])
    expect(wrapper.vm.originalCluster).toEqual([
      '409EFF',
      '64,158,255',
      '#53a8ff',
      '#66b1ff',
      '#79bbff',
      '#8cc5ff',
      '#a0cfff',
      '#b3d8ff',
      '#c6e2ff',
      '#d9ecff',
      '#ecf5ff',
      '#3a8ee6',
    ])
  })

  it('测试updateStyle方法', () => {
    expect(
      wrapper.vm.updateStyle('#FF0000,#FFFFFF', ['#FF0000'], ['#FF1111']),
    ).toBe('#FF1111,#FFFFFF')
  })

  it('测试getThemeCluster方法', () => {
    expect(wrapper.vm.getThemeCluster('FF1111')).toEqual([
      'FF1111',
      '255,17,17',
      '#ff2929',
      '#ff4141',
      '#ff5858',
      '#ff7070',
      '#ff8888',
      '#ffa0a0',
      '#ffb8b8',
      '#ffcfcf',
      '#ffe7e7',
      '#e6ff',
    ])
  })
})
