import React from 'react';
import styles from './Question.module.css';
import unknownAnimal from '../../assets/unknownAnimal.png';
import { useEffect } from 'react';



const Question = (props) => {
    
    useEffect( () => {props.setCurrentBird(props.id);} )
    useEffect( () => {console.log(`Правильный ответ: ${props.id}. ${props.name}`)}, [props.id, props.name] )
    
    

    let x = document.getElementById("pausedAudio");
    const pauseAudio = () => {
        console.log(x)
     }
    

    if (props.audio!=="")
   { 
    
       return (
        <div className={styles.questionWrapper}>
            {props.isCorrect? <img className="roundedImage" src = {props.image} alt={`${props.name}фото`}/> :
            <img className="roundedImage" src={unknownAnimal} alt="unknownBird"/>}
            <div className={styles.songWrapper}>
                {props.isCorrect? 
                 <div className={styles.birdName}>{props.name}  <hr className={styles.greyLine}></hr></div>  
                :
                <div className={styles.birdName}>******
                    <hr className={styles.greyLine}></hr>
                </div> }

                <div className={styles.audioWrapper}>
                    <div className={styles.playButton} onClick={pauseAudio}></div>
                    <audio id="pausedAudio" controls src={props.audio}>
                    </audio>
                </div>
               
               
               
               
               
                {/*<audio id="pausedAudio" controls src={props.audio}>
                    
                </audio>*/}
            </div>
        </div>
    )}
}



export default Question;