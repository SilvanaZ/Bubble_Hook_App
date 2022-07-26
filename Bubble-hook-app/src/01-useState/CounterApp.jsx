import { useState } from 'react';

export const CounterApp = () => {

    const [ state, setCounter ] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1: counterOne, counter2: counterTwo, counter3: counterThree } = state;

    return (
        <>
            <h1>Counter1: {counterOne}</h1>
            <h1>Counter2: {counterTwo}</h1>
            <h1>Counter3: {counterThree}</h1>

            <hr />

            <button
                className="btn"
                onClick={
                    () => setCounter({
                        ...state,
                        counter1: counterOne + 1,
                    })
                }>+1</button>

        </>
    )
}
