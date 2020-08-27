import React from 'react';
import styles from './Question.module.css';
import unknownAnimal from '../../assets/unknownAnimal.png';



const Question = (props) => {
    console.log(`Правильный ответ: ${props.id}. ${props.name}`)
    props.setCurrentBird(props.id);
 
    


    if (props.audio!=="")
   { return (
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
                <audio id="pausedAudio" controls src={props.audio}>
                    
                </audio>
            </div>
        </div>
    )}
}



export default Question;