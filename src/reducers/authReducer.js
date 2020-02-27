const authReducer = (state = { csrf: null, loading: false }, action) => {
  switch(action.type) {
    case 'GETTING_AUTHORIZATION':
      return {
        ...state,
        csrf: state.csrf,
        loading: true
      }
    case 'ADD_AUTHORIZATION':
      return {
        ...state,
        csrf: action.csrf,
        loading: false
      }
    case 'REMOVE_AUTHORIZATION':
      return {
        ...state,
        csrf: action.csrf,
        loading: false
      }      
    default:
      return state;
  }
}
 
export default authReducer;