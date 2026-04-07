import React, { useReducer } from "react";

const UseReducer1 = () => {
    const initialState1 = [{ choco: 0 }, { icecream: 10 }];

    const counterReducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return [
                    { ...state[0], choco: state[0].choco + 1 },
                    { ...state[1], icecream: state[1].icecream + 1 }
                ];

            case "DECREMENT": {
                if (state[0].choco <= 0 || state[1].icecream <= 0) {
                    return [{ choco: 0 }, { icecream: 10 }];
                } else {
                    return [
                        { ...state[0], choco: state[0].choco - 1 },
                        { ...state[1], icecream: state[1].icecream - 1 }
                    ];
                }
            }

            case "RESET":
                return initialState1;

            default:
                return state;
        }
    };

    const [state, disptch] = useReducer(counterReducer, initialState1);

    console.log("state", state);

    return (
        <>
            <div><b>UseReducer</b></div>
            <div>choco : {state[0].choco}</div>
            <div>icecream : {state[1].icecream}</div>
            <button onClick={() => disptch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => disptch({ type: "DECREMENT" })}>Decrement</button>
            <button onClick={() => disptch({ type: "RESET" })}>Reset</button>
        </>
    );
};

export default UseReducer1;