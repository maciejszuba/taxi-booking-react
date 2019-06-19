import React, {useState, useContext} from 'react';
import Calendar from './date/Calendar';
import BookingContext from '../../../context/booking/bookingContext';

const DateInput = () => {

    const bookingContext = useContext(BookingContext);
    const [date, setDate] = useState('');

    const clickHandler = (e) => {
        document.querySelectorAll('.radiobtn-cover').forEach((label) =>{
            label.classList.remove('date-choice');
        })
        e.currentTarget.classList.add('date-choice');
        setDate(document.getElementById(e.currentTarget.htmlFor).value);
        bookingContext.setDate(date);
        console.log(date);
    }

    return (
        <div className='date-picker'>
            <label className="radiobtn-cover" htmlFor="date_pick_today" 
                onClick={clickHandler}>
                <span>19.06</span>
                <span>Today</span>
            </label>
            <input className='radio' type="radio" name="date" id="date_pick_today" value='19.06'/>

            <label className="radiobtn-cover" htmlFor="date_pick_tomorrow" 
                onClick={clickHandler} >
                <span>20.06</span>
                <span>Tomorrow</span>
            </label>
            <input className='radio' type="radio" name="date" id="date_pick_tomorrow" value='20.06' />

            <label className="radiobtn-cover" htmlFor="date_pick_second_day"
                onClick={clickHandler}>
                <span>21.06</span>
                <span>Friday</span>
            </label>
            <input className='radio' type="radio" name="date" id="date_pick_second_day" value='21.06'/>

            <Calendar/>

        </div>
    )
}

export default DateInput
