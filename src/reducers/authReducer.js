export const authErrored = (state = false, action) => {
  switch (action.type) {
    case 'AUTH_ERRORED':
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

export const csrf = (state = false, action) => {
  switch(action.type) {
    case 'ADD_AUTHORIZATION':
      return action.csrf;
    case 'LOG_OUT':
      return action.csrf;
    default:
      return state;
  }
}