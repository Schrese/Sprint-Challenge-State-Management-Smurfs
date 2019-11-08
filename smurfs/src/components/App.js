import React, {useState} from "react";
import "./App.css";
import axios from 'axios';
import {useAxios} from '../hooks/useAxios';

//components
import Form from './Form';
import Smurf from './Smurf';

//contexts
import SmurfContext from '../contexts/SmurfContext';

function App () {
  const [state, setUrl] = useAxios('http://localhost:3333/smurfs')

    return (
      <div className="App">
        {/* <SmurfContext value = {{state, setUrl}}> */}
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
          <Smurf />
          <Form />
        {/* </SmurfContext> */}
      </div>
    );
  
}

export default App;
