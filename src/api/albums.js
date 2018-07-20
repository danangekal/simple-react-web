import axios from 'axios'; 

import { URL_API } from '../config/constants';

let ALBUMS_API = `${URL_API}/albums`;

const allAlbums = () => {
  return axios.get(ALBUMS_API)
}

const createAlbum = (data) => {
  return axios.post(ALBUMS_API, data)
}

const readAlbum = (id) => {
  return axios.get(`${ALBUMS_API}/${id}`)
}

const updateAlbum = (id, data) => {
  return axios.put(`${ALBUMS_API}/${id}`, data)
}

const deleteAlbum = (id) => {
  return axios.delete(`${ALBUMS_API}/${id}`)
}

const filterAlbums = (params) => {
  return axios.get(`${ALBUMS_API}${params}`)
}

const AlbumApi = { allAlbums, createAlbum, readAlbum, updateAlbum, deleteAlbum, filterAlbums }

export { AlbumApi }
