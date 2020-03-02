import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import './index.css';

import rootReducer from './reducers/index';

// import eventsReducer from './reducers/eventsReducer';
// const store = createStore(eventsReducer, applyMiddleware(thunk))




// import authReducer from './reducers/authReducer';
// const store = createStore(rootReducer, applyMiddleware(thunk));
// Bundle middleware with devtools
const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
// console.log(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
