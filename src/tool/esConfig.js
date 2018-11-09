import echarts from 'echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

export const NO_AXIS = [
  'gauge',
  'graph',
  'radar',
  'sankey',
  'pie',
  'treemap',
  'wordCloud',
  'map',
  'heatmap',
]

// 初始化图表配置参数
export function initOption(type, title) {
  const option = {
    type,
    title,
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: null,
    },
    toolbox: {
      show: false,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    calculable: true,
    // xAxis: NO_AXIS.indexOf(type) <= -1 ? {} : null,
    // yAxis: NO_AXIS.indexOf(type) <= -1 ? {} : null,
    series: null,
  }

  return option
}

const setSeriesType = (series, type) => {
  if (series) {
    series.forEach(item => {
      if (!item.type) {
        item.type = type
      }
    })
  }
}

// 创建图表
export function createChart(render, chartData, option) {
  if (chartData) {
    option.series = chartData
    setSeriesType(option.series, option.type)
  }

  const chart = echarts.init(render)
  chart.setOption(option)
  return chart
}

// 更新图表
export function updateChart(chart, chartData, option) {
  if (chartData) {
    option.series = chartData
    setSeriesType(option.series, option.type)
  }

  chart.setOption(option, true)
  chart.resize()
}

export { echarts }
