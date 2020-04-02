export const authErrored = (state = false, action) => {
  switch (action.type) {
    case 'AUTH_ERRORED':
      // console.log("Error Action")
      // console.log(action)
      return action.hasErrored;
    default:
      return state;
  }
}

export const authLoading = (state = false, action) => {
  console.log(action)
  switch(action.type) {
    case 'UPDATING_AUTHORIZATION':
      return action.isLoading;
    default:
      return state;
  }
}

// const authReducer = (state = { csrf: "", activeUser: false, loading: false }, action) => {

export const csrf = (state = false, action) => {

  switch(action.type) {
    case 'ADD_AUTHORIZATION':
      return action.csrf;
      // console.log("Adding Authorization")
      // console.log(action);
      // return ({csrf: action.csrf, loggedIn: true});

    case 'LOG_OUT':
      return action.csrf;
      // console.log("Logging out")
      // console.log(action);    
      // return ({csrf: action.csrf, loggedIn: false});
    default:
      return state;
  }
}