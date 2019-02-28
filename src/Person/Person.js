//import React from the react package
import React from 'react';

import './Person.css';

//es6 function
const person = (props) => {

    return (
        <div className = "Person"> 
            <p onClick = {props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type = "text" onChange = {props.changed} value = {props.name}></input>
        </div>
    )
};

export default person;