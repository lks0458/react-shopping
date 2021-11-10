import React, {useState} from 'react';
import './Back.css';


function Back() {
    const [choiceImg, setChoiceImg] = useState("true");

    let i = 0;
    setTimeout(function() {
        setInterval(() => {
            if(choiceImg === true){
                setChoiceImg(false);
            }else{
                setChoiceImg(true);
                i++;
            }
        }, 5000)
    }, 3000);

    return (
        <div className={choiceImg ? "back" + Math.floor(Math.random() * 5) : "back" +Math.floor(Math.random() * 5)}>
            <h1>Design Your Style</h1>
        </div>
    )
}

export default Back;