<template lang="pug">
  #app
    p-m-header
    section.section
      p {{person}}
      button(@click="addProp") Add prop
      nav.navbar
        .field.has-addons
          .control.is-expanded
            input.input(
              type="text"
              placeholder="Buscar canciones"
              v-model="searchQuery")
          .control
            button.button.is-info(@click="search") Buscar
          .control
            button.button.is-danger &times;
          .control
      .container
        p.is-size-7 Encontrado: {{ searchedMessage }}

      .container.margin_results
        .columns(v-for="t in tracks")
          .colum
            | {{ t.name }} --
          .colum
            | {{ t.artists[0].name }}
    p-m-footer
</template>

<script>
import trackService from './services/tracks'

import PMHeader from './components/layout/PMHeader.vue'
import PMFooter from './components/layout/PMFooter.vue'

export default {
  name: 'App',
  components: {
    PMFooter,
    PMHeader
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      person: {
        name: 'Luis'
      }
    }
  },
  computed: {
    searchedMessage () {
      return this.tracks.length
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      trackService.search(this.searchQuery)
        .then(
          res => {
            // console.log(res)
            this.tracks = res.tracks.items
          }
        )
    },
    addProp () {
      /* no se refleja en vue ya que vue no soprta por defecto
        propiedades reactivas dentro de un objeto
      */
      // this.person.lastName = 'Anaya'
      // esta es la forma en la vue permite agregaer reactivamente propiedades
      // this.$set(this.person, 'lastName', 'Anaya')

      // con el object assign
      this.person = Object.assign(
        {},
        this.person,
        { a: 1, b: 2 }
      )
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

  .margin_results {
    margin-top: 2rem;
  }

</style>
