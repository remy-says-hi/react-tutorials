import * as c from './ActionTypes';

export const deleteTicket = id => ({
  type: c.DELETE_TICKET,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
})

export const toggleIsEditing = () => ({
  type: c.TOGGLE_IS_EDITING
})

export const addTicket = (ticket) => {
  const { names, location, issue, id, quantity } = ticket;
  return {
    type: c.ADD_TICKET,
    names: names,
    location: location,
    issue: issue,
    quantity: (quantity || 20),
    id: id
  }
}

export const updateTicketIssue = (values) => {
  const {issue, id} = values;
  return {
    type: c.UPDATE_TICKET_ISSUE,
    issue: issue,
    id: id
  }
}

export const removeSelectedTicket = () => {
  return {
    type: c.REMOVE_SELECTED_TICKET
  }
}

export const addSelectedTicket = (ticket) => {
  const { names, location, issue, quantity, id } = ticket;
  return {
    type: c.ADD_SELECTED_TICKET,
    names: names,
    location: location,
    issue: issue,
    quantity: quantity,
    id: id
  }
}
