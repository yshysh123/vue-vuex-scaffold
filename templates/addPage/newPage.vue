<template>
  <div class="<!-- forName -->">
    欢迎来到
    <!-- forName -->页面
    <!-- forSearch -->
    <!-- forTable -->
  </div>
</template>

<script>
export default {
  name: '<!-- forName -->',
  components: {},
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
    //tableComputed
  },
  methods: {
    //tableMethods
  },
  mounted() {
    //tableMounted
  },
}
</script>
