<template>
  <div class="home">
    <el-button @click="soundTest">el-button</el-button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>{{$t('message.hello')}}</p>
    <p>{{$t('message.msg')}}</p>
    <p>{{$t('login')}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'tool/axios'

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  methods: {
    soundTest() {
      //测试声音
      axios.get(`user/getUserInfo`).then(data => {
        localStorage.setItem('ms_username', data.name)
      })
    },
  },
}
</script>
