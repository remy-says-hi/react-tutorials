import React from "react";
import ticketsImage from "./../img/cat.jpg";

export default function Header(){
  const myURl = "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9";
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={myURl} alt="An image of tickets" />
    </React.Fragment>
  );
}

// export default Header;