const eventsReducer = (state = { events: [], loading: false }, action) => {
  switch(action.type) {
    case 'LOADING_events':
      return {
        ...state,
        events: [...state.events],
        loading: true
      }
    case 'ADD_events':
      return {
        ...state,
        events: action.events,
        loading: false
      }
    default:
      return state;
  }
}
 
export default eventsReducer;