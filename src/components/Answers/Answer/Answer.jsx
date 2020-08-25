import React from 'react';
import styles from './Answer.module.css'
import { setBirdThunk } from '../../../redux/WarmUp-reducer';
import { useState } from 'react';
import { useEffect } from 'react';

//https://freesound.org/data/previews/448/448265_8282364-lq.mp3 correct
//https://freesound.org/data/previews/331/331912_3248244-lq.mp3 wrong
const Answer = (props) => {
    props.setIsClicked();
    let onOptionClick = () => {
        props.setDescriptionBirdId(props.answer[1]);
        setBirdThunk(props.answer[1]);
        props.setScore();
        setClicked(true);
        console.log(props);
    }
    let onOptionClickAfterCorrect = () => {
        props.setDescriptionBirdId(props.answer[1]);
        setBirdThunk(props.answer[1]);
    }
    
    if (props.isCorrect) {
        props.setStopClick();
    }

    const [clicked, setClicked] = useState(props.isClicked);
    useEffect( () => {return () =>{setClicked(false);}  },[props.isClicked] )

    let wrongStyle = clicked&&(props.id!==props.currentBirdName&&props.isClicked);
    let correctStyle = clicked&&(props.id===props.currentBirdName&&props.isClicked);

    let x = document.getElementById("pausedAudio");
    const pauseAudio = () => {
        if (props.isCorrect) {
            x.pause();
        } 
    }
    return(
        <>
        <div className={styles.optionItem} onClick={props.isCorrect?onOptionClickAfterCorrect: onOptionClick} >
            {correctStyle&& <audio className={styles.audioStyle} autoPlay controls src="https://freesound.org/data/previews/448/448265_8282364-lq.mp3"></audio>}
            {correctStyle&&pauseAudio()}
            {wrongStyle&&<audio className={styles.audioStyle} autoPlay controls src="https://freesound.org/data/previews/331/331912_3248244-lq.mp3"> 
            </audio>}
            <span className={`${styles.circle} ${(wrongStyle&&styles.wrongAnswer)||(correctStyle&&styles.correctAnswer)||null}
            `}>&#x25CF;</span>
            {props.answer[0]}
        </div>
        </>
    )
}


export default Answer;