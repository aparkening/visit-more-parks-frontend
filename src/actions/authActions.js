export const authErrored = (bool) => {
  return {
    type: 'AUTH_ERRORED',
    hasErrored: bool
  };
}

export const authLoading = (bool) => {
  return {
    type: 'UPDATING_AUTHORIZATION',
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

// Set csrf token
export const setupAuth = () => {
  return (dispatch) => {
    dispatch(authLoading(true));
    fetch('http://localhost:3000/auth-check',{credentials: 'include'})
    .then((response) => {
      if (!response.ok) { throw Error(response.statusText); }
      // dispatch(authLoading(false));
      return response;
    })
    .then((response) => response.json())
    .then((res) => {
      dispatch(authFetchSuccess(res.csrf_auth_token));
      dispatch(authLoading(false));
    })
    .catch(() => dispatch(authErrored(true)));
  }
};

// Remove csrf token
export const removeAuth = (token) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  return (dispatch) => {
    dispatch(authLoading(true));
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
    .then((res) => {
      // dispatch(authLoading(false));
      dispatch(authLogout(false));
    })
    .catch(() => dispatch(authErrored(true)));
  };
}