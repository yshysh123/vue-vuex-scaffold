import { mount } from '@vue/test-utils'
import NoMatch from '../../src/components/NoMatch.vue'

describe('NoMatch.vue', () => {
  const wrapper = mount(NoMatch)

  it('测试HTML是否包含正确', () => {
    expect(wrapper.html()).toContain('<h2>抱歉，你访问的页面不存在</h2>')
  })

  it('测试是否含有el-button', () => {
    expect(wrapper.contains('el-button')).toBe(true)
  })

  it('测试点击button，是否触发事件', () => {
    const button = wrapper.find('el-button')
    const spy = jest
      .spyOn(wrapper.vm, 'backToHome')
      .mockImplementation(() => {})
    button.trigger('click')
    expect(spy).toHaveBeenCalled()
  })
})
