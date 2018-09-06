<template>
  <div class="navBar">
    <h2>{{title}}</h2>
    <button v-if="loggedIn" @click="logout">Logout<font-awesome-icon icon="angle-double-right" class="arrow" /></button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NavBar',
  props: ['title'],
  computed: {
    loggedIn () {
      return this.$store.state.loggedIn
    }
  },
  methods: {
    logout () {
      axios.put('/api/logout').then(() => {
        window.location.hash = '#/'
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBar {
  width: 100vw;
  height: 100px;
  background-color: #025670;
  margin-top: 0px;
}
h2 {
  text-align: center;
  color: white;
  position: absolute;
  top: 20px;
  width: 100vw;
  font-size: 20px;
}
button {
  float: right;
  background: #FFA202;
  padding: 5px;
  padding-left: 8px;
  border-radius: 3px;
  color: white;
  border: none;
  margin: 60px 40px 0px 60px;
  outline: none;
}
button:hover {
  cursor: pointer;
}
.arrow {
  margin: 0px 5px;
}
</style>
