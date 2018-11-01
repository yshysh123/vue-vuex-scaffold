<template>
  <div class="user">
    <el-card>
      <div slot="header"
        class="clearfix">
        <span>查询</span>
      </div>
      <QueryForm :showForm="showForm" />
    </el-card>
  </div>
</template>

<script>
import QueryForm from 'components/QueryForm'
export default {
  name: 'user',
  data: function() {
    return {
      showForm: {
        name: true,
        region: true,
        date: true,
        desc: true,
      },
    }
  },
  components: {
    QueryForm,
  },
  mounted() {},
}
</script>
