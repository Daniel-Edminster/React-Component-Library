import React from 'react';
// import './fonts.css';
import './Button.css';
import Icon from './Icon';

const Button = (props) => {
    let classList = "";
    let innerComponents = props.label;

    // console.log(props.icon);

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
 
    if(props.icon)
    {
        // innerComponents += `<Icon source=${props.icon} />`;
    }
 
 
    return (
    <button className={classList}>
        <Icon source={props.icon} /> {innerComponents}
        {/* <img src="img/cart-2.png" /> */}
    </button> )
}

export default Button; 
