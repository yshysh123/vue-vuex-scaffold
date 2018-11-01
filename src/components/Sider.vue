<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="$store.state.SiderStore.collapse"
      background-color="#393939"
      text-color="#bfcbd9"
      active-text-color="#ffd04b"
      unique-opened
      router>
      <template v-for="item in $store.state.SiderStore.items">
        <template v-if="item.children">
          <el-submenu :index="String(item.name)"
            :key="item.name">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.fullName }}</span>
            </template>
            <el-menu-item v-for="(subItem,i) in item.children"
              :key="i"
              :index="String(subItem.name)">
              {{ subItem.fullName }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="String(item.name)"
            :key="item.name">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.fullName }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '')
    },
  },
}
</script>

<style lang="less" scoped type="text/css">
.sidebar {
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  display: block;
  background: #393939;

  .el-menu-item,
  .el-submenu {
    text-align: left;
  }
}

.el-submenu .el-menu-item {
  min-width: 180px;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 200px;
}

.sidebar > ul {
  height: 100%;
  // background-color: #eee;
}
</style>
