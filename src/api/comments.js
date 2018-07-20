import axios from 'axios'; 

import { URL_API } from '../config/constants';

let COMMENTS_API = `${URL_API}/comments`;

const allComments = () => {
  return axios.get(COMMENTS_API)
}

const createComment = (data) => {
  return axios.post(COMMENTS_API, data)
}

const readComment = (id) => {
  return axios.get(`${COMMENTS_API}/${id}`)
}

const updateComment = (id, data) => {
  return axios.put(`${COMMENTS_API}/${id}`, data)
}

const deleteComment = (id) => {
  return axios.delete(`${COMMENTS_API}/${id}`)
}

const filterComments = (params) => {
  return axios.get(`${COMMENTS_API}${params}`)
}

const CommentApi = { allComments, createComment, readComment, updateComment, deleteComment, filterComments }

export { CommentApi }
