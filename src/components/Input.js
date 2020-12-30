import React from 'react';

const Input = ({ onClick, className, disabled, placeholder }) => {
    return <input onClick={onClick} className={className} placeholder={placeholder} disabled={disabled}/>
}

export default Input;