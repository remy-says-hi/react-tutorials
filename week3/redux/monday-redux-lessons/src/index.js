import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { v4 } from 'uuid';

// TEST DATA
const testId = v4();
const initialState = {
  masterTicketList2: {
    [testId] : {
      names: "Shawn and Brooke",
      location: "by the plant",
      issue: "halp!",
      quantity: 22,
      id: testId
    }
  },
  formVisibleOnPage2: false
}
//////

const store = createStore(
  rootReducer, 
  initialState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
