import { combineReducers } from "redux";
// import * as reducers from './reducers';

// As separate files
import eventsReducer from './eventsReducer';
import parksReducer from './parksReducer';
// import authReducer from './reducers/authReducer';

 
export default combineReducers({
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