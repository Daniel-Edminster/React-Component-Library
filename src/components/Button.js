import React from 'react';
// import './fonts.css';
import './Button.css';
// import './fonts.css';
import Icon from './Icon';

const Button = (props) => {
    let classList = "";
    let innerComponents;
    if(props.label) innerComponents = props.label;

    // if(!props.label)

    // console.log(props.icon);


    let types = [
        'primary','primary-hollow','primary-muted',
        'success','success-hollow','success-muted',
        'warning','warning-hollow','warning-muted',
        'danger','danger-hollow','danger-muted',
        'default','default-hollow','default-muted',
        'cart-text', 'cart', 'favorites-text', 'favorites', 'icon-only'
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
 
    if(props.icon && props.label)
    {

        return (
        <button className={classList}>
            <div className="buttonContent">
            <Icon source={props.icon} />
        
            <span className="textWithIcon">{innerComponents}</span>
            </div>
        </button> 
        )

    }
    else if(props.icon && (!props.label))
    {

        return (
        <button className={classList}>
            <div className="buttonContent">
            <Icon source={props.icon} />
            </div>
        </button> 
        )

    }
    else {
        return(
            <button className={classList}>
            <div className="buttonContent">
            <span> {innerComponents}</span>
            </div>
            </button> 
        )
    }
}

export default Button; 
