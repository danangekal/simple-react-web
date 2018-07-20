import { PostApi } from '../api/posts';

export function allPosts(){
  return {
    type: "ALL_POSTS",
    payload: PostApi.allPosts()
  }
}

export function createPost(data){
  return {
    type: "CREATE_POST",
    payload: PostApi.createPost(data)
  }
}

export function readPost(id){
  return {
    type: "READ_POST",
    payload: PostApi.readPost(id)
  }
}

export function updatePost(id, data){
  return {
    type: "UPDATE_POST",
    payload: PostApi.updatePost(id, data)
  }
}

export function deletePost(id){
  return {
    type: "DELETE_POST",
    payload: PostApi.deletePost(id)
  }
}

export function filterPosts(params){
  return {
    type: "FILTER_POSTS",
    payload: PostApi.filterPosts(params)
  }
}