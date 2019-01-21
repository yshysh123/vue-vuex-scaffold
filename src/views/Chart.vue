<template>
  <div class="Chart">
    <el-row :gutter="20">
      <el-col :span="12">
        <div ref="chart1"
          style="width:100%;height:400px" />
      </el-col>
      <el-col :span="12">
        <div ref="chart2"
          style="width:100%;height:400px" />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div ref="chart3"
          style="width:100%;height:400px" />
      </el-col>
      <el-col :span="12">
        <div ref="chart4"
          style="width:100%;height:400px" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from '../plugins/echarts'
export default {
  name: 'Chart',
  data() {
    return {
      chart1: {},
      chart2: {},
      chart3: {},
      chart4: {},
      options: {
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
      },
      options2: {
        title: {
          text: '某地区蒸发量和降水量',
          subtext: '纯属虚构',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['蒸发量', '降水量'],
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月',
            ],
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3,
            ],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' },
              ],
            },
            markLine: {
              data: [{ type: 'average', name: '平均值' }],
            },
          },
          {
            name: '降水量',
            type: 'bar',
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3,
            ],
            markPoint: {
              data: [
                { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 },
              ],
            },
            markLine: {
              data: [{ type: 'average', name: '平均值' }],
            },
          },
        ],
      },
      options3: {
        title: {
          text: 'Customized Pie',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#ccc',
          },
        },

        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1],
          },
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 274, name: '联盟广告' },
              { value: 235, name: '视频广告' },
              { value: 400, name: '搜索引擎' },
            ].sort(function(a, b) {
              return a.value - b.value
            }),
            roseType: 'radius',
            label: {
              normal: {
                textStyle: {
                  color: 'rgba(255, 255, 255, 0.3)',
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.3)',
                },
                smooth: 0.2,
                length: 10,
                length2: 20,
              },
            },
            itemStyle: {
              normal: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
              return Math.random() * 200
            },
          },
        ],
      },
      options4: {
        xAxis: {},
        yAxis: {},
        series: [
          {
            symbolSize: 20,
            data: [
              [10.0, 8.04],
              [8.0, 6.95],
              [13.0, 7.58],
              [9.0, 8.81],
              [11.0, 8.33],
              [14.0, 9.96],
              [6.0, 7.24],
              [4.0, 4.26],
              [12.0, 10.84],
              [7.0, 4.82],
              [5.0, 5.68],
            ],
            type: 'scatter',
          },
        ],
      },
    }
  },
  computed: {},
  methods: {
    drawChart() {
      this.chart1 = echarts.init(this.$refs.chart1)
      // 绘制条形图
      this.chart1.setOption(this.options)
      this.chart2 = echarts.init(this.$refs.chart2)
      // 绘制条形图
      this.chart2.setOption(this.options2)
      this.chart3 = echarts.init(this.$refs.chart3)
      // 绘制条形图
      this.chart3.setOption(this.options3)
      this.chart4 = echarts.init(this.$refs.chart4)
      // 绘制条形图
      this.chart4.setOption(this.options4)
      window.addEventListener('resize', this.resize)
    },
    resize() {
      this.chart1.resize()
      this.chart2.resize()
      this.chart3.resize()
      this.chart4.resize()
    },
  },
  mounted() {
    this.drawChart()
  },
  destroyed() {
    window.removeEventListener('resize', this.resize)
  },
}
</script>

<style lang="less" scoped type="text/css">
</style>
