import React from 'react';

const Form = ({addSmurf, changeHandler}) => {
    return (
        <form onSubmit = {addSmurf}>
            <input type = 'text' placeholder = 'name' onChange = {changeHandler} />
            <input type = 'text' placeholder = 'age' onChange = {changeHandler}/>
            <input type = 'text' placeholder = 'height' onChange = {changeHandler}/>
            <button type = 'submit'>Submit</button>
        </form>
    )
}

export default Form;