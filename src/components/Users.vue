<template>
  <div class="users">
    <NavBar title="Users" />
    <div class="displayUsers">
      <User v-for='(user, i) in users' :key='i' :user='user' />
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'
import User from './User'

export default {
  name: 'users',
  data () {
    return {
      users: [{name: 'jj', username: 'pb & jj', email: 'jj@gmail.com'}, {name: 'User1', username: 'Username1', email: 'user1@gmail.com'}, {name: 'User2', username: 'Username2', email: 'user2@gmail.com'}, {name: 'User2', username: 'Username2', email: 'user2@gmail.com'}, {name: 'User3', username: 'Username3', email: 'user3@gmail.com'}]
    }
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
</style>
