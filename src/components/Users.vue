<template>
<transition name="fade">
  <div class="users">
    <NavBar title="Users" />
    <div class="loggedInUser">
      <User :user="user"/>
    </div>
    <div class="displayUsers">
      <User v-for='(user, i) in users' :key='i' :user='user' />
    </div>
  </div>
</transition>
</template>

<script>
import NavBar from './NavBar'
import User from './User'
import axios from 'axios'

export default {
  name: 'users',
  data () {
    return {
      users: []
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    loggedIn () {
      return this.$store.state.loggedIn
    }
  },
  mounted () {
    axios.get('/api/users').then(response => {
      this.users = response.data
    })
  },
  components: {
    NavBar,
    User
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: 200;
  font-size: 12px;
  float: left;
}
.loggedInUser {
  width: 60vw;
  margin-left: 20vw;
}
.displayUsers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.displayUsers > div {
  width: 25vw;
}
</style>
