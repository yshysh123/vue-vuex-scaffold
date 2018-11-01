<template>
  <div class="noMatch">
    <div class="noMatchLeft">
      <img src="/asset/images/KpnpchXsobRgLElEozzI.svg"
        alt="404">
    </div>
    <div class="noMatchRight">
      <h1>404</h1>
      <h2>抱歉，你访问的页面不存在</h2>
      <div style="text-align:left;">
        <el-button @click="backToHome">回到首页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'noMatch',
  data: function() {
    return {}
  },
  mounted() {},
  methods: {
    backToHome() {
      this.$router.push('/')
    },
  },
}
</script>

<style scoped lang="less" type="text/css">
.noMatch {
  .noMatchLeft {
    float: left;
    padding: 140px 100px 0 200px;
  }

  .noMatchRight {
    float: left;
    padding: 140px 0 0;

    h1 {
      margin-bottom: 24px;
      font-size: 72px;
      line-height: 72px;
      text-align: left;
      color: #434e59;
    }

    h2 {
      margin-bottom: 16px;
      font-size: 20px;
      line-height: 28px;
      color: rgba(0, 0, 0, 0.45);
    }
  }
}
</style>
