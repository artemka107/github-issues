import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App.jsx';
import reducers from './reducers';
import dataToApp from './data/data';
import './index.css';

/* eslint-disable no-underscore-dangle */
const initState = {
  issues: dataToApp,
  filterIssuesPattern: '',
  uiIssues: {
    activeState: 'open',
  },
};

const store = createStore(
  reducers,
  initState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root'),
);
