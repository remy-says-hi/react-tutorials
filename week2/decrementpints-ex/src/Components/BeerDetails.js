import React from 'react';
import PropTypes from 'prop-types';

function BeerDetails(props){
  const { beer } = props;
  return(
    <React.Fragment>
      <h3>brand: {beer.brand}</h3>
      <h3>name: {beer.name}</h3>
      <h4>price: ${beer.price} Per Pint</h4>
      <h4>quantity remaining: {beer.quantity}</h4>
      <h4>ABV: {beer.ABV}%</h4>
      <button onClick={()=>props.onBuying(beer.id)} >Buy Beer</button>
      <button onClick={props.onClickingEdit} >Edit this Beer</button>
      <button onClick ={() => props.onClickingDelete(beer.id)}>Delete this beer</button>
    </React.Fragment>
  );
}

BeerDetails.propTypes = {

}
export default BeerDetails;