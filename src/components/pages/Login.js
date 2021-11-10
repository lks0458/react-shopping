import React from 'react';
import '../../App.css'

function Login() {
    const showImg = {
        src: 'https://source.unsplash.com/1600x900/?login',
        alt : 'random images'
 }
    return(
        <>
                <img id="randomImg1"
                src = {showImg.src}
                alt = {showImg.alt}
            />
            <h1 className="login">Login</h1>
        </>
    )
}

export default Login;