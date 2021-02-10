import React from "react";
import ticketsImage from "./../img/cat.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketsImage} width={200} height={200} alt="An image of tickets" />
    </React.Fragment>
  );
}

export default Header;