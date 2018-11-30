import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import QueryForm from 'src/components/QueryForm.vue'

const localVue = createLocalVue()

localVue.use(VueRouter)

const router = new VueRouter()

describe('QueryForm.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(QueryForm, {
      propsData: {
        showForm: {
          name: true,
          sex: true,
          date: true,
          age: true,
        },
      },
      mocks: {
        $t: () => 'some specific text',
      },
      router,
      localVue,
    })
  })

  it('测试接收到了prop参数', () => {
    expect(wrapper.props().showForm).toEqual({
      name: true,
      sex: true,
      date: true,
      age: true,
    })
  })

  it('测试onClick，是否触发事件', () => {
    const mockFn = jest.fn(() => {})
    wrapper.setMethods({
      submitForm: mockFn,
    })
    wrapper.vm.visible2 = true
    expect(mockFn).not.toHaveBeenCalled()
    wrapper
      .findAll('el-button')
      .at(0)
      .trigger('click')
    expect(mockFn).toHaveBeenCalled()
  })

  it('测试resetQueryForm', () => {
    const mockFn2 = jest.fn(() => {})
    wrapper.setMethods({
      resetForm: mockFn2,
    })
    const button = wrapper.findAll('el-button').at(1)
    expect(mockFn2).not.toHaveBeenCalled()
    button.trigger('click')
    expect(mockFn2).toHaveBeenCalled()
  })

  // it('测试resetQueryForm内部', () => {
  //   wrapper.vm.ruleForm = {
  //     name: '111',
  //     sex: '111',
  //     date: '2019-01-01',
  //     age: '18',
  //   }
  //   // console.log(wrapper.vm.$refs.ruleForm.resetFields())
  //   wrapper.vm.resetForm('ruleForm')
  //   expect(wrapper.vm.ruleForm).toEqual({
  //     name: '111',
  //     sex: '111',
  //     date: '2019-01-01',
  //     age: '18',
  //   })
  // })
})
