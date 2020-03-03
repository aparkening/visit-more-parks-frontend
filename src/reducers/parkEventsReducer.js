export const parkEventsErrored = (state = false, action) => {
  switch (action.type) {
    case 'PARK_EVENTS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export const parkEventsLoading = (state = false, action) => {
  switch(action.type) {
    case 'PARK_EVENTS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export const parkEvents = (state = [], action) => {
  let idx;
  switch (action.type) {
    // case 'ADD_PARK_EVENTS':
    //   return action.events;
    case 'ADD_PARK_EVENT':
      // return action.event;
      // console.log("Adding Event in reducer...")
      // console.log(state)
      // console.log(action)
      // console.log(action.event)
      // debugger
      return [...state, action.parkEvent];
    case 'DELETE_PARK_EVENT':
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case 'UPDATE_PARK_EVENT':
    return [...state.slice(0, idx), action.parkEvent, ...state.slice(idx + 1)];
    default:
      return state;
  }
}