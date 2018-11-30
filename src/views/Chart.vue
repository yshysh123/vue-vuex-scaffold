<template>
  <div class="Chart">
    <vCharts :options="options"
      style="width:100%;height:400px"
      autoResize=true />
  </div>
</template>

<script>
export default {
  name: 'Chart',
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
