<template>
  <div class="signup">
    <NavBar title="Sign Up" />
    <Modal v-if="modal" :name="name" :username="username" :email="email" :signup="signup" :popUp="popUp" />
    <form action="" @submit.prevent="popUp">
      <h3>Name</h3>
      <input type="text" v-model="name">
      <h3>Username</h3>
      <input type="text" v-model="username">
      <h3>Email Address</h3>
      <input type="text" v-model="email">
      <h3>Password</h3>
      <input type="text" v-model="password1">
      <h3>Confirm Password</h3>
      <input type="text" v-model="password2">
      <button type="submit">Create Account</button>
      <h5>Already have an account? <router-link to="/">Login</router-link></h5>
    </form>
  </div>
</template>

<script>
import NavBar from './NavBar'
import Modal from './Modal'
import axios from 'axios'

export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      username: '',
      email: '',
      password1: '',
      password2: '',
      modal: false
    };
  },
  components: {
    NavBar,
    Modal
  },
  methods: {
    signup () {
      let userData = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password1
      };
      if (this.name && this.username && this.email && this.password1 && this.password1 === this.password2 && this.password1.length >= 12) {
        axios.post('/api/newuser', userData).then(response => {
          this.$store.commit({
            type: 'setUserData',
            data: response.data[0]
          })
          this.$store.commit({
            type: 'toggleLogin',
            toggle: true
          })
          window.location.hash = '#/users';
        });
      }
    },
    popUp () {
      this.modal = !this.modal
    }
  }
};
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
  background-color: #c4c4c4;
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
  margin-bottom: 15px;
}
</style>
