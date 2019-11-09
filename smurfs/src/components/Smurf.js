import React, {useContext} from 'react';
// import state from '../contexts/SmurfContext';
// import SmurfContext from '../contexts/SmurfContext';

function Smurf({name, age, height}) {
    
    return (
        <div style = {{background: 'pink'}}>
            <h2>{name}</h2>
            <p>age: {age}</p>
            <p>Height: {height}</p>
        </div>
    )
}

export default Smurf;