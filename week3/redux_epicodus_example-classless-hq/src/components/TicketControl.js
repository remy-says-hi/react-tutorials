import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import EditTicketForm from './EditTicketForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

function TicketControl(props) {

  const handleClick = () => {
    const { dispatch } = props;
    if (props.selectedTicket != null && !props.isEditing) {
      const action2 = a.removeSelectedTicket();
      dispatch(action2);
    } else if (props.selectedTicket != null && props.isEditing) {
      const action = a.toggleIsEditing();
      const action2 = a.removeSelectedTicket();
      dispatch(action2);
      dispatch(action);
    } else {
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  const handleAddingNewTicketToList = (newTicket) => {
    const { dispatch } = props;
    const action = a.addTicket(newTicket);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  const handleChangingSelectedTicket = (id) => {
    const selectedTicket = props.masterTicketList[id];
    const { dispatch } = props;
    const action = a.addSelectedTicket(selectedTicket);
    dispatch(action);
  }

  const handleDeletingTicket = (id) => {
    const { dispatch } = props;
    const action = a.deleteTicket(id);
    dispatch(action);
    const action2 = a.removeSelectedTicket();
    dispatch(action2);
  }

  const handleEditClick = () => {
    const { dispatch } = props;
    const action = a.toggleIsEditing();
    dispatch(action);
  }

  const handleEditingTicketInList = (ticketToEdit) => {
    const { dispatch } = props;
    const action = a.addTicket(ticketToEdit);
    dispatch(action);
    const action2 = a.toggleIsEditing();
    dispatch(action2);
    const action3 = a.removeSelectedTicket();
    dispatch(action3);
  }

  let currentlyVisibleState = null;
  let buttonText = null;
  if (props.isEditing ) {      
    currentlyVisibleState = <EditTicketForm ticket = {props.selectedTicket} onEditTicket = {handleEditingTicketInList} />
    buttonText = "Return to Ticket List";
  } else if (props.selectedTicket != null) {
    currentlyVisibleState = 
    <TicketDetail 
      ticket={props.selectedTicket} 
      onClickingDelete={handleDeletingTicket} 
      onClickingEdit={handleEditClick} />
    buttonText = "Return to Ticket List";
  } else if (props.formVisibleOnPage) {
    currentlyVisibleState = <NewTicketForm onNewTicketCreation={handleAddingNewTicketToList}  />;
    buttonText = "Return to Ticket List";
  } else {
    currentlyVisibleState = <TicketList ticketList={props.masterTicketList} onTicketSelection={handleChangingSelectedTicket} />;
    buttonText = "Add Ticket";
  }
  
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}

TicketControl.propTypes = {
  masterTicketList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList,
    formVisibleOnPage: state.formVisibleOnPage,
    isEditing: state.isEditing,
    selectedTicket: state.selectedTicket
  }
}

TicketControl = connect(mapStateToProps)(TicketControl);

export default TicketControl;