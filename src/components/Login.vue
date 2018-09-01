<template>
  <div class="login">
    <NavBar title="Login" />
    <h2>{{msg}}</h2>
    <form action="" @submit.prevent="login">
      <h3>Username</h3>
      <input type="text" v-model="username">
      <h3>Password</h3>
      <input type="text" v-model="password">
      <button type="submit">LOG IN</button>
      <h5>Don't have an account? <router-link to="/signup">Sign Up</router-link></h5>
    </form>
    <!-- <router-link to="/users">Login</router-link> -->
  </div>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    NavBar
  },
  methods: {
    login () {
      window.location.hash = '#/users'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  display: flex;
  flex-direction: column;
  width: 50vw;
  justify-content: center;
  align-items: center;
  background-color: #C4C4C4;
  padding: 30px;
}
h3 {
  font-weight: 200;
  font-size: 12px;
  float: left;
}
input {
  background: transparent;
  border: 1px solid black;
  padding: 5px;
  width: 40%;
}
button {
  background-color: #0A8F70;
  padding: 10px;
  margin: 30px 0px;
  outline: none;
  border: none;
  width: 40%;
}
button:hover {
  cursor: pointer;
}
h5 {
  margin-bottom: 70px;
}
</style>
