const trackMixin = {
  methods: {
    selectTrack () {
      if (!this.track.preview_url) { return }
      this.$emit('select', this.track.id)

      this.$bus.$emit('setTrack', this.track)
    }
  }
}

export default trackMixin
