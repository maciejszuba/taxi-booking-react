import React from 'react'

const StandardInput = ({ className, label, name, placeholder }) => {
    return (
        <div className='booking-form-element' >
            <label htmlFor={name} className="label-1">{label}</label>
            <input
                className={className}
                type="text"
                name={name}
                id={name}
                placeholder={placeholder}
            />

        </div >
    )
}

export default StandardInput
