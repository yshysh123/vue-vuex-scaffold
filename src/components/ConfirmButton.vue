<template>
  <div class="ConfirmButton">
    <el-popover placement="top"
      width="160"
      v-model="visible2">
      <p>{{onConfirmText}}</p>
      <div class="confirmBtn">
        <el-button size="mini"
          type="text"
          @click="visible2 = false">取消</el-button>
        <el-button type="primary"
          class="confirmBtn"
          size="mini"
          @click="onClick">确定</el-button>
      </div>
      <el-button slot="reference">
        <slot />
      </el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'ConfirmButton',
  props: {
    text: String,
    onConfirmText: String,
  },
  mounted() {},
  data() {
    return {
      visible2: false,
    }
  },
  methods: {
    onClick() {
      this.$emit('onConfirm')
      this.visible2 = false
    },
  },
}
</script>

<style scoped lang="less" type="text/css">
.confirmBtn {
  margin: 0;
  text-align: right;
}
</style>
