<template>
  <div class="user">
    <el-card>
      <div slot="header"
        class="clearfix">
        <span style="line-height:18px;">{{$t('search')}}</span>
      </div>
      <QueryForm @onSubmit="onSubmit"
        :showForm="showForm" />
    </el-card>
    <el-card style="margin-top:5px;">
      <el-table border
        stripe
        v-loading="loading"
        :data="lists.dataSource"
        style="width:100%;">
        <el-table-column prop="name"
          :label="$t('user.name')">
        </el-table-column>
        <el-table-column prop="age"
          :label="$t('user.age')">
        </el-table-column>
        <el-table-column prop="sex"
          :label="$t('user.sex')">
        </el-table-column>
      </el-table>
      <Pagination store="UserStore/fetchLists"
        :storeLists="lists" />
      <!-- <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542365876811&di=ecd6534383e7ee1c485e714fce7f77a3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F32fa828ba61ea8d3d8d6c33f9c0a304e251f5810.jpg"
        class="reveal-top"> -->
    </el-card>
  </div>
</template>

<script>
import QueryForm from 'components/QueryForm'
import Pagination from 'components/Pagination'
import scrollReveal from 'scrollreveal'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'user',
  data: function() {
    return {
      showForm: {
        name: true,
        sex: true,
        date: true,
        age: true,
      },
      loading: false,
      scrollReveal: scrollReveal(),
    }
  },
  components: {
    QueryForm,
    Pagination,
  },
  computed: {
    /**
     * 映射vuex  将lists映射为this.$store.state.UserStore.lists
     */
    ...mapState('UserStore', ['lists']),
  },
  methods: {
    onSubmit(value) {
      this.fetchLists(value)
    },
    /**
     * 映射vuex  将this.fetchLists映射为this.$store.dispatch('UserStore/fetchLists')
     */
    ...mapActions('UserStore', ['fetchLists']),
  },
  mounted() {
    const { query } = this.$route
    this.onSubmit(query)
    this.scrollReveal.reveal('.reveal-top', {
      // 动画的时长
      duration: 500,
      // 延迟时间
      delay: 50,
      // 动画开始的位置，'bottom', 'left', 'top', 'right'
      origin: 'top',
      // 回滚的时候是否再次触发动画
      reset: true,
      // 在移动端是否使用动画
      mobile: false,
      // 滚动的距离，单位可以用%，rem等
      distance: '-50px',
      // 其他可用的动画效果
      opacity: 0.1,
      easing: 'linear',
      scale: 0.9,
    })
  },
}
</script>
