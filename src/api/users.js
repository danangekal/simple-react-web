import axios from 'axios'; 

import { URL_API } from '../config/constants';

let USERS_API = `${URL_API}/users`;

const allUsers = () => {
  return axios.get(USERS_API)
}

const createUser = (data) => {
  return axios.post(USERS_API, data)
}

const readUser = (id) => {
  return axios.get(`${USERS_API}/${id}`)
}

const updateUser = (id, data) => {
  return axios.put(`${USERS_API}/${id}`, data)
}

const deleteUser = (id) => {
  return axios.delete(`${USERS_API}/${id}`)
}

const filterUsers = (params) => {
  return axios.get(`${USERS_API}${params}`)
}

const UserApi = { allUsers, createUser, readUser, updateUser, deleteUser, filterUsers }

export { UserApi }
