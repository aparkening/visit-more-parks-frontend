export const fetchEvents = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_EVENTS' });
    console.log("Events are loading")
    dispatch({type: 'ADD_EVENTS', events: ['event 1', 'event 2']})

    // fetch('http://localhost:3000/api/v1/events', {
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'X-CSRF-TOKEN': this.state.csrf
    //   },
    //   credentials: 'include'
    // })
    //   .then(response => response.json())
    //   .then(responseJSON => dispatch({ type: 'ADD_EVENTS', events: responseJSON }));



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


  };
}