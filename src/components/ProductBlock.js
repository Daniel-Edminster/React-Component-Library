import React from 'react';
import './ProductBlock.css';
import Icon from './Icon';
import Button from './Button';

const ProductBlock = (props) =>
{
    let {image, name, rating, orientation, inline, color, description, salePrice, permPrice} = props;
    let containerClassList, hrClassList, favoritesIconSource, cartIconSource;

    let stars = "starYellow";
    let emptyStars = "starGrey";
    let allowedOrientations = ["vertical","horizontal","mini","inline"];
    let allowedColors = ["muted"];

    name == null ? name = "Product Name" : name = name;
   
    if(color == null) color = "";
    if(!allowedColors.includes(color.toLowerCase())) color = "";
   
    if(!orientation) orientation = "vertical";
    if(!allowedOrientations.includes(orientation.toLowerCase())) orientation = "vertical";

    containerClassList = `ProductBlock-${orientation}`;
    containerClassList += ` ${color}`;

    color === "" ? hrClassList = "ruler-default" : hrClassList = `ruler-${color}`;

    if(color === "") {
        favoritesIconSource = "heart-circle-hollow";
        cartIconSource = "cart-circle-hollow";
    }
    else if(color === "muted") {
        favoritesIconSource = "heart-circle";
        cartIconSource = "cart-circle";
    }

    rating == null ? rating = 5: rating = parseInt(rating);
    if(rating > 5)
        rating = 5;
    else if(rating < 0)
        rating = 0;

    let ratingsIconArray = [];

    for(let i=0;i<rating;i++) ratingsIconArray.push(stars);
    for(let j=rating;j<5;j++) ratingsIconArray.push(emptyStars);

    const renderRatings = () => ratingsIconArray.map((star, iterator) => <Icon source={star} key={iterator} />);

    const setOverlayDimensions = () => {
        let img = document.querySelector(".ProductBlock-image");
        // console.log(img);

        let h = img.clientHeight;
        let w = img.clientWidth;
        let overlay = document.querySelector(".ProductBlock-image-overlay");
        // console.log(h, w, overlay);
        overlay.style.width = `${w}px`;
        overlay.style.height = `${h}px`;

    }

    switch(orientation) {
        case "vertical":
            return(
                <div className={containerClassList} onLoad={setOverlayDimensions}>
                    <div className="ProductBlock-image" >
                        <div className="ProductBlock-image-overlay">
                            <a href="#" className="ProductBlock-image-overlay-link"><Icon source={favoritesIconSource} /></a>
                            <a href="#" className="ProductBlock-image-overlay-link"><Icon source={cartIconSource} /></a>
                        </div>
                    <Icon source={image} />
                    </div>
        
                    <hr className={hrClassList} />
        
                    <div className="product-name">{name}</div>
                    <div className="ratings-container">{renderRatings()}</div>
                    
                    <div className="price-container">
                        <div className="sale-price">${salePrice}</div>
                        <div className="permanent-price">${permPrice}</div>
        
                    </div>
                
                </div>
            );

        case "horizontal":
            return(
                <div className={containerClassList} onLoad={setOverlayDimensions}>
                    <div className="ProductBlock-image" >
                        <div className="ProductBlock-image-overlay">
                            <a href="#" className="ProductBlock-image-overlay-link"><Icon source={favoritesIconSource} /></a>
                            <a href="#" className="ProductBlock-image-overlay-link"><Icon source={cartIconSource} /></a>
                        </div>
                    <Icon source={image} />
                    </div>
                    <div className="ProductBlock-horizontal-content">
    
                    <div className="product-name">{name}</div>
                    <div className="ratings-container">{renderRatings()}</div>
                    
                    <div className="price-container">
                        <div className="sale-price">${salePrice}</div>
                        <div className="permanent-price">${permPrice}</div>
        
                    </div>
                    </div>
                
                </div>
            );

        case "mini":
            return(
                <div className={containerClassList} onLoad={setOverlayDimensions}>
                    <div className="ProductBlock-image" >
                        <div className="ProductBlock-image-overlay">
                            <a href="#" className="ProductBlock-image-overlay-link"><Icon source={favoritesIconSource} /></a>
                            <a href="#" className="ProductBlock-image-overlay-link"><Icon source={cartIconSource} /></a>
                        </div>
                    <Icon source={image} />
                    </div>
                    <div className={`ProductBlock-${orientation}-content`}>
    
                    <div className="product-name">{name}</div>
                    <div className="ratings-container">{renderRatings()}</div>
                    
                    <div className="price-container">
                        <div className="sale-price">${salePrice}</div>
                        <div className="permanent-price">${permPrice}</div>
        
                    </div>
                    </div>
                
                </div>
            );

        case "inline":
            return(
                <div className={containerClassList} onLoad={setOverlayDimensions}>
                <div className="ProductBlock-image" >
                    <div className="ProductBlock-image-overlay">
                        <a href="#" className="ProductBlock-image-overlay-link"><Icon source={favoritesIconSource} /></a>
                        <a href="#" className="ProductBlock-image-overlay-link"><Icon source={cartIconSource} /></a>
                    </div>
                <Icon source={image} />
                </div>
                <div className={`ProductBlock-${orientation}-content`}>

                <div className="product-name">{name}</div>
                <div className="ratings-container">{renderRatings()}</div>

                <div className="description-container">{description}</div>
                
                <div className="price-container">
                    <div className="sale-price">${salePrice}</div>
                    <div className="permanent-price">${permPrice}</div>
    
                </div>
                </div>
            
            </div>

            );


        default:
            return(
                <div className={containerClassList} onLoad={setOverlayDimensions}>
                    <div className="ProductBlock-image" >
                        <div className="ProductBlock-image-overlay">
                            <a href="#" className="ProductBlock-image-overlay-link"><Icon source={favoritesIconSource} /></a>
                            <a href="#" className="ProductBlock-image-overlay-link"><Icon source={cartIconSource} /></a>
                        </div>
                    <Icon source={image} />
                    </div>
        
                    <hr className={hrClassList} />
        
                    <div className="product-name">{name}</div>
                    <div className="ratings-container">{renderRatings()}</div>
                    
                    <div className="price-container">
                        <div className="sale-price">${salePrice}</div>
                        <div className="permanent-price">${permPrice}</div>
        
                    </div>
                
                </div>
            );

    }


}

export default ProductBlock;