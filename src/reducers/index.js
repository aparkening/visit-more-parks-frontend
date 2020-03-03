import { combineReducers } from "redux";
// import * as reducers from './reducers';

// As separate files
// import eventsReducer from './eventsReducer';
import { authErrored, authLoading, csrf } from './authReducer';
import { parksErrored, parksLoading, parks } from './parksReducer';
import { eventsErrored, eventsLoading, events } from './eventsReducer';
import { parkEventsErrored, parkEventsLoading, parkEvents } from './parkEventsReducer';
 
export default combineReducers({
  authErrored,
  authLoading,
  csrf,
  parksErrored,
  parksLoading,
  parks,
  eventsErrored,
  eventsLoading,
  events,
  parkEventsErrored,
  parkEventsLoading,
  parkEvents,
});