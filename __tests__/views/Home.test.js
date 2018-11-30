import { mount, createLocalVue } from '@vue/test-utils'
import ConfirmButton from 'src/components/ConfirmButton.vue'
import Home from 'src/views/Home.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('NoMatch.vue', () => {
  let wrapper
  let alert
  beforeEach(() => {
    wrapper = mount(Home, {
      stubs: {
        ConfirmButton,
      },
      mocks: {
        $t: () => '欢迎来到首页',
      },
      router,
      localVue,
    })
    alert = jest.spyOn(window, 'alert')
  })

  afterEach(() => {
    alert.mockRestore() // 每次測試完都得restore
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

  it('测试soundTest函数', () => {
    const button = wrapper.findAll('el-button').at(0)
    const fn = jest.fn(() => {})
    wrapper.setMethods({
      soundTest: fn,
    })
    expect(fn).not.toHaveBeenCalled()
    button.trigger('click')
    expect(fn).toHaveBeenCalled()
  })

  it('测试soundTest函数触发', () => {
    wrapper.vm.soundTest()
    const fn = jest.fn(() => {})
    wrapper.setMethods({
      axios: fn,
    })
    expect(fn).not.toHaveBeenCalled()
  })

  it('测试goYush函数', () => {
    const button = wrapper.findAll('el-button').at(1)
    const fn = jest.fn(() => {})
    wrapper.setMethods({
      goYush: fn,
    })
    expect(fn).not.toHaveBeenCalled()
    button.trigger('click')
    expect(fn).toHaveBeenCalled()
  })

  it('测试goYush函数触发', () => {
    const spy = jest.spyOn(wrapper.vm.$router, 'push')
    expect(spy).not.toHaveBeenCalled()
    wrapper.vm.goYush()
    expect(spy).toHaveBeenCalled()
  })

  it('测试onConfirm函数', () => {
    const button = wrapper.findAll('el-button').at(3)
    const fn = jest.fn(() => {})
    wrapper.setMethods({
      onConfirm: fn,
    })
    expect(fn).not.toHaveBeenCalled()
    button.trigger('click')
    expect(fn).toHaveBeenCalled()
  })

  it('测试onConfirm函数触发', () => {
    expect(alert).not.toHaveBeenCalled()
    wrapper.vm.onConfirm()
    expect(alert).toHaveBeenCalled()
  })
})
