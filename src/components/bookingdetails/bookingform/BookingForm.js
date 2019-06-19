import React, {useState, useContext} from 'react';
import LocationInput from './location/LocationInput';
import StandardInput from './StandardInput';
import TimeInput from './date/TimeInput';
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
            <li><LocationInput
                label={'Pick up:'} 
                name={'pickup'} 
                placeholder={'e.g. Torstrasse 123, Berlin'}
                changeHandler={pickupChangeHandler}     
                
                 /></li>
            <li><LocationInput
                label={'Destination:'} 
                name={'destination'} 
                placeholder={'e.g. KitKatClub'}
                changeHandler={destinationChangeHandler}
                /></li>
            <li><TimeInput/></li>
            <li><StandardInput
                className={'input-2'}
                label={'Voucher code (optional):'} 
                name={'voucher'} 
                placeholder={''}/></li>
        </ul>
    )
}

export default BookingForm
