import { mount } from '@vue/test-utils'
import Chart from 'src/views/Chart.vue'

describe('Chart.vue', () => {
  const wrapper = mount(Chart)

  it('测试是否含有Echarts', () => {
    expect(wrapper.contains('vCharts')).toBe(true)
  })

  it('测试Echarts的props', () => {
    // const options = {
    //   xAxis: {
    //     type: 'category',
    //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //   },
    //   yAxis: {
    //     type: 'value',
    //   },
    //   series: [
    //     {
    //       data: [820, 932, 901, 934, 1290, 1330, 1320],
    //       type: 'line',
    //     },
    //   ],
    // }
    const echarts = wrapper.find('vCharts')
    expect(echarts.attributes().autoresize).toBe('true')
    expect(echarts.attributes().style).toBe('width: 100%; height: 400px;')
  })
})
