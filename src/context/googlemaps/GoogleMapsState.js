import React, {useReducer} from 'react';
import GoogleMapsContext from '../googlemaps/googlemapsContext';
import GoogleMapsReducer from '../googlemaps/googlemapsReducer';

const GoogleMapsState = (props) => {
    const initialState = {
    
    };
    const [state, dispatch] = useReducer(GoogleMapsReducer, initialState);

    const setGoogleMapsAutocomplete = () => {

    }



    return <GoogleMapsContext.Provider
        value={{
            setGoogleMapsAutocomplete
        }}
    >
        {props.children}


    </GoogleMapsContext.Provider>

}

export default GoogleMapsState
