<template>
<transition name="fade">
  <div class="signup">
    <NavBar title="Sign Up" />
    <transition name="fade">
      <Modal v-if="modal" :name="name" :username="username" :email="email" :signup="signup" :popUp="popUp" />
    </transition>
    <v-form action="" @submit.prevent="popUp" lazy-validation>
      <v-text-field
        color="#00BFFE"
        type="text"
        v-model="name"
        label="Name"
        counter="50"
        :rules="[rules.required]"
        required></v-text-field>
      <v-text-field
        color="#00BFFE"
        type="text"
        v-model="username"
        label="Username"
        counter="50"
        :rules="[rules.required]"
        required></v-text-field>
      <v-text-field
        color="#00BFFE"
        type="text"
        v-model="email"
        label="Email"
        counter="50"
        :rules="[rules.required, rules.email]"
        required></v-text-field>
      <v-text-field
        color="#00BFFE"
        type="text"
        v-model="password1"
        label="Password"
        counter="40"
        :rules="[rules.required, rules.min]"
        hint="At least 12 characters"
        required></v-text-field>
      <v-text-field
        color="#00BFFE"
        type="text"
        v-model="password2"
        label="Confirm Password"
        counter="40"
        :rules="[rules.required, rules.passwordMatch]"
        hint="At least 12 characters"
        required></v-text-field>
      <h5>Already have an account? <router-link to="/" class="link">Login<font-awesome-icon icon="angle-double-right" class="arrow" /></router-link></h5>
      <v-btn block color="#00BFFE" type="submit" class="submit">Create Account</v-btn>
    </v-form>
  </div>
</transition>
</template>

<script>
import NavBar from './NavBar'
import Modal from './Modal'
import axios from 'axios'

export default {
  name: 'SignUp',
  data () {
    return {
      name: '',
      username: '',
      email: '',
      password1: '',
      password2: '',
      modal: false,
      validEmail: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 12 || 'Min 12 characters',
        passwordMatch: v => v === this.password1 || 'Passwords do not match',
        email: v => this.validate() || 'Invalid Email'
      }
    }
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
      }
      if (
        this.name !== '' &&
        this.username !== '' &&
        this.validEmail === true &&
        this.password1.length >= 12 &&
        this.password1 === this.password2
      ) {
        axios.post('/api/newuser', userData).then(response => {
          this.$store.commit({
            type: 'setUserData',
            data: response.data[0]
          })
          this.$store.commit({
            type: 'toggleLogin',
            toggle: true
          })
          window.location.hash = '#/users'
        })
      }
    },
    popUp () {
      if (
        this.name !== '' &&
        this.username !== '' &&
        this.validEmail === true &&
        this.password1.length >= 12 &&
        this.password1 === this.password2
      ) {
        this.modal = !this.modal
      } else {
        alert('You must fill in all fields!')
      }
    },
    validate () {
      if (this.email.indexOf('@') >= 0 && this.email.indexOf('.com') === this.email.length - 4) {
        this.validEmail = true
        return true
      }
      return false
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
  background-color: #025670;
  height: 100vh;
}
.v-form {
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 80vh;
  justify-content: center;
  align-items: center;
  background-color: white;
  overflow: hidden;
  border-radius: 5px;
  padding-top: 10px;
}
.submit {
  position: relative;
  top: 6px;
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
