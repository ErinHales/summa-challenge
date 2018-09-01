<template>
  <div class="users">
    <h2>{{msg}}</h2>
    <router-link to="/">Log Out</router-link>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      msg: 'Welcome to the users page.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
