const initialState = {
    photo: {},
    isLoading: false,
    isError: false
  }
  
const photoReducer = function(state=initialState, action){
  switch (action.type) {
    case "READ_PHOTO_PENDING":
      return {...state, isLoading: true, isError: false}
    case "READ_PHOTO_FULFILLED":
      return {...state, photo: action.payload.data, isLoading: false, isError: false}
    case "READ_PHOTO_REJECTED":
      return {...state, isLoading: false, isError: true}
    default:
      return state
  }
}

export default photoReducer;