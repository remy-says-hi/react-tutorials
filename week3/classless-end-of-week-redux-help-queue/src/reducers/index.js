import formVisibleReducer from './form-visible-reducer';
import ticketListReducer from './ticket-list-reducer';
import isEditingReducer from './is-editing-reducer';
import selectedTicketReducer from './selected-ticket-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterTicketList: ticketListReducer,
  isEditing: isEditingReducer,
  selectedTicket: selectedTicketReducer
});

export default rootReducer;