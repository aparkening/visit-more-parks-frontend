const eventsReducer = (state = { events: [], loading: false }, action) => {
  let idx;
  switch(action.type) {
    case 'LOADING_EVENTS':
      console.log("Loading events")
      return {
        ...state,
        events: [...state.events],
        loading: true
      }
    case 'ADD_EVENTS':
      console.log("Add events")
      return {
        ...state,
        events: action.events,
        loading: false
      }
    case 'DELETING_EVENT':
      return {
        ...state,
        events: [...state.events],
        loading: true
      }
    case 'DELETE_EVENT':
      return {
        ...state,
        events: [...state.events.slice(0, idx), ...state.events.slice(idx + 1)],
        loading: false
      }
    case 'UPDATING_EVENT':
      return {
        ...state,
        events: [...state.events],
        loading: true
      }
    case 'UPDATE_EVENT':
      return {
        ...state,
        events: [...state.events.slice(0, idx), action.event, ...state.events.slice(idx + 1)],
        loading: false
      }


    default:
      return state;
  }
}
 
export default eventsReducer;