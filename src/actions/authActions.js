export const authErrored = (bool) => {
  return {
    type: 'AUTH_ERRORED',
    hasErrored: bool
  };
}

export const authLoading = (bool) => {
  return {
    type: 'GETTING_AUTHORIZATION',
    isLoading: bool
  };
}

export const authFetchSuccess = (csrf) => {
  return {
    type: 'ADD_AUTHORIZATION',
    csrf: csrf
  };
}

export const authLogout = (csrf) => {
  return {
    type: 'LOG_OUT',
    csrf: csrf
  };
}

export const setupAuth = () => {
  return (dispatch) => {
    dispatch(authLoading(true));
    // dispatch({ type: 'GETTING_AUTHORIZATION' });
    fetch('http://localhost:3000/auth-check',{credentials: 'include'})
      // .then(response => response.json())
      // .then(responseJSON => dispatch({ type: 'ADD_AUTHORIZATION', csrf: responseJSON.csrf_auth_token }));
    .then((response) => {
      if (!response.ok) { throw Error(response.statusText); }
      dispatch(authLoading(false));
      return response;
    })
    .then((response) => response.json())
    // .then((res) => dispatch({ type: 'ADD_AUTHORIZATION', csrf: res.csrf_auth_token }))
    .then(res => dispatch(authFetchSuccess(res.csrf_auth_token)))
    .catch(() => dispatch(authErrored(true)));
  }
};

export const removeAuth = (token) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  console.log(headers)
  return (dispatch) => {
    dispatch(authLoading(true));
    // dispatch({ type: 'REMOVING_AUTHORIZATION' });
    fetch('http://localhost:3000/logout',{
      method: "DELETE",
      headers,
      credentials: 'include'
    })   
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(authLoading(false));
      return response;
    })
    .then((response) => response.json())
    // .then((res) => dispatch({ type: 'LOG_OUT', csrf: false }))
    .then(res => dispatch(authLogout(false)))
    // .then(res => dispatch(setupAuth()))
    .catch(() => dispatch(authErrored(true)));
  };
}