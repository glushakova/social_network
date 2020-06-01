import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

import Navigation from './Navigation';
import reduser from './reduser';
import './index.css';

const store = createStore(reduser, applyMiddleware(thunk, ReduxLogger));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Navigation />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
