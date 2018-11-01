import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import NoMatch from '../../src/components/NoMatch.vue'

describe('NoMatch.vue', () => {
  const wrapper = mount(NoMatch)
  const clickMethodStub = sinon.spy()

  it('测试HTML是否包含正确', () => {
    expect(wrapper.html()).toContain('<h2>抱歉，你访问的页面不存在</h2>')
  })

  it('测试是否含有el-button', () => {
    expect(wrapper.contains('el-button')).toBe(true)
    expect(wrapper.find('el-button').text()).toBe('回到首页')
  })

  it('测试点击button，是否触发事件', () => {
    const button = wrapper.find('el-button')
    wrapper.setMethods({ backToHome: clickMethodStub })
    console.log(wrapper.vm.$router)
    console.log(window)
    console.log(this)
    // const spy = jest.spyOn(wrapper.vm, 'backToHome')
    button.trigger('click')
    // expect(clickMethodStub).toHaveBeenCalled()
    expect(clickMethodStub.called).toBe(true)
  })
})
