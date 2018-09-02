<template>
  <div class="signup">
    <NavBar title="Sign Up" />
    <Modal v-if="modal" :name="name" :username="username" :email="email" :signup="signup" :popUp="popUp" />
    <v-form action="" @submit.prevent="popUp">
      <v-text-field 
        color="#0a8f70" 
        type="text" 
        v-model="name" 
        label="Name"
        counter="50"
        :rules="[rules.required]"
        required></v-text-field>
      <v-text-field 
        color="#0a8f70" 
        type="text" 
        v-model="username" 
        label="Username"
        counter="50"
        :rules="[rules.required]"
        required></v-text-field>
      <v-text-field 
        color="#0a8f70" 
        type="text" 
        v-model="email" 
        label="Email"
        counter="50"
        :rules="[rules.required]"
        required></v-text-field>
      <v-text-field 
        color="#0a8f70" 
        type="text" 
        v-model="password1" 
        label="Password"
        counter="40"
        :rules="[rules.required, rules.min]"
        hint="At least 12 characters"
        required></v-text-field>
      <v-text-field 
        color="#0a8f70"
        type="text" 
        v-model="password2" 
        label="Confirm Password"
        counter="40"
        :rules="[rules.required, rules.passwordMatch]"
        hint="At least 12 characters"
        required></v-text-field>
      <v-btn block color="#0a8f70" type="submit">Create Account</v-btn>
      <h5>Already have an account? <router-link to="/" class="link">Login</router-link></h5>
    </v-form>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import Modal from "./Modal";
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: '',
      username: '',
      email: '',
      password1: '',
      password2: '',
      modal: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 12 || 'Min 12 characters',
        passwordMatch: v => v === this.password1 || 'Passwords do not match',
        email: v => v.charAt('@') >= -1 || 'Invalid Email'
      }
    };
  },
  components: {
    NavBar,
    Modal
  },
  methods: {
    signup() {
      let userData = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password1
      };
      if (
        this.name &&
        this.username &&
        this.email &&
        this.password1 &&
        this.password1 === this.password2 &&
        this.password1.length >= 12
      ) {
        axios.post("/api/newuser", userData).then(response => {
          this.$store.commit({
            type: "setUserData",
            data: response.data[0]
          });
          this.$store.commit({
            type: "toggleLogin",
            toggle: true
          });
          window.location.hash = "#/users";
        });
      }
    },
    popUp() {
      this.modal = !this.modal;
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
.link {
  color: black;
}
</style>
