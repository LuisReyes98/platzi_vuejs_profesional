import axios from 'axios'
import configService from './config'

const platziMusicService = axios.create({
  baseURL: configService.apiURL
})

export default platziMusicService
