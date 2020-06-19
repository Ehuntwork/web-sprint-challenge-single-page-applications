import React from 'react';

function Confirmation(props){
    const {details} = props;
    return(
        <div className='Confirmation'>
            <h2>Is your order correct?</h2>
            <p className='confirmName'>{details.name}</p>
            <p className='confirmSize'>{details.size}</p>

        </div>
    )
}

export default Confirmation;