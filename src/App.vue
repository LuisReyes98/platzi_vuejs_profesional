<template lang="pug">
  #app
    section.section
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
            button.button
              span.is-size-7 Encontrado: {{ searchedMessage }}

      .container.margin_results
        .columns
          .colum(v-for="t in tracks") {{ t.name }},{{ t.artist }}
</template>

<script>
const tracks = [
  { name: 'lorem1', artist: '1' },
  { name: 'lore2', artist: 'Lorem2' },
  { name: 'lorem3', artist: 'Lorem3' }
]

export default {
  name: 'App',
  data: function () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  computed: {
    searchedMessage () {
      return this.tracks.length
    }
  },
  methods: {
    search () {
      console.log(this.searchQuery)
      this.tracks = tracks
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
