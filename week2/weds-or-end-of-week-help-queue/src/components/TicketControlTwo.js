import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import EditTicketForm from './EditTicketForm';

// The render() method in this component varies from how the curriculum shows how to set it up!

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTicketList: [],
      selectedTicket: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({
      masterTicketList: newMasterTicketList,
      formVisibleOnPage: false
    });
    // this.setState({formVisibleOnPage: false});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingTicketInList = (ticketToEdit) => {
    const editedMasterTicketList = this.state.masterTicketList
      .filter(ticket => ticket.id !== this.state.selectedTicket.id)
      .concat(ticketToEdit);
    this.setState({
      masterTicketList: editedMasterTicketList,
      editing: false,
      selectedTicket: null
    });
    // this.setState({editing: false});
    // this.setState({selectedTicket: null});
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.masterTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedTicket: selectedTicket});
  }

  handleDeletingTicket = (id) => {
    const newMasterTicketList = this.state.masterTicketList.filter(ticket => ticket.id !== id);
    this.setState({masterTicketList: newMasterTicketList});
    this.setState({selectedTicket: null});
  }

  setVisibility = () => {
    if (this.state.editing) {      
      return {
        buttonText: "Return to Ticket List",
        component: <EditTicketForm ticket = {this.state.selectedTicket} onEditTicket = {this.handleEditingTicketInList} />
      } 
    } else if (this.state.selectedTicket != null) {
      return {
        buttonText: "Return to Ticket List",
        component: <TicketDetail 
        ticket={this.state.selectedTicket} 
        onClickingDelete={this.handleDeletingTicket} 
        onClickingEdit = {this.handleEditClick} />
      }

    } else if (this.state.formVisibleOnPage) {
      return {
        buttonText: "Return To Ticket List",
        component: <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>
      }
    } else {
      return {
        buttonText: "Add Ticket",
        component: <TicketList ticketList={this.state.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket} />
      }
    }
  }

  render(){
    let currentlyVisibleState = this.setVisibility();
    return (
      <React.Fragment>
          {currentlyVisibleState.component}
          <button onClick={this.handleClick}>{currentlyVisibleState.buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;