const parksReducer = (state = { parks: [], loading: false }, action) => {
  switch(action.type) {
    case 'LOADING_parks':
      return {
        ...state,
        events: [...state.parks],
        loading: true
      }
    case 'ADD_favorite':
      return {
        ...state,
        events: action.parks,
        loading: false
      }
    case 'REMOVE_favorite':
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