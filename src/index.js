import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(
      reducers,
      /* preloadedState, */
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )}>
    <App />
  </Provider>
  , document.querySelector('.container'));