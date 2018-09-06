<template>
  <div class="modal">
    <div>
      <h3>Account Information</h3>
      <p>Name: {{name}}</p>
      <p>Username: {{username}}</p>
      <p>Email: {{email}}</p>
      <h3>Is this information correct?</h3>
      <div>
        <v-btn block color="#FFA202" @click="signup">Confirm</v-btn>
        <v-btn block color="#FFA202" @click="popUp">Nope</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['name', 'username', 'email', 'signup', 'popUp']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.7);
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal > div {
  width: 43vw;
  background-color: white;
  padding: 50px;
  text-align: center;
}
@media (max-width: 1000px) {
  .modal > div {
    width: 55%;
  }
}
@media (max-width: 700px) {
  .modal > div {
    width: 85%;
  }
}
</style>
