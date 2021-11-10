import React from 'react';
import '../../App.css'

function Basket() {
        const showImg = {
            src: 'https://source.unsplash.com/1600x900/?basket',
            alt : 'random images'
     }
    return(
        <>
            <img id="randomImg1"
                src = {showImg.src}
                alt = {showImg.alt}
            />
            <h1 className="basket">Basket</h1>
        </>
    ) 
}

export default Basket;
