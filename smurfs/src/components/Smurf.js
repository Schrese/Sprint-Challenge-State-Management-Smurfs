import React, {useContext} from 'react';
import state from '../contexts/SmurfContext';


function Smurf(state) {
    console.log(state)
    return (
        <div>
            hello
            {/* <h2>{state.data.name}</h2> */}
        </div>
    )
}

export default Smurf;