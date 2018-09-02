<template>
  <div class="navBar">
    <h2>{{title}}</h2>
    <button v-if="loggedIn" @click="logout">Logout</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NavBar',
  props: ['title'],
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    }
  },
  methods: {
    logout() {
      axios.put('/api/logout').then(() => {
        window.location.hash = '#/';
      })
      this.$store.commit({
        type: 'deleteUserData'
      })
      this.$store.commit({
        type: 'toggleLogin',
        toggle: false
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBar {
  width: 100vw;
  height: 100px;
  background-color: #c4c4c4;
  margin-top: 0px;
}
h2 {
  text-align: center;
  font-size: 20px;
}
button {
  float: right;
  position: relative;
  bottom: 40px;
  background: transparent;
  border: none;
  margin-right: 20px;
  outline: none;
}
button:hover {
  cursor: pointer;
}
</style>
