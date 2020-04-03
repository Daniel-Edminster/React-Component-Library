import React from 'react';
// import './fonts.css';
import './Button.css';

const Button = (props) => {
    let classList = "";

    let types = [
        'primary','primary-hollow','primary-muted',
        'success','success-hollow','success-muted',
        'warning','warning-hollow','warning-muted',
        'danger','danger-hollow','danger-muted',
        'default','default-hollow','default-muted',
        'cart-text', 'cart', 'favorites-text', 'favorites'
    ];

    if(props.type)
    {
        if(types.includes(props.type))
        {
            classList += ` button-${props.type}`;
        }
        else {
            classList += ` button-default`;
        }

    }

    if(props.size)
    {
        if(props.size === "large")
        {
            classList += " button-lg";
        }
    }
 
 
 
 
    return (
    <button className={classList}>
        {props.label}
    </button> )
}

export default Button; 
