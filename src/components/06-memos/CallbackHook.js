import React, { useState, useCallback, useEffect } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    //We use the useCallBack allow to return as argument a memorized version of a function
    //We need to use useCallBack when we use a useMemo in a component or an useEffect where the dependency is an a function
    //The fuction doesn't change and execute if the dependency doesn't change
    const increment = useCallback( (num) => {
        setCounter( c => c + num );
    }, [ setCounter ] );


    return (
        <div>
            <h1>useCallback Hook:  { counter }  </h1>
            <hr />

            <ShowIncrement increment={ increment } />

        </div>
    )
}
