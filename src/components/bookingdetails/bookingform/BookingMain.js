import React from 'react'
import BookingForm from './BookingForm';

const BookingMain = () => {

    return (
        <div className = {'booking-main-menu'}>
            <h1>Update your route</h1>
            <h6>After update you will have to repeat steps 2 or 3</h6>
            <BookingForm/>
            <div className="submit">Start booking</div>
        </div>
    )
}

export default BookingMain
