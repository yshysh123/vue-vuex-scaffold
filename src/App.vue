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

export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide-left',
      activeIndex2: '',
    }
  },
  components: {
    SoundEffect,
    headerVue,
    siderVue,
  },
  methods: {
    ...mapMutations('HeaderStore', ['setActiveIndex']),
  },
  watch: {
    $route(to, from) {
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
      this.$store.commit('setItems', siderMenu)
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.collapseY .Router {
  position: absolute;
  box-sizing: border-box;
  width: calc(100% - 64px);
  padding: 10px 20px;
  transition: all 0.8s ease;
}

.collapseN .Router {
  position: absolute;
  box-sizing: border-box;
  width: calc(100% - 200px);
  padding: 10px 20px;
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
