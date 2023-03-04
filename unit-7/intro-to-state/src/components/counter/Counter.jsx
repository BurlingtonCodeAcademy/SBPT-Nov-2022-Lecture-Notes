import React, { useState } from 'react'

function Counter(props) {

    // const [count, setCount ] = useState();

    const decrement = () => {
        // const updatedCount = props.count-1;
        
        // props.setCount(updatedCount);
        props.setCount(props.count - 1);
        props.setCount(props.count - 1);
        // console.log(props.count);
    }

    const increment = () => {
        // const updatedCount = props.count+1;
        // props.setCount(updatedCount);
        props.setCount(prevCount => prevCount + 1);
        props.setCount(prevCount => prevCount + 1);

    }

    return (
        <div>
            <button onClick={increment} >+</button>
            <span className='counter'>counter: {props.count}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter;

/*
! Challenge:
    - Build out a Counter Component which will have two buttons (+), (-) and a span element that will take its value from a count state variable.
    - Create two functions that will work as onClick event listeners.
        - One function will increment the current state.
        - One function will decrement the current state.
        
    Hard Mode:
        - Leave the count inside App.jsx
*/