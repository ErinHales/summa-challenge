<template>
  <div class="navBar">
    <h2>{{title}}</h2>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  // data () {
  //   return {
  //     msg: 'Welcome to the Nav Bar'
  //   }
  // },
  props: ['title'],
  methods: {
    logout () {
      window.location.hash = '#/'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBar {
  width: 100vw;
  height: 100px;
  background-color: #C4C4C4;
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
