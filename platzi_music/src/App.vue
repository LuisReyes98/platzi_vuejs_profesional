<template lang="pug">
  #app
    img(src="./assets/logo.png" alt="Vue logo")
    h1 {{msg}}
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      msg: 'Hola todos amigos'
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
