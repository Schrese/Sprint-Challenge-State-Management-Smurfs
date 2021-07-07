import {ADD_SMURFS, CHANGE_HANDLER} from './reducerList';

export function smurfReducer(state, action) {
    switch(action.type) {
        default: 
            return state;
        case ADD_SMURFS:
            return {
                ...state, 
                new: '', 
                items: [...state.items,
                {
                    name: action.payload.name,
                    age: action.payload.age, 
                    height: action.payload.height,
                    id: Date.now()
                }]}
        case CHANGE_HANDLER: 
            return {
                ...state,
                new: action.payload
            }
    }

}


export const initState = {
    new: '',
    items: [
        {
            name: 'Brainey',
            age: 200, 
            height: '5cm', 
            id: 0
        }
    ]
};
