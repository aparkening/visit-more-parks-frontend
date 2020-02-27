import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import './index.css';

// import rootReducer from './reducers';
import eventsReducer from './reducers/eventsReducer';

const store = createStore(eventsReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
