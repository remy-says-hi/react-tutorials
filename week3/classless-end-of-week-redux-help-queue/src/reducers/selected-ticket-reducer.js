import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  console.log("ACTION......", action)
  const { names, location, quantity, issue, id } = action;
  switch (action.type) {
  case c.ADD_SELECTED_TICKET:
    return Object.assign({}, state, {
        names: names,
        location: location,
        issue: issue,
        quantity: quantity,
        id: id
    });
  case c.REMOVE_SELECTED_TICKET:
    return null;
  default:
    return state;
  }
};