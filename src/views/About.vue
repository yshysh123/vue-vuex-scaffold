<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'about',
  data: function() {
    return {
      me: {},
    }
  },
  mounted() {
    this.$ajax
      .get(`user/getUserInfo`)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  },
}
</script>
