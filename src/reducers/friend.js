const initialState = {
    friends: [],
    isLoading: false,
    isError: false,
    isSave: false,
    isDelete: false
  }
  
const userReducer = function(state=initialState, action){
  switch (action.type) {
    case "ALL_FRIENDS_PENDING":
      return {...state, isLoading: true, isError: false}
    case "ALL_FRIENDS_FULFILLED":
      return {...state, friends: action.payload.data, isLoading: false, isError: false}
    case "ALL_FRIENDS_REJECTED":
      return {...state, isLoading: false, isError: true}
    case "FILTER_FRIENDS_PENDING":
      return {...state, isLoading: true, isError: false}
    case "FILTER_FRIENDS_FULFILLED":
      return {...state, friends: action.payload.data, isLoading: false, isError: false}
    case "FILTER_FRIENDS_REJECTED":
      return {...state, isLoading: false, isError: true}
    default:
      return state
  }
}

export default userReducer;