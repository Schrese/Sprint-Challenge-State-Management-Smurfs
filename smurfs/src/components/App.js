import React, {useState, useReducer} from "react";
import "./App.css";
// import axios from 'axios';
// import {useAxios, initState} from '../hooks/useAxios';

//components
import Form from './Form';
import Smurfs from './Smurfs';

//contexts
import SmurfContext from '../contexts/SmurfContext';

//reducer
import {smurfReducer, initState} from '../hooks/reducer';
import {ADD_SMURFS, CHANGE_HANDLER} from '../hooks/reducerList';

function App () {
  // const [state, setUrl] = useAxios('http://localhost:3333/smurfs')
  // const [state, dispatch] = useReducer(useAxios, initState)
  const [state, dispatch] = useReducer(smurfReducer, initState)
  console.log(state.items);
  
  const addSmurf = e => {
    e.preventDefault();
    dispatch({type: ADD_SMURFS, payload: state.new})
    console.log(state.new)
  }  

  const changeHandler = e => {
    dispatch({type: CHANGE_HANDLER, payload: e.target.value})
  }
    return (
      <div className="App">
        {/* <SmurfContext.Provider value = {{state, setUrl}}> */}
          {/* <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div> */}
          <Smurfs items = {state.items}/>
          <Form addSmurf = {addSmurf} new = {state.new} changeHandler = {changeHandler}/>
        {/* </SmurfContext.Provider> */}
      </div>
    );
  
}

export default App;
