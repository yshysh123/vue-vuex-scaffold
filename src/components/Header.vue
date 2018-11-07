<template>
  <div class="header">
    <div class="header-logo">
      <div class="collapse-btn"
        @click="collapseChage">
        <i class="el-icon-menu"></i>
      </div>
      <div class="logo">{{$t('base.title')}}</div>
    </div>
    <div class="menu">
      <el-menu :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#393939"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item v-for="item in headerMenu"
          :key="item.name"
          :index="String(item.name)">{{item.fullName}}</el-menu-item>
      </el-menu>
    </div>

    <div class="language">
      <el-dropdown trigger="click"
        class='international'
        @command="handleSetLanguage">
        <div>
          <span class="el-dropdown-link">{{language}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="cn">中文</el-dropdown-item>
          <el-dropdown-item command="en">English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="user-info">
      <el-dropdown trigger="click"
        @command="handleCommand">
        <span class="el-dropdown-link">
          {{username}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="themePicker">
      <ThemePicker />
    </div>
  </div>
</template>
<script>
import ThemePicker from 'components/ThemePicker'
import getSiderByHeaderIndex from 'tool/getSiderByHeaderIndex'
import { getHeaderKeyByRouter } from 'tool/getHeaderIndexByRouter'
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      language: '',
      collapse: false,
      name: 'linxin',
      siderMenu: [],
    }
  },
  components: {
    ThemePicker,
  },
  mounted() {
    const _lang = localStorage.lang || 'cn'
    this.getLanguage(_lang)
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
  },
  computed: {
    ...mapState('HeaderStore', ['activeIndex', 'headerMenu']),
    username() {
      let username = localStorage.getItem('ms_username')
      return username ? username : this.name
    },
  },
  methods: {
    ...mapMutations('HeaderStore', ['setActiveIndex']),
    ...mapMutations('SiderStore', ['setItems', 'setCollapse']),
    handleCommand(command) {
      if (command == 'loginout') {
        localStorage.removeItem('ms_username')
        this.$router.push('/login')
      }
    },
    collapseChage() {
      this.collapse = !this.collapse
      this.setCollapse(this.collapse)
    },
    handleSelect(key, keyPath) {
      this.siderMenu = getSiderByHeaderIndex(
        this.$store.state.HeaderStore.headerMenu,
        key,
      )
      this.setItems(this.siderMenu)
      if (this.siderMenu[0] && this.siderMenu[0].children) {
        this.$router.push(this.siderMenu[0].children[0].name)
      } else {
        this.$router.push(this.siderMenu[0].name)
      }
    },
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      localStorage.setItem('lang', lang)
      this.getLanguage(lang)
    },
    getLanguage(val) {
      if (val === 'cn') {
        this.language = '中文'
      }
      if (val === 'en') {
        this.language = 'English'
      }
    },
  },
}
</script>
<style lang="less" scoped type="text/css">
.header {
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  font-size: 22px;
  line-height: 60px;
  color: #fff;
  background: #393939;

  .header-logo {
    float: left;
    width: 200px;
  }

  .collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
  }

  .collapse-btn:hover {
    background: rgb(40, 52, 70);
  }

  .logo {
    float: left;
    text-align: left;
  }

  .menu {
    float: left;
  }

  .themePicker {
    float: right;
    padding-top: 8px;
  }

  .language {
    float: right;
    font-size: 16px;
    line-height: 60px;
    color: #fff;

    .el-dropdown-link {
      position: relative;
      display: inline-block;
      width: 100px;
      text-align: center;
      vertical-align: middle;
      color: #fff;
      cursor: pointer;
    }

    .el-icon-arrow-down {
      font-size: 14px;
    }

    .international-icon {
      font-size: 20px;
      vertical-align: -5px !important;
      cursor: pointer;
    }
  }

  .user-info {
    float: right;
    font-size: 16px;
    line-height: 60px;
    color: #fff;

    .el-dropdown-link {
      position: relative;
      display: inline-block;
      width: 100px;
      text-align: center;
      vertical-align: middle;
      color: #fff;
      cursor: pointer;
    }

    .user-logo {
      position: absolute;
      top: 15px;
      left: 0;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }

  .el-dropdown-menu__item {
    text-align: center;
  }
}
</style>
