import React, { useState } from 'react'

const UseState_hook = () => {

    const [name, setName] = useState("Sahil");
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(prev => prev + 1);
    };

    return (
        <>
            <div>
                <h1 className='heading'> My name is {name}</h1>
                <button className='btn' onClick={() => setName("Sahil, I am React Developer.")}>
                    Click Me
                </button>
            </div>

            <div>
                <p> Count: {count} </p>

                <button className='btn' onClick={handleIncrease}>
                    Increment
                </button>

                <button className='btn' onClick={() => setCount(prev => prev - 1)}>
                    Decrement
                </button>

                <button className='btn' onClick={() => setCount(0)}>
                    Reset
                </button>
            </div>
        </>
    )
}

export default UseState_hook