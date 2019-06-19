import React, {useState, useContext} from 'react';
import DetailsInput from './DetailsInput';
import DateInput from './DateInput';
import BookingContext from '../../../context/booking/bookingContext';

const BookingForm = () => {
    
    const bookingContext = useContext(BookingContext);

    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');

    const pickupChangeHandler = (e) =>{
        setPickup(e.target.value);
        bookingContext.setPickupLocation(pickup);
    }

    const destinationChangeHandler = (e) =>{
        setDestination(e.target.value);
        bookingContext.setPickupLocation(destination);
    }

    return (
        <ul className='booking-grid'>
            <li><DetailsInput 
                label={'Pick up:'} 
                name={'pickup'} 
                placeholder={'e.g. Torstrasse 123, Berlin'}
                usesGooglePlaces={true}
                changeHandler={pickupChangeHandler}     
                
                 /></li>
            <li><DetailsInput 
                label={'Destination:'} 
                name={'destination'} 
                placeholder={'e.g. Kitkat'}
                usesGooglePlaces={true} 
                changeHandler={destinationChangeHandler}
                /></li>
            <li><DateInput/></li>
            <li><DetailsInput 
                label={'Voucher code (optional):'} 
                name={'voucher'} 
                placeholder={''}
                usesGooglePlaces={false} /></li>
        </ul>
    )
}

export default BookingForm
