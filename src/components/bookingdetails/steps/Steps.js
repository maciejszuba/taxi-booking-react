import React from 'react'
import StepsElement from './StepsElement';

const Steps = () => {
    return (
        <ul className = 'steps'>
            <li><StepsElement number = {'1'} name = {'Where & When'}/></li>
            <li><StepsElement number = {'2'} name = {'Choose a Car'}/></li>
            <li><StepsElement number = {'3'} name = {'Details & Payment'}/></li>
        </ul>
    )
}


export default Steps;
