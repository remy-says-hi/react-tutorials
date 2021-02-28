import React from "react";
import PropTypes from "prop-types";
import Ticket from "./Ticket";
import { useSelector } from 'react-redux'
import { useFirestore, useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import firebase from "firebase/app";

function TicketList(props){
  useFirestoreConnect([
    { collection: 'tickets' }
  ]);
  const firestore = useFirestore();
  const user = firebase.auth().currentUser;
  console.log(user.uid);
  const cards = firestore.collection('tickets').where('user', '==', user.uid ).get()
  .then(query => { // query snapshot
    const result = query.docs.map(doc => { // queryDocumentSnapshot
      return {...doc.data(), id: doc.id}
    })
    console.log(result);
    return result
  });

  // .then(function(querySnapshot) {
  //   querySnapshot.forEach(function(doc) {
  //       // doc.data() is never undefined for query doc snapshots
  //       console.log(doc.id, " => ", doc.data());
  //   });
  // })

  
  const tickets = useSelector(state => state.firestore.ordered.tickets);

  if (isLoaded(tickets)) {
    return (
      <React.Fragment>
        <hr/>
        {tickets.map((ticket) => {
          return <Ticket
            whenTicketClicked = { props.onTicketSelection }
            names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            id={ticket.id}
            key={ticket.id}/>
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

TicketList.propTypes = {
  onTicketSelection: PropTypes.func
};

export default TicketList;