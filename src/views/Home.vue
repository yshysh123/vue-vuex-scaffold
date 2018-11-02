<template>
  <div class="home">
    <HelloWorld :msg="$t('message.hello')" />
    <el-button @click="soundTest">测试音乐</el-button>
    <ConfirmButton onConfirmText="你确定要删除吗？？"
      @onConfirm="onConfirm">测试HOC</ConfirmButton>
  </div>
</template>

<script>
import HelloWorld from 'components/HelloWorld'
import ConfirmButton from 'components/ConfirmButton'
import axios from 'tool/axios'

export default {
  name: 'home',
  components: {
    HelloWorld,
    ConfirmButton,
  },
  methods: {
    soundTest() {
      //测试声音
      axios.get(`user/testVideo`).then(data => {})
    },
    onConfirm() {
      alert('测试成功')
    },
  },
}
</script>
