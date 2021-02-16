import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props){
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='name' placeholder='Beer Name'/>
        <input type='text' name='brand' placeholder='Beer Brand'/>
        <input type='number' name='price' placeholder='Price Per Pint'/>
        <input type='number' name='ABV' placeholder='ABV %'/>
        <input type='number' name='quantity' placeholder='Pints In Stock'/>
        <button type='submit' className="btn btn-dark">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;