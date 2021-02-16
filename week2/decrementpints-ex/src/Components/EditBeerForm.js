import React from 'react';
import PropTypes from 'prop-types';

function EditBeerForm(props){
  const { beer } = props;
  function handleEditBeerFormSubmission(event){
    event.preventDefault();
    props.onEditBeer({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: parseFloat(event.target.price.value), 
      ABV: parseFloat(event.target.ABV.value), 
      quantity: parseInt(event.target.quantity.value),
      id: beer.id})
  }
  return(
    <React.Fragment>
      <form onSubmit={handleEditBeerFormSubmission}>
        <input type='text' name='name' placeholder='Beer Name' defaultValue={beer.name}/>
        <input type='text' name='brand' placeholder='Beer Brand'defaultValue={beer.brand}/>
        <input type='number' name='price' placeholder='Price Per Pint'defaultValue={beer.price}/>
        <input type='number' name='ABV' placeholder='ABV %'defaultValue={beer.ABV}/>
        <input type='number' name='quantity' placeholder='Pints In Stock'defaultValue={beer.quantity}/>
        <button type='submit' >Edit this beer</button>
      </form>
    </React.Fragment>
  )
}

EditBeerForm.propTypes = {
  beer:PropTypes.object,
  onEditBeer: PropTypes.func
}

export default EditBeerForm;