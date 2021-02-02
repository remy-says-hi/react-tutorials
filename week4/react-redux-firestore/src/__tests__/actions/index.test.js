import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('help queue actions', () => {

  it('toggleFrom should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });
});