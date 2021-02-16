import selectedTicketReducer from '../../reducers/selected-ticket-reducer';
import * as c from './../../actions/ActionTypes';

describe('selectedTicketReducer', () => {
  let action;
  const ticketData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectedTicketReducer({}, { type: null })).toEqual({});
	});
	
	test('Should successfully add new ticket data to masterTicketList', () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: c.ADD_SELECTED_TICKET,
      names: names,
      location: location,
      issue: issue,
      id: id
    };

    expect(selectedTicketReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  test('Should successfully set selected ticket to null', () => {
    const returnedState = selectedTicketReducer({}, action);
    action = {
      type: c.REMOVE_SELECTED_TICKET
    };

    expect(selectedTicketReducer(returnedState, action)).toEqual(null);
  });
});