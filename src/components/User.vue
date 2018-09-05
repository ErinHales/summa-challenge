<template>
  <v-card class="user">
    <v-img
      :src="img"
      aspect-ratio="2.75"
    ></v-img>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{user.name}}</h3>
        <h4>{{user.username}}</h4>
      </div>
      <v-spacer></v-spacer>
      <div class="email">{{user.email}}</div>
    </v-card-title>
  </v-card>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'SignUp',
  data () {
    return {
      img: ''
    }
  },
  props: ['user'],
  components: {
    NavBar
  },
  mounted () {
    this.img = 'https://picsum.photos/800?random'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user {
  text-align: center;
  margin: 50px;
  font-weight: 100;
}
h3, h4 {
  text-align: left;
}
.email {
  color: white;
  background-color: #FFA202;
  padding: 10px;
  text-decoration: none;
  border-radius: 3px;
  float: right;
}
.email:hover {
  cursor: pointer;
}
</style>
