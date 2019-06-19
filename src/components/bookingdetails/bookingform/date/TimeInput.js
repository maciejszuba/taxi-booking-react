import React from 'react'
import DateInput from '../DateInput';
import StandardInput from '../StandardInput';

const TimeInput = () => {
    return (
        <div className='timeinput'>
            <DateInput/>
            <StandardInput className={'input-2'}
                label={'At:'} 
                name={'hour'} 
                placeholder={'11:08'}/>
        </div>
    )
}

export default TimeInput
