import React from 'react';

import Smurf from './Smurf';

const Smurfs = ({items}) => {
    
    return (
        <div>
            {items.map(item => (
                <Smurf key = {item.id} {...item}/>
            ))}
            
        </div>
    )
}

export default Smurfs;