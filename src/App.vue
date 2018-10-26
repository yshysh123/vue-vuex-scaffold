<template>
  <div id="app"
    :class="$store.state.SiderStore.collapse?'collapseY':'collapseN'">
    <headerVue></headerVue>
    <siderVue></siderVue>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import headerVue from './components/Sider.vue'
import siderVue from './components/Header.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    headerVue,
    siderVue,
  },
}
</script>

<style>
#app {
  margin-top: 60px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.collapseY {
  padding: 60px 0 0 64px;
}

.collapseN {
  padding: 60px 0 0 200px;
}
</style>
