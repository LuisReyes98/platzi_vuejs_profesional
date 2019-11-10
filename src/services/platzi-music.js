import axios from 'axios'
import configService from './config'

const platziMusicService = axios.create({
  baseUrl: configService.apiUrl
})

export default platziMusicService
