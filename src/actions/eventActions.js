const fetchEvents = (token) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  console.log(headers)
  return (dispatch) => {
    dispatch({ type: 'LOADING_EVENTS' });
    fetch('http://localhost:3000/api/v1/events',{
      method: "GET",
      headers,
      credentials: 'include'
    })   
    .then(response => response.json())
    .then(responseJSON => dispatch({ type: 'ADD_EVENTS', events: responseJSON.events }));
  };
}

const deleteEvent = (token, id) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  console.log(headers)
  return (dispatch) => {
    dispatch({ type: 'DELETING_EVENT' });
    fetch(`http://localhost:3000/api/v1/events/#{id}`,{
      method: "DELETE",
      headers,
      credentials: 'include'
    })   
    .then(response => response.json())
    .then(responseJSON => dispatch({ type: 'DELETE_EVENT', id }));
  };
}

const updateEvent = (token, id) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token
  }
  console.log(headers)
  return (dispatch) => {
    dispatch({ type: 'UPDATING_EVENT' });
    fetch(`http://localhost:3000/api/v1/events/#{id}`,{
      method: "PATCH",
      headers,
      credentials: 'include'
    })   
    .then(response => response.json())
    .then(responseJSON => dispatch({ type: 'UPDATE_EVENT', id }));
  };
}

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


export {fetchEvents, deleteEvent, updateEvent}