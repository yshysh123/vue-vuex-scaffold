import { mount } from '@vue/test-utils'

import ConfirmButton from 'src/components/ConfirmButton.vue'

describe('NoMatch.vue', () => {
  const wrapper = mount(ConfirmButton, {
    propsData: {
      text: '测试HOC',
      onConfirmText: '你确定要删除吗？？',
    },
    slots: {
      default: '<div class="fake-msg"></div>',
    },
  })
  const mockFn = jest.fn(() => {})
  wrapper.vm.$on('onConfirm', mockFn)

  it('测试接收到了prop参数', () => {
    expect(wrapper.props().text).toContain('测试HOC')
    expect(wrapper.props().onConfirmText).toContain('你确定要删除吗？？')
  })

  it('测试slot', () => {
    const list = wrapper.find(ConfirmButton)
    expect(list.contains('div.fake-msg')).toBeTruthy()
  })

  it('测试onClick，是否触发事件', () => {
    wrapper.vm.visible2 = true
    expect(mockFn).not.toHaveBeenCalled()
    wrapper
      .findAll('el-button')
      .at(1)
      .trigger('click')
    expect(mockFn).toHaveBeenCalled()
  })
})
