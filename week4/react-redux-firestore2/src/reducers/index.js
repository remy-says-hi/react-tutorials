import formVisibleReducer from './form-visible-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  firestore: firestoreReducer
});

export default rootReducer;