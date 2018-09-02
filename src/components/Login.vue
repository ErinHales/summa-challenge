<template>
  <div class="login">
    <NavBar title="Login" />
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
import axios from 'axios'

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
      axios.get(`/api/user/${this.username}`).then(response => {
        if (response.data[0]) {
          if (response.data[0].password === this.password) {
            this.$store.commit({
              type: 'setUserData',
              data: response.data[0]
            })
            this.$store.commit({
              type: 'toggleLogin',
              toggle: true
            })
            window.location.hash = '#/users'
          } else {
            alert(
              'Username or password is incorrect. Try again or go to sign up page.'
            )
          }
          // if (!response.data[0]) {
          //   alert('Username does not exist. Try again or go to sign up page.')
          // } else {
          //   alert('Password is not correct, try again.')
          // }
        }
      })
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
  background-color: #c4c4c4;
  padding: 30px;
  margin-top: 50px;
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
  background-color: #0a8f70;
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
