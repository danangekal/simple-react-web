import { UserApi } from '../api/users';
import { PostApi } from '../api/posts';
import { AlbumApi } from '../api/albums';
import { CommentApi } from '../api/comments';

export function readProfile(id){
  return {
    type: "READ_PROFILE",
    payload: UserApi.readUser(id)
  }
}

export function allAlbums(params){
  return {
    type: "ALL_ALBUMS",
    payload: AlbumApi.filterAlbums(params)
  }
}

export function allPosts(params){
  return {
    type: "ALL_POSTS",
    payload: PostApi.filterPosts(params)
  }
}

export function createPost(data){
  return {
    type: "CREATE_POST",
    payload: PostApi.createPost(data)
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

export function deleteComment(id){
  return {
    type: "DELETE_COMMENT",
    payload: CommentApi.deleteComment(id)
  }
}

export function allFriends(params){
  return {
    type: "ALL_FRIENDS",
    payload: UserApi.filterUsers(params)
  }
}

