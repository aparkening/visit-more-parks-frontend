export const parkEventsErrored = (bool) => {
  return {
    type: 'PARK_EVENTS_ERRORED',
    hasErrored: bool
  };
}

export const parkEventsLoading = (bool) => {
  return {
    type: 'PARK_EVENTS_LOADING',
    isLoading: bool
  };
}

export const parkEventsFetchSuccess = (events) => {
  return {
    type: 'PARK_EVENTS_FETCH_SUCCESS',
    events
  };
}

export const fetchParkEvents = (token) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  return (dispatch) => {
    dispatch(parkEventsLoading(true));
    fetch('http://localhost:3000/api/v1/park-events',{
      method: "GET",
      headers,
      credentials: 'include'
    })
    .then((response) => {
      if (!response.ok) {
          throw Error(response.statusText);
      }
      dispatch(parkEventsLoading(false));
      return response;
    })
    .then((response) => response.json())
    .then((res) => dispatch({ type: 'ADD_PARK_EVENTS', parkEvents: res.events }))
    .catch(() => dispatch(parkEventsErrored(true)))
  };
}

export const addParkEvent = (token, obj) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  // console.log("Adding parkEvent to Rails server...")
  // console.log(obj)

  // console.log(token)
  return (dispatch) => {
    dispatch(parkEventsLoading(true));
    // dispatch({ type: 'DELETING_EVENT' });
    fetch(`http://localhost:3000/api/v1/park-events`,{
      method: "POST",
      headers,
      credentials: 'include',
      body: JSON.stringify(obj)
    })   
    .then((response) => {
      if (!response.ok) {
        // console.log("There's an error");
        // console.log(obj) 
        throw Error(response.statusText);
      }
      dispatch(parkEventsLoading(false));
      return response;
    })
    .then((response) => response.json())
    .then((res) => dispatch({ type: 'ADD_PARK_EVENT', parkEvent: res.parkEvent }))
    .catch(() => dispatch(parkEventsErrored(true)))
  };
}

export const deleteParkEvent = (token, id) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  return (dispatch) => {
    dispatch(parkEventsLoading(true));
    // dispatch({ type: 'DELETING_EVENT' });
    fetch(`http://localhost:3000/api/v1/park-events/#{id}`,{
      method: "DELETE",
      headers,
      credentials: 'include'
    })   
    .then((response) => {
      if (!response.ok) {
          throw Error(response.statusText);
      }
      dispatch(parkEventsLoading(false));
      return response;
    })
    .then((response) => response.json())
    .then((res) => dispatch({ type: 'DELETE_PARK_EVENT', id }))
    .catch(() => dispatch(parkEventsErrored(true)))
  };
}

export const updateParkEvent = (token, id) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  return (dispatch) => {
    dispatch(parkEventsLoading(true));
    // dispatch({ type: 'UPDATING_EVENT' });
    fetch(`http://localhost:3000/api/v1/park-events/#{id}`,{
      method: "PATCH",
      headers,
      credentials: 'include'
    })   
    .then((response) => {
      if (!response.ok) {
          throw Error(response.statusText);
      }
      dispatch(parkEventsLoading(false));
      return response;
    })
    .then((response) => response.json())
    .then((res) => dispatch({ type: 'UPDATE_PARK_EVENT', id }))
    .catch(() => dispatch(parkEventsErrored(true)))
  };
}