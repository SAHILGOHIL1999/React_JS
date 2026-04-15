import React from 'react';

const CustomButton = ({label, onClick, className}) => {
    return (
        <button  className='btn' onClick={onClick}>
            {label}
        </button>
    );
};

export default CustomButton;