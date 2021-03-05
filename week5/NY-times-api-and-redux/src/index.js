import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/headlines-reducer';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import middlewareLogger from './middleware/middleware-logger';

const store = createStore(reducer, applyMiddleware(middlewareLogger, thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
