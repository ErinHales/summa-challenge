<template>
<transition name="fade">
  <div class="login">
    <NavBar title="LOG IN" />
    <v-form action="" @submit.prevent="login" class="form">
      <v-text-field
        color="#00BFFE"
        type="text"
        v-model="username"
        label="Email"
        counter="50"
        class="input"
        :rules="[() => !!username || 'This field is required']"
        required></v-text-field>
      <v-text-field
        color="#00BFFE"
        type="text"
        v-model="password"
        label="Password"
        counter="50"
        class="input"
        :rules="[() => !!password || 'This field is required']"
        required></v-text-field>
        <h5>Don't have an account? <router-link to="/signup" class="link">Sign Up<font-awesome-icon icon="angle-double-right" class="arrow" /></router-link></h5>
      <v-btn block type="submit" color="#00BFFE" class="submit">LOG IN</v-btn>
    </v-form>
  </div>
</transition>
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
      axios.get(`/api/user/${this.username}/${this.password}`).then(response => {
        if (response.data === 'Username does not exist') {
          alert('Email does not exist. Try again or go to sign up page')
        } else if (response.data === 'Password did not match the email') {
          alert('Incorrect password. Try again or go to sign up page.')
        } else {
          this.$store.commit({
            type: 'setUserData',
            data: response.data
          })
          this.$store.commit({
            type: 'toggleLogin',
            toggle: true
          })
          window.location.hash = '#/users'
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
  background-color: #025670;
  height: 100vh;
}
.v-form {
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 60vh;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: 50px;
  overflow: hidden;
  border-radius: 5px;
  padding-top: 50px;
}
.submit {
  position: relative;
  top: 10px;
  color: white;
}
.link {
  color: white;
  background-color: #FFA202;
  padding: 5px;
  text-decoration: none;
  border-radius: 3px;
}
.arrow {
  margin: 0px 5px;
}
</style>
