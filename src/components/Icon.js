import React from 'react';
// import './Icon.css';

const Icon = (props) => {

    if(props.source) {
        console.log("Icon props:", props);
        let src="";

        if(props.source="blue-cart") {
            src = "img/cart-2.png";
        }
        else if(props.source="blue-heart") {
            src = "img/hearts.png";
        }
        return(
            <img src={src} className={props.className} /> 
        )

    }
    else {
        return "";
    }
}

export default Icon;