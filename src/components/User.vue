<template>
  <div class="user">
    <h3>{{user.name}}</h3>
    <h3>{{user.username}}</h3>
    <h3>{{user.email}}</h3>
  </div>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'SignUp',
  props: ['user'],
  components: {
    NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user {
  text-align: center;
  margin: 50px;
  font-weight: 100;
}
</style>
