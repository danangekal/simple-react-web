const initialState = {
    profile: {},
    friends: [],
    albums: [],
    posts: [],
    post: {},
    isLoading: false,
    isError: false,
    isDelete: false
  }
  
const profileReducer = function(state=initialState, action){
  switch (action.type) {
    case "READ_PROFILE_PENDING":
      return {...state, isLoading: true, isError: false}
    case "READ_PROFILE_FULFILLED":
      return {...state, profile: action.payload.data, isLoading: false, isError: false}
    case "READ_PROFILE_REJECTED":
      return {...state, isLoading: false, isError: true}
    case "ALL_FRIENDS_PENDING":
      return {...state, isLoading: true, isError: false}
    case "ALL_FRIENDS_FULFILLED":
      return {...state, friends: action.payload.data, isLoading: false, isError: false}
    case "ALL_FRIENDS_REJECTED":
      return {...state, isLoading: false, isError: true}
    case "ALL_ALBUMS_PENDING":
      return {...state, isLoading: true, isError: false}
    case "ALL_ALBUMS_FULFILLED":
      return {...state, albums: action.payload.data, isLoading: false, isError: false}
    case "ALL_ALBUMS_REJECTED":
      return {...state, isLoading: false, isError: true}
    case "ALL_POSTS_PENDING":
      return {...state, isLoading: true, isError: false}
    case "ALL_POSTS_FULFILLED":
      return {...state, posts: action.payload.data, isLoading: false, isError: false}
    case "ALL_POSTS_REJECTED":
      return {...state, isLoading: false, isError: true}
    case "CREATE_POST_PENDING":
      return {...state, isLoading: true, isError: false}
    case "CREATE_POST_FULFILLED":
      return {...state, post: action.payload.data, isLoading: false, isSave: true}
    case "CREATE_POST_REJECTED":
      return {...state, isLoading: false, isError: true}
    case "UPDATE_POST_PENDING":
      return {...state, isLoading: true, isError: false}
    case "UPDATE_POST_FULFILLED":
      return {...state, post: action.payload.data, isLoading: false, isError: false}
    case "UPDATE_POST_REJECTED":
      return {...state, isLoading: false, isError: true}
    case "DELETE_POST_PENDING":
      return {...state, isLoading: true, isError: false}
    case "DELETE_POST_FULFILLED":
      return {...state, isLoading: false, isDelete: true}
    case "DELETE_POST_REJECTED":
      return {...state, isLoading: false, isError: true}
    case "DELETE_COMMENT_PENDING":
      return {...state, isLoading: true, isError: false}
    case "DELETE_COMMENT_FULFILLED":
      return {...state, isLoading: false, isDelete: true}
    case "DELETE_COMMENT_REJECTED":
      return {...state, isLoading: false, isError: true}
    default:
      return state
  }
}

export default profileReducer;