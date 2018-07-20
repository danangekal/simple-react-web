import { PostApi } from '../api/posts';
import { CommentApi } from '../api/comments';

export function readPost(params){
  return {
    type: "READ_POST",
    payload: PostApi.filterPosts(params)
  }
}

export function createComment(data){
  return {
    type: "CREATE_COMMENT",
    payload: CommentApi.createComment(data)
  }
}