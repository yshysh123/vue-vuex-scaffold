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
    </el-card>
  </div>
</template>

<script>
import QueryForm from 'components/QueryForm'
import Pagination from 'components/Pagination'
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
      this.loading = true
      this.fetchLists(value).then(() => {
        this.loading = false
      })
    },
    /**
     * 映射vuex  将this.fetchLists映射为this.$store.dispatch('UserStore/fetchLists')
     */
    ...mapActions('UserStore', ['fetchLists']),
  },
  mounted() {
    this.onSubmit({})
  },
}
</script>
