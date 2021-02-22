import formVisibleReducer from './form-visible-reducer';
import ticketListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage2: formVisibleReducer,
  masterTicketList2: ticketListReducer
});

export default rootReducer;