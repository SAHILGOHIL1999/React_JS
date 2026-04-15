import React from 'react';
import { useCounter } from './Ui_logic'; 
import CustomButton from './CustomButton(Reusable)';

const UseState_hook = () => {

    const { count, name, increment, decrement, reset, updateName } = useCounter(0);

    return (
        <div>
            <div className="section">
                <h1 className='heading'> My name is {name}</h1>
                <CustomButton 
                    label="Click Me" 
                    className="btn" 
                    onClick={updateName} 
                />
            </div>

            <div className="section">
                <h1 className='heading'> Count: {count} </h1> 

                <CustomButton label="Increment" className="btn" onClick={increment} />
                <CustomButton label="Decrement" className="btn" onClick={decrement} />
                <CustomButton label="Reset" className="btn" onClick={reset} />
            </div>
        </div>
    );
};

export default UseState_hook;