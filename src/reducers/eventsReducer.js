const eventsReducer = (state = { events: [], loading: false }, action) => {
  switch(action.type) {
    case 'LOADING_EVENTS':
      console.log("Loading events")
      return state;
      // return {
      //   ...state,
      //   events: [...state.events],
      //   loading: true
      // }
    case 'ADD_EVENTS':
      console.log("Add events")
      return state;
      // return {
      //   ...state,
      //   events: action.events,
      //   loading: false
      // }
    default:
      return state;
  }
}
 
export default eventsReducer;