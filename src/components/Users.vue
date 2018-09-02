<template>
  <div class="users">
    <NavBar title="Users" />
    <div class="displayUsers">
      <h2>Logged In User</h2>
      <div class="loggedInUser">
        <User :user="user" />
      </div>
      <User v-for='(user, i) in users' :key='i' :user='user' />
    </div>
  </div>
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
.users {
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
h5 {
  margin-bottom: 15px;
}
.loggedInUser {
  font-weight: bold;
  color: pink;
}
h2 {
  text-align: center;
  position: relative;
  top: 30px;
}
</style>
