import React from 'react';

const validation = (props) => {
    let validationMessage = "Text is too short";
    if(props.inputLength > 5) {
        validationMessage = "Text is too long";
    }

    return (
        <div>
            <p>{props.inputLength}</p>     
            <p>{validationMessage}</p>     
        </div>
    );
};

export default validation;
