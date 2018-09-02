<template>
  <div class="modal">
    <div>
      <h3>Create Account</h3>
      <p>Name: {{name}}</p>
      <p>Username: {{username}}</p>
      <p>Email: {{email}}</p>
      <h3>Is this information correct?</h3>
      <div>
        <button @click="signup">Confirm</button>
        <button @click="popUp">Nope</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ['name', 'username', 'email', 'signup', 'popUp']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal > div {
  width: 40vw;
  background-color: #0a8f70;
  padding: 50px;
}
</style>
