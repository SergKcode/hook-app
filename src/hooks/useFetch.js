import { useState, useEffect, useRef } from 'react';


export const useFetch = ( url ) => {
    
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });
    
    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    // Once we receive an url we do fetch
    useEffect( () => {
        
        //display loading everytime we change the quote
        setState({ data: null, loading: true, error: null });

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                if ( isMounted.current ) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }

            });

    },[url])

    return state;
}
