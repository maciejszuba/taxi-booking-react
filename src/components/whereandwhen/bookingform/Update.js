import React from 'react'
import BookingForm from './BookingForm';

const Update = () => {
    return (
        <div style = {style}>
            <h1>Update your route</h1>
            <h6>After update you will have to repeat steps 2 or 3</h6>
            <BookingForm/>
            <h4>For 1-2 passengers with 1-2 bags</h4>
        </div>
    )
}

const style = {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid white',
    borderRadius:'10px',
    gridRow: '2',
    gridColumn: '1 / span 3'
}

export default Update
