<template>
  <div class="home">
    <el-button @click="soundTest">测试音乐</el-button>
    <ConfirmButton onConfirmText="你确定要删除吗？？"
      @onConfirm="onConfirm">测试HOC</ConfirmButton>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>{{$t('message.hello')}}</p>
    <p>{{$t('message.msg')}}</p>
    <p>{{$t('login')}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
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
      axios.get(`user/getUserInfo`).then(data => {
        localStorage.setItem('ms_username', data.name)
      })
    },
    onConfirm() {
      alert('测试成功')
    },
  },
}
</script>
