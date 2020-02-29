import { combineReducers } from "redux";
// import * as reducers from './reducers';

// As separate files
import authReducer from './authReducer';
import eventsReducer from './eventsReducer';
import parksReducer from './parksReducer';
 
export default combineReducers({
  authReducer,
  eventsReducer,
  parksReducer
});


//parks: parksReducer
// csrf: authReducer

// As separate fields
// const rootReducer = combineReducers({
//   events: eventsReducer,
//   parks: parksReducer
// })
// export default rootReducer;