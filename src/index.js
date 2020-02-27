import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
