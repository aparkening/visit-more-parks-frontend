export const eventsErrored = (bool) => {
  return {
    type: 'EVENTS_ERRORED',
    hasErrored: bool
  };
}

export const eventsLoading = (bool) => {
  return {
    type: 'EVENTS_LOADING',
    isLoading: bool
  };
}

export const eventsFetchSuccess = (events) => {
  return {
    type: 'EVENTS_FETCH_SUCCESS',
    events
  };
}

export const fetchEvents = (token) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  return (dispatch) => {
    dispatch(eventsLoading(true));
    fetch('http://localhost:3000/api/v1/events',{
      method: "GET",
      headers,
      credentials: 'include'
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(eventsLoading(false));
      return response;
    })
    .then((response) => response.json())
    .then((res) => dispatch({ type: 'ADD_EVENTS', googleEvents: res.googleEvents, parkEvents: res.parkEvents }))
    .catch(() => dispatch(eventsErrored(true)))
  };
}
    // .then(response => response.json())
    // .then(responseJSON => dispatch({ type: 'ADD_EVENTS', events: responseJSON.events }));


export const addEvent = (token, obj) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  // console.log("Adding event to Rails server...")
  // console.log(obj)
  return (dispatch) => {
    dispatch(eventsLoading(true));
    fetch(`http://localhost:3000/api/v1/events`,{
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
      dispatch(eventsLoading(false));
      return response;
    })
    .then((response) => response.json())
    .then((res) => dispatch({ type: 'ADD_EVENT', event: res.event }))
    .catch(() => dispatch(eventsErrored(true)))
  };
}

export const deleteEvent = (token, id) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  return (dispatch) => {
    dispatch(eventsLoading(true));
    fetch(`http://localhost:3000/api/v1/events/${id}`,{
      method: "DELETE",
      headers,
      credentials: 'include'
    })   
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(eventsLoading(false));
      return response;
    })
    .then((response) => response.json())
    .then((res) => dispatch({ type: 'DELETE_EVENT', id }))
    .catch(() => dispatch(eventsErrored(true)))
  };
}
  // .then(response => response.json())
  // .then(responseJSON => dispatch({ type: 'DELETE_EVENT', id }));

export const updateEvent = (token, id) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  return (dispatch) => {
    dispatch(eventsLoading(true));
    fetch(`http://localhost:3000/api/v1/events/#{id}`,{
      method: "PATCH",
      headers,
      credentials: 'include'
    })   
    .then((response) => {
      if (!response.ok) {
          throw Error(response.statusText);
      }
      dispatch(eventsLoading(false));
      return response;
    })
    .then((response) => response.json())
    .then((res) => dispatch({ type: 'UPDATE_EVENT', id }))
    .catch(() => dispatch(eventsErrored(true)))
  };
}
    // .then(response => response.json())
    // .then(responseJSON => dispatch({ type: 'UPDATE_EVENT', id }));


    // const res = await fetch('http://localhost:3000/api/v1/events', {
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'X-CSRF-TOKEN': this.state.csrf
    //   },
    //   credentials: 'include'
    // })
    // const data = await res.json()
    // dispatch({ type: 'ADD_EVENTS', events: data });

    // Add try/catch once working
    // try {
    //   const res = await fetch('http://localhost:3000/api/v1/events', {
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //       'X-CSRF-TOKEN': this.state.csrf
    //     },
    //     credentials: 'include'
    //   })
    //   if (!res.ok){ throw res; }
    //   const data = await res.json()
    //   dispatch({ type: 'ADD_EVENTS', events: data });
    // } catch (err) {
    //   console.log("Error happened!")
    // }
