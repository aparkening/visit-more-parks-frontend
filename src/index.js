import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import rootReducer from './reducers/index';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import './custom.scss';
// import './index.css';


const store = createStore(rootReducer, applyMiddleware(thunk));

// Bundle middleware with devtools
// const store = createStore(
//   rootReducer, 
//   compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
