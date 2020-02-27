import { combineReducers } from "redux";
import * as reducers from './reducers';

// As separate files
// import eventsReducer from './reducers/eventsReducer';
// import parksReducer from './reducers/parksReducer';
 
export default combineReducers(reducers);

// As separate fields
// const rootReducer = combineReducers({
//   events: eventsReducer,
//   parks: parksReducer
// })
// export default rootReducer;