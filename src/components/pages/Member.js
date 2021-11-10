import React from 'react';
import '../../App.css';

function Member() {
    const showImg = {
        src: 'https://source.unsplash.com/1600x900/?member',
        alt : 'random images'
 }
    return (
        <>
              <img id="randomImg1"
                src = {showImg.src}
                alt = {showImg.alt}
            />
            <h1 className="member">Member</h1>
        </>
    )
}



export default Member;