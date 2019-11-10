<template lang="pug">
  #app
    .container
      h1 {{name}}
      input(v-model="name")
      //- p {{1 + 1}}
      //- p {{'Hola' + 'Mundo'}}
      //- p {{ person.name }}
      //- p {{ person.name.toUpperCase() }}
      //- p {{JSON.stringify(person)}}
      //- p {{ true ? 'true' : 'false'}}
      h2 {{formatName}}
      button( @click="format" ) Format
    br
    .container
      //- Ejercicio
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
      name: 'Luis Rogelio Reyes Hernandez',
      formatName: ''
    }
  },
  methods: {
    format () {
      this.formatName = this.name.split(' ').join('-')
    }
  }
  // watch: {
  //   msg (newVal, oldVal) {
  //     console.log(oldVal, newVal)
  //   }
  // }
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
