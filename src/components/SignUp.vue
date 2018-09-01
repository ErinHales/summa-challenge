<template>
  <div class="signup">
    <h2>{{msg}}</h2>
    <router-link to="/users">Sign Up</router-link>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      msg: 'Welcome to the sign up page.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
