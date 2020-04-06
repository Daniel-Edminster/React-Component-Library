import React from 'react';
// import './Icon.css';

import BlueCart from './img/cart_2.png';
import BlueHeart from './img/hearts.png';
import Laptop from './img/laptop.svg';
import starYellow from './img/starYellow.svg';
import starGrey from './img/starGrey.svg';
import HeartCircleHollow from './img/HeartCircleHollow.svg';
import CartCircleHollow from './img/CartCircleHollow.svg';
import HeartCircle from './img/HeartCircle.svg';
import CartCircle from './img/CartCircle.svg';
import Headphones from './img/headphones.png';

const Icon = (props) => {
    let classList = "";
    props.className === null ? classList = "" : classList = props.className;

    if(props.source) {
        console.log("Icon props:", props);
        let src="";

        if(props.source==="blue-cart") {
            src = BlueCart;
        }
        else if(props.source==="blue-heart") {
            src = BlueHeart;
        }
        else if(props.source==="laptop") {
            src = Laptop;
        }
        else if(props.source==="starYellow") {
            src = starYellow;
        }
        else if(props.source==="starGrey") {
            src = starGrey;
        }
        else if(props.source==="heart-circle-hollow") {
            src = HeartCircleHollow;
        }
        else if(props.source==="cart-circle-hollow") {
            src = CartCircleHollow;
        }
        else if(props.source==="heart-circle") {
            src = HeartCircle;
        }
        else if(props.source==="cart-circle") {
            src = CartCircle;
        }
        else if(props.source==="headphones") {
            src = Headphones;
        }
        
        return(
            <img src={src} className={classList} /> 
        )

    }
    else {
        return "";
    }
}

export default Icon;