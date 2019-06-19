import React, { Fragment } from 'react'

const StepsElement = ({ number, name }) => {

    return (
        <Fragment>
            <div className = {'steps-number'}>{number}</div>
            <span>{name}</span>
        </Fragment>
    )
}


export default StepsElement
