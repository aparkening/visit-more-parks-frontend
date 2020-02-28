const setupAuth = () => {
  return (dispatch) => {
    dispatch({ type: 'GETTING_AUTHORIZATION' });
    fetch('http://localhost:3000/auth-check',{credentials: 'include'})
      .then(response => response.json())
      .then(responseJSON => dispatch({ type: 'ADD_AUTHORIZATION', csrf: responseJSON.csrf_auth_token }));
  };
}

const removeAuth = (token) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  console.log(headers)
  return (dispatch) => {
    dispatch({ type: 'REMOVING_AUTHORIZATION' });
    fetch('http://localhost:3000/logout',{
      method: "DELETE",
      headers,
      credentials: 'include'
    })   
    .then(response => response.json())
    .then(responseJSON => dispatch({ type: 'LOG_OUT'}));
  };
}

export {setupAuth, removeAuth}