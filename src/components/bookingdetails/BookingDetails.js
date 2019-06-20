import React, {useEffect} from 'react';
import Steps from './steps/Steps';
import BookingMain from './bookingform/BookingMain';
import DetailsAndMap from '../detailsandmap/DetailsAndMap';

const BookingDetails = () => {

    return (
        <main className="container first-layout">
            <Steps/>
            <BookingMain/>
            <DetailsAndMap/>
        </main>
    )
}

export default BookingDetails

