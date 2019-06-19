import {
    SET_LOADING,
    SET_PICKUP_LOCATION,
    SET_DESTINATION,
    SET_DATE
} from '../types';

export default (state, action) => {
    switch (action.type) {

        case SET_PICKUP_LOCATION:
            return {
                ...state,
                bookingDetails: {
                    pickupLocation: action.payload.pickup
                }
            }

        case SET_DESTINATION:
            return {
                ...state,
                bookingDetails: {
                    destination: action.payload.destination
                }
            }

        case SET_DATE:
            return {
                ...state,
                bookingDetails: {
                    date: action.payload.date
                }
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
}


