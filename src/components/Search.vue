<template lang="pug">
  main
    transition(name="move")
      pm-notification(v-show="showNotification")
        p(slot="body") No se encontraron resultados

    transition(name="move")
      pm-loader(v-show="isLoading")

    section.section(v-show="!isLoading")
      nav.nav
        .container
          input.input.is-large(
            type="text",
            placeholder="Buscar canciones",
            v-model="searchQuery"
            @keyup.enter="search"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      .container
        p
          small {{ searchMessage }}

      .container.results
        // .columns.is-multiline
        transition-group(name="fade", tag="div" class="columns is-multiline")
          .column.is-one-quarter(v-for="t in tracks", :key="t.id")
            pm-track(:track="t",
            :class="{ 'is-active': t.id === selectedTrack }",
            v-blur="t.preview_url",
            @select="setSelectedTrack")
      p Todos los derechos reservados
</template>

<script>
import trackService from '@/services/track'

import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'

export default {
  name: 'app',

  components: { PmTrack, PmLoader, PmNotification },

  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }

      this.isLoading = true
      this.tracks = []

      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style scoped lang="scss">
  .results {
    margin-top: 50px;
  }

  .is-active{
    border: 3px #23d160 solid;
  }
</style>
