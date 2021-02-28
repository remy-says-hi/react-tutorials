import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as c from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  // test('Should return default state if no action type is recognized', () => {
  //   expect(rootReducer({}, { type: null })).toEqual({
  //     masterTicketList: {},
  //     formVisibleOnPage: false
  //   });
  // });
  
  test('Check that initial states of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});