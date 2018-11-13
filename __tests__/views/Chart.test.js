import { mount } from '@vue/test-utils'
import Echarts from 'components/echarts/Echarts.vue'
import Chart from 'src/views/Chart.vue'

describe('NoMatch.vue', () => {
  const wrapper = mount(Chart, {
    stubs: {
      Echarts,
    },
    mocks: {
      $t: () => '欢迎来到首页',
    },
  })

  it('测试是否含有Echarts', () => {
    expect(wrapper.contains(Echarts)).toBe(true)
  })

  it('测试Echarts的props', () => {
    const options = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
        },
      ],
    }
    const echarts = wrapper.find(Echarts)
    expect(echarts.props().autoResize).toBe('true')
    expect(echarts.props().options).toEqual(options)
  })
})
