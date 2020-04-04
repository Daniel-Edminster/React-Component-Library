import React from 'react';
// import './Icon.css';

import BlueCart from './img/cart_2.png';
import BlueHeart from './img/hearts.png';

const Icon = (props) => {

    if(props.source) {
        console.log("Icon props:", props);
        let src="";

        if(props.source==="blue-cart") {
            src = BlueCart;
        }
        else if(props.source==="blue-heart") {
            src = BlueHeart;
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