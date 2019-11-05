<template lang="pug">
  #app
    .container
      h1 {{msg}}
      p {{1 + 1}}
      p {{'Hola' + 'Mundo'}}
      p {{ person.name }}
      p {{ person.name.toUpperCase() }}
      p {{JSON.stringify(person)}}
      p {{ true ? 'true' : 'false'}}
    br
    .container
      Ejercicio
</template>

<script>
import Ejercicio from './components/Ejercicio.vue'

export default {
  name: 'App',
  components: {
    Ejercicio
  },
  data: function () {
    return {
      msg: 'Hola todos amigos',
      person: {
        name: 'Luis'
      }
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
