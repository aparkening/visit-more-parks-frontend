export const eventsErrored = (state = false, action) => {
  switch (action.type) {
    case 'EVENTS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export const eventsLoading = (state = false, action) => {
  switch(action.type) {
    case 'EVENTS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export const showAlert = (state = false, action) => {
  switch(action.type) {
    case 'SHOW_ALERT':
      return action.isVisible;
    default:
      return state;
  }
}

export const events = (state = {
  googleEvents: [],
  parkEvents: []
}, action) => {
  let idx;
  switch (action.type) {
    case 'ADD_EVENTS':
    return {
      ...state,
      googleEvents: action.googleEvents,
      parkEvents: action.parkEvents
    };
    // return action.events;
    case 'ADD_EVENT':
      // return action.event;
      // console.log("Adding Event in reducer...")
      // console.log(state)
      // console.log(action)
      // console.log(action.event)
      // debugger
      return {
        ...state, 
        parkEvents: [...state.parkEvents, action.event]
      };
      // parkEvent: action.event]);
    case 'DELETE_EVENT':
      return {
        ...state, 
        parkEvents: state.parkEvents.filter(e => e.id !== action.id)};
      // return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case 'UPDATE_EVENT':
      idx = state.parkEvents.findIndex(e => e.id === action.id);
      return {...state, parkEvents: [...state.parkEvents.slice(0, idx), action.event, ...state.parkEvents.slice(idx + 1)]};
    default:
      return state;
  }
}