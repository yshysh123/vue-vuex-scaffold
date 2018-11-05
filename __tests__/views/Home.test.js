import { mount } from '@vue/test-utils'
import ConfirmButton from 'src/components/ConfirmButton.vue'
import Home from 'src/views/Home.vue'

describe('NoMatch.vue', () => {
  const wrapper = mount(Home, {
    stubs: {
      ConfirmButton,
    },
    mocks: {
      $t: () => '欢迎来到首页',
    },
  })

  it('测试HTML是否包含正确', () => {
    expect(wrapper.html()).toContain('欢迎来到首页')
    expect(wrapper.html()).toContain('测试音乐')
  })

  it('测试是否含有el-button', () => {
    expect(wrapper.contains('el-button')).toBe(true)
    expect(
      wrapper
        .findAll('el-button')
        .at(0)
        .text(),
    ).toBe('测试音乐')
  })

  it('测试是否含有ConfirmButton', () => {
    expect(wrapper.contains(ConfirmButton)).toBe(true)
  })

  it('测试ConfirmButton的props', () => {
    const confirm = wrapper.find(ConfirmButton)
    expect(confirm.props().onConfirmText).toBe('你确定要删除吗？？')
  })
})
