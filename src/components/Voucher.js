import React from 'react';
import FormInput from './FormInput';
import './Voucher.css';
import './FormInput.css';


const Voucher = (props) => {
    let size, text, placeholder, classList, FormInputClassList;

    props.size === null ? size = "med" : size = props.size;
    props.text === null ? text = "Redeem" : text = props.text;

    props.placeholder === null ? placeholder = "": placeholder = props.placeholder;

    classList += ` button-${size}`;

    FormInputClassList += ` input-${size}`;

    
    return(
        <div className="Voucher">
        <FormInput placeholder={placeholder} size={size} />
        <button className={classList}> {text} </button>
        </div>
    );

}

export default Voucher;