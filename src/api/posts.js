import axios from 'axios'; 

import { URL_API } from '../config/constants';

let POSTS_API = `${URL_API}/posts`;

const allPosts = () => {
  return axios.get(POSTS_API)
}

const createPost = (data) => {
  return axios.post(POSTS_API, data)
}

const readPost = (id) => {
  return axios.get(`${POSTS_API}/${id}`)
}

const updatePost = (id, data) => {
  return axios.put(`${POSTS_API}/${id}`, data)
}

const deletePost = (id) => {
  return axios.delete(`${POSTS_API}/${id}`)
}

const filterPosts = (params) => {
  return axios.get(`${POSTS_API}${params}`)
}

const PostApi = { allPosts, createPost, readPost, updatePost, deletePost, filterPosts }

export { PostApi }
