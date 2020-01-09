<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        pm-track(:track="track")
</template>

<script>
import PmTrack from '@/components/Track.vue'
import trackService from '@/services/track'

export default {
  components: { PmTrack },
  data () {
    return {
      track: {}
    }
  },
  created () {
    const id = this.$route.params.id

    trackService.getById(id)
      .then(res => {
        console.log(res)
        this.track = res
      })
  }
}
</script>

<style lang="scss" scoped>

.columns{
  margin: 20px;
}

</style>