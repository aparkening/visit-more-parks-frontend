const parksReducer = (state = { parks: [], loading: false }, action) => {
  switch(action.type) {
    case 'LOADING_PARKS':
      return {
        ...state,
        events: [...state.parks],
        loading: true
      }
    case 'ADD_FAVORITE':
      return {
        ...state,
        events: action.parks,
        loading: false
      }
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        events: action.parks,
        loading: false
      }      
    default:
      return state;
  }
}
 
export default parksReducer;