export const authErrored = (state = false, action) => {
  switch (action.type) {
    case 'AUTH_ERRORED':
      console.log("Error Action")
      console.log(action)
      return action.hasErrored;
    default:
      return state;
  }
}

export const authLoading = (state = false, action) => {
  switch(action.type) {
    case 'GETTING_AUTHORIZATION':
      console.log("Getting Action")
      console.log(action)
      return action.isLoading;
    default:
      return state;
  }
}

// const authReducer = (state = { csrf: "", activeUser: false, loading: false }, action) => {

export const csrf = (state = false, action) => {

  switch(action.type) {
    // case 'GETTING_AUTHORIZATION':
    //   return {
    //     ...state,
    //     csrf: state.csrf,
    //     loading: true
    //   }
    case 'ADD_AUTHORIZATION':
      console.log(action);
      return action.csrf;

    // case 'REMOVING_AUTHORIZATION':
    //   return {
    //     ...state,
    //     csrf: state.csrf,
    //     loading: true
    //   }      
    case 'LOG_OUT':
      // return {
      //   ...state,
      //   loading: false,
      //   activeUser: false
      // }      
      console.log("Logging out")
      console.log(action);
      return action.csrf;
    default:
      return state;
  }
}
 
// export default authReducer;