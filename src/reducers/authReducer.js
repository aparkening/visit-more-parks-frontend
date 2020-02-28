const authReducer = (state = { csrf: "", activeUser: false, loading: false }, action) => {
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
        loading: false,
        activeUser: true
      }
    case 'REMOVING_AUTHORIZATION':
      return {
        ...state,
        csrf: state.csrf,
        loading: true
      }      
    case 'LOG_OUT':
      return {
        ...state,
        loading: false,
        activeUser: false
      }      
    default:
      return state;
  }
}
 
export default authReducer;