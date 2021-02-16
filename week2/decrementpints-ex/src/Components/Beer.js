import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  return(
    <React.Fragment>
      <div onClick={() => props.whenBeerClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>${props.price} Per Pint</h4>
        <h5>pints left {props.quantity}</h5>
      </div>
    </React.Fragment>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  ABV: PropTypes.number,
  quantity: PropTypes.number
}
export default Beer;