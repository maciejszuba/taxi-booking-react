import React, { useReducer } from 'react';
import BookingContext from './bookingContext';
import BookingReducer from './bookingReducer';
import {
    SET_LOADING,
    SET_PICKUP_LOCATION,
    SET_DESTINATION,
    SET_DATE
} from '../types';

const BookingState = (props) => {
    const initialState = {
        loading: false,
        bookingDetails: {
            pickupLocation: '',
            destination: '',
            date: '',
            hour: '',
            voucher: '',
            passengers: '',
            bags: '',
            sportEquipment: '',
            animals: '',
            babies: '',
            perHourBooking: ''
        }
    };

    const [state, dispatch] = useReducer(BookingReducer, initialState);

    const setPickupLocation = pickup =>{
        dispatch({
            type: SET_PICKUP_LOCATION,
            payload: {pickup}
        })
    }

    const setDestination = destination => {
        dispatch({
            type: SET_DESTINATION,
            payload: {destination}
        })
    }

    const setDate = date => {
        dispatch({
            type: SET_DATE,
            payload: {date}
        })
    }

    const setLoading = () => dispatch({ type: SET_LOADING });

    return <BookingContext.Provider
        value={{
            loading: false,
            bookingDetails: state.bookingDetails,
            setPickupLocation,
            setDestination,
            setDate
        }}
    >
        {props.children}
    </BookingContext.Provider>
}

export default BookingState;