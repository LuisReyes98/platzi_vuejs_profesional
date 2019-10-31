<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >

    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      msg: 'Hola todos amigos'
    }
  }
}
</script>

<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
