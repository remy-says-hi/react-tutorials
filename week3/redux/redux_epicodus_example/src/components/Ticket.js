import React from "react";
import PropTypes from "prop-types";
import MyDog from './test';

function Ticket(props){
  console.log(MyDog());
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTicketClicked(props.id)}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <p><em>{props.formattedWaitTime}</em></p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func,
  formattedWaitTime: PropTypes.string
};

export default Ticket;