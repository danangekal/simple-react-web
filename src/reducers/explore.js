const initialState = {
    explores: [],
    isLoading: false,
    isError: false
  }
  
const exploreReducer = function(state=initialState, action){
  switch (action.type) {
    case "ALL_EXPLORES_PENDING":
      return {...state, isLoading: true, isError: false}
    case "ALL_EXPLORES_FULFILLED":
      return {...state, explores: action.payload.data, isLoading: false, isError: false}
    case "ALL_EXPLORES_REJECTED":
      return {...state, isLoading: false, isError: true}
    case "FILTER_EXPLORES_PENDING":
      return {...state, isLoading: true, isError: false}
    case "FILTER_EXPLORES_FULFILLED":
      return {...state, explores: action.payload.data, isLoading: false, isError: false}
    case "FILTER_EXPLORES_REJECTED":
      return {...state, isLoading: false, isError: true}
    default:
      return state
  }
}

export default exploreReducer;