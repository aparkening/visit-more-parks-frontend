import { combineReducers } from "redux";

import { authErrored, authLoading, csrf } from './authReducer';
import { parksErrored, parksLoading, parks } from './parksReducer';
import { eventsErrored, eventsLoading, showAlert, events } from './eventsReducer';
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
  showAlert,
  events,
  parkEventsErrored,
  parkEventsLoading,
  parkEvents,
});