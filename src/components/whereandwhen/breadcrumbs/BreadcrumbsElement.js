import React, { Fragment } from 'react'

const BreadcrumbsElement = ({ number, name }) => {

    return (
        <Fragment>
            <div style = {numberStyle}>{number}</div>
            <span>{name}</span>
        </Fragment>
    )
}

const numberStyle = {
    display: 'inline-block', 
    width: '2rem',
    height: '2rem',
    fontSize: '1.2rem',
    lineHeight: '1.5rem',
    border: '2px solid var(--primary-color)', 
    borderRadius : '50%',
    textAlign: 'center',
    marginRight: '.5rem'
}


export default BreadcrumbsElement
