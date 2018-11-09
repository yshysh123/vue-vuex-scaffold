<template>
  <div class="Chart">
    <Echarts :options="options"
      autoResize></Echarts>
  </div>
</template>

<script>
import Echarts from 'components/echarts/Echarts.vue'
import 'echarts/lib/chart/line'
export default {
  name: 'Chart',
  components: {
    Echarts,
  },
  data() {
    return {
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
    }
  },
  computed: {},
  methods: {},
  mounted() {},
}
</script>

<style lang="less" scoped="" type="text/css">
</style>
