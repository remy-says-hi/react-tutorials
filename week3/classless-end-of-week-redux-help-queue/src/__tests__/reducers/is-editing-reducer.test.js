import isEditingReducer from '../../reducers/is-editing-reducer';
import * as c from './../../actions/ActionTypes';

describe("isEditingReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(isEditingReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle form visibility state to true', () => {
    expect(isEditingReducer(false, { type: c.TOGGLE_IS_EDITING })).toEqual(true);
  });
});