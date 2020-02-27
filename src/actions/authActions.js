export const setupAuth = () => {
  return (dispatch) => {
    dispatch({ type: 'GETTING_AUTHORIZATION' });
    fetch('http://localhost:3000/auth-check',{credentials: 'include'})
      .then(response => response.json())
      .then(responseJSON => dispatch({ type: 'ADD_AUTHORIZATION', csrf: responseJSON.csrf_auth_token }));
  };
}