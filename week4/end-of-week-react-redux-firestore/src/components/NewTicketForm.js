import React from "react";
// import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
// import Moment from 'moment';
import { useFirestore } from 'react-redux-firebase'

function NewTicketForm(props){

  const firestore = useFirestore();

  function addTicketToFirestore(event) {
    event.preventDefault();
    console.log("in add Ticket to Firestore")
    firestore.collection('tickets').add(
      {
        names: event.target.names.value,
        location: event.target.location.value, 
        issue: event.target.issue.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
    props.onNewTicketCreation();
    return;
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addTicketToFirestore}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;