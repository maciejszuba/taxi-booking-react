import React, { useReducer } from 'react';
import BookingContext from './bookingContext';
import BookingReducer from './bookingReducer';
import {
    SET_LOADING
} from '../types';

const BookingState = (props) => {
    const initialState = {
        loading: false,
        pickupLocation: ""
        
    };

    const [state, dispatch] = useReducer(BookingReducer, initialState);

    const setLoading = () => dispatch({ type: SET_LOADING });

    return <BookingContext.Provider
        value={{
            pickupLocation: state.pickupLocation
        }}
    >
        {props.children}
    </BookingContext.Provider>
}


export default BookingState;