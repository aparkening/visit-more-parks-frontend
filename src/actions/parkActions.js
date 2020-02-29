export const parksErrored = (bool) => {
  return {
    type: 'PARKS_ERRORED',
    hasErrored: bool
  };
}

export const parksLoading = (bool) => {
  return {
    type: 'PARKS_LOADING',
    isLoading: bool
  };
}

export const parksFetchSuccess = (parks) => {
  return {
    type: 'PARKS_FETCH_SUCCESS',
    parks
  };
}


export const fetchParks = (token) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  console.log(headers)
  return (dispatch) => {
    dispatch(parksLoading(true));
    // dispatch({ type: 'LOADING_PARKS' });
    fetch('http://localhost:3000/api/v1/parks',{
      method: "GET",
      headers,
      credentials: 'include'
    })   
    .then((response) => {
      if (!response.ok) {
          throw Error(response.statusText);
      }
      dispatch(parksLoading(false));
      return response;
  })
  .then((response) => response.json())
  .then((res) => dispatch({ type: 'ADD_PARKS', parks: res.parks }))
  .catch(() => dispatch(parksErrored(true)));
  }
}

export const favoritePark = (token, id) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  console.log(headers)
  return (dispatch) => {
    // dispatch({ type: 'FAVORITING_PARK' });
    dispatch(parksLoading(true));
    fetch(`http://localhost:3000/api/v1/parks/favorite/#{id}`,{
      method: "POST",
      headers,
      credentials: 'include'
    })   
    .then((response) => {
      if (!response.ok) {
          throw Error(response.statusText);
      }
      dispatch(parksLoading(false));
      return response;
    })
    .then(response => response.json())
    .then(res => dispatch({ type: 'ADD_FAVORITE', id }))
    .catch(() => dispatch(parksErrored(true)))
  };
}

export const unFavoritePark = (token, id) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  console.log(headers)
  return (dispatch) => {
    // dispatch({ type: 'UN_FAVORITING_PARK' });
    dispatch(parksLoading(true));
    fetch(`http://localhost:3000/api/v1/parks/unfavorite/#{id}`,{
      method: "POST",
      headers,
      credentials: 'include'
    })   
    .then((response) => {
      if (!response.ok) {
          throw Error(response.statusText);
      }
      dispatch(parksLoading(false));
      return response;
    })
    .then((response) => response.json())
    .then((res) => dispatch({ type: 'REMOVE_FAVORITE', id }))
    .catch(() => dispatch(parksErrored(true)))
  };
}
