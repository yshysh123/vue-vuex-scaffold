<template>
  <div class="chart">
    <div :class="className"
      :id="id"
      :data="data"
      :option="option"
      :style="{height:height,width:width}">
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import merge from 'lodash/merge'
import { initOption, createChart, updateChart } from 'tool/esConfig'
export default {
  props: {
    className: {
      type: String,
      default: 'chart',
    },
    id: {
      type: String,
      default: 'chart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '360px',
    },
    option: {
      type: Object,
      default: function() {
        return {}
      },
    },
    data: {
      type: Array,
      default: function() {
        return []
      },
    },
    title: {
      type: String,
      default: '这是一个柱状图Demo',
    },
    subTitle: {
      type: String,
      default: '这是一个柱状图Demo',
    },
    update: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'bar',
    },
  },
  data() {
    return {
      chart: null,
      chartOption: {},
    }
  },
  mounted() {
    this.createChart()
  },
  methods: {
    createOption() {
      const { option, title, subTitle } = this
      let titleObj = {
        text: title,
        subtext: subTitle,
      }
      return merge(initOption(this.type, titleObj), option)
    },
    createChart() {
      this.chartOption = this.createOption()
      let warp = document.getElementById(this.id)
      this.chart = createChart(warp, this.data, this.chartOption)
    },
  },
  updated() {
    const { update } = this
    if (!update) {
      return
    }
    const { data, option, title, subTitle } = this

    updateChart(
      this.chart,
      data,
      Object.assign(
        {},
        this.chartOption,
        merge(
          {
            title: {
              text: title,
              subtext: subTitle,
            },
            tooltip: {
              trigger: 'axis',
            },
          },
          option,
        ),
      ),
    )
  },
  destroyed() {
    this.chart && this.chart.dispose()
  },
}
</script>
