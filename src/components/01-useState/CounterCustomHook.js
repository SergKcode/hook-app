import React from 'react';
import {useCounter} from "../../hooks/useCounter"
import "./counter.css";

export const CounterCustomHook = () => {
    const {counter, increment, decrement,reset}=useCounter();
    return (
        <div>
            <h1> Counter Hook : {counter}</h1>
            <hr/>
            <button onClick={increment} className="btn">+1</button>
            <button onClick={reset} className="btn">Reset</button>
            <button onClick={decrement} className="btn">-1</button>
            
            
        </div>
    )
}
