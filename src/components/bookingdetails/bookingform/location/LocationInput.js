import React, { useEffect } from 'react';
import arrow from '../../../../img/arrow-down.svg';

const LocationInput = ({ label, name, placeholder, changeHandler }) => {

  const google = window.google = window.google ? window.google : {}
 
  // useEffect(() => {
  //   google && initAutocomplete(name);
  //   // eslint-disable-next-line
  // }, [])
 


  return (
    <div className='booking-form-element' >
      <label htmlFor={name} className="label-1">{label}</label>
      <input
        className="input-1"
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={changeHandler}

      />

      <div className='google-autocomplete'>
        <img src={arrow} alt="" />
      </div>

    </div >

  )
}

export default LocationInput

function initAutocomplete(id) {
  new window.google.maps.places.Autocomplete(document.getElementById(id));
}