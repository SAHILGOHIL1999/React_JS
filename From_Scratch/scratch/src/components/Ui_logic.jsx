import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
    const [name, setName] = useState("Sahil");
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);
    
    const updateName = () => setName("Sahil, I am React Developer.");

    return {
        count,
        name,
        increment,
        decrement,
        reset,
        updateName
    };
};