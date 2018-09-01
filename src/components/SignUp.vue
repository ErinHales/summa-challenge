<template>
  <div class="signup">
    <NavBar title="Sign Up" />
    <form action="" @submit.prevent="signup">
      <h3>Name</h3>
      <input type="text">
      <h3>Username</h3>
      <input type="text">
      <h3>Email Address</h3>
      <input type="text">
      <h3>Password</h3>
      <input type="text">
      <h3>Confirm Password</h3>
      <input type="text">
      <button type="submit">Create Account</button>
      <h5>Already have an account? <router-link to="/">Login</router-link></h5>
    </form>
  </div>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'SignUp',
  data () {
    return {
      msg: 'Welcome to the sign up page.'
    }
  },
  components: {
    NavBar
  },
  methods: {
    signup () {
      window.location.hash = '#/users'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signup {
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
  padding: 10px 30px;
  margin: 30px 0px;
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
  margin-bottom: 15px;
}
</style>
