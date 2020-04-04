import React from 'react';
import './FormInput.css';

const FormInput = (props) => {
    let Label;
    let Placeholder;
    let classList = "FormInput-input";

    if(props.size) {
        if(props.size === "med")
        {
            classList += " FormInput-input-med";
        }
        else if(props.size === "large")
        {
            classList += " FormInput-input-large";
        }
    }

    if(props.label && props.placeholder) {
        Label = props.label;
        Placeholder = props.placeholder;

    }
    else if(props.label && (!props.placeholder)) {
        Label = props.label;
        Placeholder = props.label;
    }
    else if((!props.label) && props.placeholder) {
        Label = "";
        Placeholder = props.placeholder;
    }
    else {
        Label = "";
        Placeholder = "placeholder text";
    }

    return (
        <div>
        <label className={"FormInput-label"}>{Label}</label>
        <input type="text" className={classList} placeholder={Placeholder} />
        </div>
    );
}

export default FormInput;