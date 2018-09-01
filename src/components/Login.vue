<template>
  <div class="login">
    <h2>{{msg}}</h2>
    <router-link to="/signup">Sign Up</router-link>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to the login page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
