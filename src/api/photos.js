import axios from 'axios'; 

import { URL_API } from '../config/constants';

let PHOTOS_API = `${URL_API}/photos`;

const allPhotos = () => {
  return axios.get(PHOTOS_API)
}

const createPhoto = (data) => {
  return axios.post(PHOTOS_API, data)
}

const readPhoto = (id) => {
  return axios.get(`${PHOTOS_API}/${id}`)
}

const updatePhoto = (id, data) => {
  return axios.put(`${PHOTOS_API}/${id}`, data)
}

const deletePhoto = (id) => {
  return axios.delete(`${PHOTOS_API}/${id}`)
}
const filterPhotos = (params) => {
  return axios.get(`${PHOTOS_API}${params}`)
}

const PhotoApi = { allPhotos, createPhoto, readPhoto, updatePhoto, deletePhoto, filterPhotos }

export { PhotoApi }
