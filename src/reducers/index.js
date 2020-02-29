import { combineReducers } from "redux";
// import * as reducers from './reducers';

// As separate files
// import eventsReducer from './eventsReducer';
import { authErrored, authLoading, csrf } from './authReducer';
import { parksErrored, parksLoading, parks } from './parksReducer';
 
export default combineReducers({
  authErrored,
  authLoading,
  csrf,
  parksErrored,
  parksLoading,
  parks,
  // eventsReducer
});


//parks: parksReducer
// csrf: authReducer

// As separate fields
// const rootReducer = combineReducers({
//   events: eventsReducer,
//   parks: parksReducer
// })
// export default rootReducer;