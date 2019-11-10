import plaziMusicService from './platzi-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return plaziMusicService.get('/search', {
    params: {
      q,
      type
    }
  }).then(res => res.data)
}

export default trackService
