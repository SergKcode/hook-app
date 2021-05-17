import React from 'react'

//Avoid to rerender when there is a change in a state
export const Small = React.memo(({ value }) => {

    console.log(' Me volví a llamar :(  ');
    // http?

    return (
        <small> { value } </small>
    )
});

