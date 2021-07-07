import React, {useState, useReducer, useEffect} from 'react';
import axios from 'axios';

export const useAxios = init => {
    const [url, setUrl] = useState(init);
    // const START = 'START';
    // const SUCCESS = 'SUCCESS';
    // const FAIL = 'FAIL';

    

    const axiosReducer = (state, action) => {
        switch(action.type) {
            default:
                return state
            // case START: 
            //     return {...state, data: []};
            // case SUCCESS: 
            //     return {...state, data: action.payload};
            // case FAIL: {
            //     return {...state, data: []};
            
            // }
        };
    }
}
    // const [state, dispatch] = useReducer(axiosReducer, initState);

    // useEffect(() => {
    //     dispatch({type: START})
    //     axios.get(url)
    //         .then(res => dispatch({type: SUCCESS, payload: res.data}))
    //         .catch(error => dispatch({type: FAIL, payload: error.response}))
    // }, [url])
    
    // return [state, setUrl]



export const initState = {
    new: '',
    data: [
        {
            name: 'Brainey',
            age: 200, 
            height: '5cm', 
            id: 0
        }
    ]
};
