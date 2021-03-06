import Vue from 'vue'
import Vuex from 'vuex'
import trackService from '@/services/track'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    track: {}
  },

  getters: {
    trackTitle (state, getters) {
      if (!state.track.name) { return '' } // para evitar error cuando aun no ha cargado el track
      return `${state.track.name} - ${state.track.artists[0].name}`
    }
  },

  mutations: {
    setTrack (state, track) {
      state.track = track
    }
  },
  actions: {
    getTrackById (context, payload) {
      return trackService.getById(payload.id) // promesa
        .then(res => {
          context.commit('setTrack', res)
          return res
        })
    }
  }
})

export default store
