<template>
  <div class="pagination">
    <div style="
      text-align:right;
      margin-top:5px;">
      <el-pagination @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="lists.pageNo"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="lists.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="lists.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
/**
 * 翻页组件
 * 需要传入2个参数
 * store：对应store的dispatch
 * storeLists获取的页面数组
 */
export default {
  name: 'pagination',
  data: function() {
    return {}
  },
  props: {
    store: String,
    storeLists: Object,
  },
  computed: {
    lists() {
      const { query } = this.$route
      let pagination = Object.assign({}, this.storeLists)
      if (query.pageNo) {
        pagination.pageNo = Number(query.pageNo)
      }
      if (query.pageSize) {
        pagination.pageSize = Number(query.pageSize)
      }
      return pagination
    },
  },
  methods: {
    handleSizeChange(pageSize) {
      const { query } = this.$route
      let params = {
        ...query,
        pageSize: pageSize,
        pageNo: this.lists.pageNo,
      }
      this.$store.dispatch(this.store, params)

      let queryForm = Object.assign({}, params)
      this.$router.push({ query: queryForm })
    },
    handleCurrentChange(pageNo) {
      const { query } = this.$route
      let params = {
        ...query,
        pageSize: this.lists.pageSize,
        pageNo: pageNo,
      }
      this.$store.dispatch(this.store, params)
      let queryForm = Object.assign({}, params)
      this.$router.push({ query: queryForm })
    },
  },
}
</script>
