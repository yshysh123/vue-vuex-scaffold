<template>
  <div id="app"
    :class="$store.state.SiderStore.collapse?'collapseY':'collapseN'">
    <headerVue :activeIndex2="activeIndex2"></headerVue>
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
import getSiderByHeaderIndex from 'tool/getSiderByHeaderIndex'
import { getHeaderKeyByRouter } from 'tool/getHeaderIndexByRouter'
import { mapMutations } from 'vuex'
import NProgress from 'nprogress'

export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide-left',
      activeIndex2: '',
      timer: null,
    }
  },
  components: {
    SoundEffect,
    headerVue,
    siderVue,
  },
  methods: {
    ...mapMutations('HeaderStore', ['setActiveIndex']),
    ...mapMutations('SiderStore', ['setItems']),
  },
  mounted() {},
  destroyed() {
    clearTimeout(this.timer)
  },
  watch: {
    $route(to, from) {
      /**
       * 开启滚动条
       */
      NProgress.start()
      this.timer = setTimeout(() => NProgress.done(), 1000)
      /**
       * 路由切换动画
       */
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      const { HeaderStore } = this.$store.state
      if (location.pathname === '/') {
        this.$router.push(
          HeaderStore.headerMenu[0].children[0].name
            ? HeaderStore.headerMenu[0].children[0].name
            : HeaderStore.headerMenu[0].children[0].children[0].name,
        )
        this.setActiveIndex(
          getHeaderKeyByRouter(
            HeaderStore.headerMenu,
            HeaderStore.headerMenu[0].children[0].name
              ? HeaderStore.headerMenu[0].children[0].name
              : HeaderStore.headerMenu[0].children[0].children[0].name,
          ),
        )
      } else {
        this.setActiveIndex(
          getHeaderKeyByRouter(
            HeaderStore.headerMenu,
            location.pathname.replace('/', ''),
          ),
        )
      }
      let siderMenu = getSiderByHeaderIndex(
        HeaderStore.headerMenu,
        getHeaderKeyByRouter(
          HeaderStore.headerMenu,
          location.pathname.replace('/', ''),
        ),
      )
      this.setItems(siderMenu)
    },
  },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  transition: 0.8s;
}

.collapseY .Router {
  position: absolute;
  box-sizing: border-box;
  width: calc(100% - 64px);
  min-width: 1100px;
  padding: 10px 20px;
}

.collapseN .Router {
  position: absolute;
  box-sizing: border-box;
  width: calc(100% - 200px);
  min-width: 1100px;
  padding: 10px 20px;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  position: absolute;
  transition: all 500ms;
  will-change: transform;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.collapseY {
  padding: 0 0 0 64px;
}

.collapseN {
  padding: 0 0 0 200px;
}
</style>
