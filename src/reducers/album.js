const initialState = {
    album: {},
    isLoading: false,
    isError: false
  }
  
const albumReducer = function(state=initialState, action){
  switch (action.type) {
    case "READ_ALBUM_PENDING":
      return {...state, isLoading: true, isError: false}
    case "READ_ALBUM_FULFILLED":
      return {...state, album: action.payload.data, isLoading: false, isError: false}
    case "READ_ALBUM_REJECTED":
      return {...state, isLoading: false, isError: true}
    default:
      return state
  }
}

export default albumReducer;