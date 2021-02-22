
export default (state = {}, action) => {
  const { names, location, issue, quantity, id } = action;
  switch (action.type) {
  case 'ADD_TICKET':
    return Object.assign({}, state, {
      [id]: {
        names,   // same as names: names
        location,   // same as location: location
        issue,   // same as issue: issue
        id,   // same as id: id
        quantity   // same as quantity: quantity
      }
    });
  case 'DELETE_TICKET':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};