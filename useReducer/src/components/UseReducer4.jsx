import React, { useReducer } from "react";

const initialState4 = [[{ choco: 0, icecream: 10 }]];

const counterReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return [
                [
                    {
                        ...state[0][0], choco: state[0][0].choco + 1, icecream: state[0][0].icecream + 1
                    }
                ]
            ];

        case "DECREMENT":
            if (state[0][0].choco <= 0 || state[0][0].icecream <= 0) {
                return initialState4;
            } else {
                return [
                    [
                        {
                            ...state[0][0], choco: state[0][0].choco - 1, icecream: state[0][0].icecream - 1
                        }
                    ]
                ];
            }

        case "RESET":
            return initialState4;

        default:
            return state;
    }
};

const UseReducer4 = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState4);

  console.log("state", state);

    return (
    <>
        <div><b>UseReducer</b></div>
        <div>choco : {state[0][0].choco}</div>
        <div>icecream : {state[0][0].icecream}</div>
        
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
);
};

export default UseReducer4;