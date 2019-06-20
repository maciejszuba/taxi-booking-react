import React from 'react';
import Map from './Map';


const DetailsAndMap = ({ pickupLocation, destination, date, hour }) => {

    return (
        <div className={'bill-and-map'}>
            <Map/>
        </div>
    )
}

export default DetailsAndMap