import React from 'react';
import Helmet from 'react-helmet';
import scriptLoader from 'react-async-script-loader';
import arrow from '../../../../img/arrow-down.svg';

class LocationInput extends React.Component {

  componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
        new window.google.maps.places.Autocomplete(document.getElementById(this.props.name));
      }
      else this.props.onError()
    }
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props
    if (isScriptLoaded && isScriptLoadSucceed) {
      alert('didmount script loaded');
    }
  }


  render() {
    const { label, name, placeholder, changeHandler } = this.props;

    return (
      <>
        <Helmet>
          {/* <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDiOWfNMdtzoh_i-cez1yUTGrdJXTnCXtw&libraries=places"></script> */}
        </Helmet>

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
            <img src={arrow} alt=""/>
          </div>
    
        </div >
      </>
    )
  }
}

export default scriptLoader(
  [
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyBwKqh6eN91t7znLNyZdUVstD-BoQ_n9RA&libraries=places'
  ]
)(LocationInput)
// export default DetailsInput
