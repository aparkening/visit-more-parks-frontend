const fetchParks = (token) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  console.log(headers)
  return (dispatch) => {
    dispatch({ type: 'LOADING_PARKS' });
    fetch('http://localhost:3000/api/v1/parks',{
      method: "GET",
      headers,
      credentials: 'include'
    })   
    .then(response => response.json())
    .then(responseJSON => dispatch({ type: 'ADD_PARKS', events: responseJSON.parks }));
  };
}

const favoritePark = (token, id) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  console.log(headers)
  return (dispatch) => {
    dispatch({ type: 'FAVORITING_PARK' });
    fetch(`http://localhost:3000/api/v1/parks/favorite/#{id}`,{
      method: "POST",
      headers,
      credentials: 'include'
    })   
    .then(response => response.json())
    .then(responseJSON => dispatch({ type: 'ADD_FAVORITE', id }));
  };
}

const unFavoritePark = (token, id) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  console.log(headers)
  return (dispatch) => {
    dispatch({ type: 'UN_FAVORITING_PARK' });
    fetch(`http://localhost:3000/api/v1/parks/unfavorite/#{id}`,{
      method: "POST",
      headers,
      credentials: 'include'
    })   
    .then(response => response.json())
    .then(responseJSON => dispatch({ type: 'REMOVE_FAVORITE', id }));
  };
}

export {fetchParks, favoritePark, unFavoritePark}