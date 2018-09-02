<template>
  <div class="login">
    <NavBar title="Login" />
    <v-form action="" @submit.prevent="login">
      <v-text-field
        color="#0a8f70"
        type="text"
        v-model="username"
        label="Email"
        counter="50"
        :rules="[() => !!username || 'This field is required']"
        required></v-text-field>
      <v-text-field
        color="#0a8f70"
        type="text"
        v-model="password"
        label="Password"
        counter="50"
        :rules="[() => !!password || 'This field is required']"
        required></v-text-field>
      <v-btn block type="submit" color="#0a8f70">LOG IN</v-btn>
      <h5>Don't have an account? <router-link to="/signup" class="link">Sign Up</router-link></h5>
    </v-form>
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
        if (!response.data[0]) {
          alert('Username does not exist. Try again or go to sign up page.')
        } else {
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
            alert('Password is not correct, try again.')
          }
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
.link {
  color: black;
}
</style>
