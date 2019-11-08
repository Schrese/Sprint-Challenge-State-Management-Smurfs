import React from 'react';

const Form = () => {
    return (
        <form>
            <input type = 'text' placeholder = 'name'/>
            <input type = 'text' placeholder = 'age'/>
            <input type = 'text' placeholder = 'height'/>
            <button type = 'submit'>Submit</button>
        </form>
    )
}

export default Form;