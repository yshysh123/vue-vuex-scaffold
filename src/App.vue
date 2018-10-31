<template>
  <div id="app"
    :class="$store.state.SiderStore.collapse?'collapseY':'collapseN'">
    <headerVue></headerVue>
    <siderVue></siderVue>
    <transition :name="transitionName">
      <router-view class="Router" />
    </transition>
    <SoundEffect />
  </div>
</template>

<script>
import SoundEffect from '@/components/SoundEffect.vue'
import headerVue from './components/Sider.vue'
import siderVue from './components/Header.vue'

export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide-left',
    }
  },
  components: {
    SoundEffect,
    headerVue,
    siderVue,
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.Router {
  position: absolute;
  width: calc(100% - 200px);
  transition: all 0.8s ease;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-100% 0);
}

.collapseY {
  padding: 0 0 0 64px;
}

.collapseN {
  padding: 0 0 0 200px;
}
</style>
