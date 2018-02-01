import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div>
            <div class="card">
                <div class="container">
                    <h4><b>{props.name}</b></h4> 
                    <p>{props.age} yrs old</p>
                    <p>{props.children}</p>
                    <p>Contact is - <b>{props.contact}</b></p>
                </div>
            </div> 
        </div>
    )
}

export default person;