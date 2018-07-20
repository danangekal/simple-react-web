const initialState = {
    posts: [],
    post: {},
    isLoading: false,
    isError: false,
    isSave: false,
    isDelete: false
  }
  
const homeReducer = function(state=initialState, action){
  switch (action.type) {
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
    case "READ_POST_PENDING":
      return {...state, isLoading: true, isError: false}
    case "READ_POST_FULFILLED":
      return {...state, post: action.payload.data, isLoading: false, isError: false}
    case "READ_POST_REJECTED":
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
    case "FILTER_POSTS_PENDING":
      return {...state, isLoading: true, isError: false}
    case "FILTER_POSTS_FULFILLED":
      return {...state, posts: action.payload.data, isLoading: false, isError: false}
    case "FILTER_POSTS_REJECTED":
      return {...state, isLoading: false, isError: true}
    default:
      return state
  }
}

export default homeReducer;