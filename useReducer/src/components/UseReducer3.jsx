import React, { useReducer } from "react";

let initialState3 = [[{choco: 0} , {icecream:10}]];

const UseReducer3 = () => {

    const counterReducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return [
                    [
                        { ...state[0][0], choco: state[0][0].choco + 1 },
                        { ...state[0][1], icecream: state[0][1].icecream + 1 }
                    ]
                ];

            case "DECREMENT": {
                if (state[0][0].choco <= 0 || state[0][1].icecream <= 0) {
                    return [{ choco: 0 }, { icecream: 10 }];
                } else {
                    return [
                        [
                            { ...state[0][0], choco: state[0][0].choco - 1 },
                            { ...state[0][1], icecream: state[0][1].icecream - 1 }
                        ]
                    ];
                }
            }

            case "RESET":
                return initialState3;

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(counterReducer, initialState3);

    console.log("state", state);

    return (
        <>
            <div><b>UseReducer</b></div>
            <div>choco : {state[0][0].choco}</div>
            <div>icecream : {state[0][1].icecream}</div>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </>
    );
};

export default UseReducer3;