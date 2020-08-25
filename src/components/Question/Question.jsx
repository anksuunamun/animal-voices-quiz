import React from 'react';
import styles from './Question.module.css';




const Question = (props) => {
    console.log(`Правильный ответ: ${props.id}. ${props.name}`)
    console.log(props)
    props.setCurrentBird(props.id);
 
    


    if (props.audio!=="")
   { return (
        <div className={styles.questionWrapper}>
            {props.isCorrect? <img className="roundedImage" src = {props.image} alt={`${props.name}фото`}/> :
            <img className="roundedImage" src="https://birds-quiz.netlify.app//static/media/bird.06a46938.jpg" alt="unknownBird"/>}
            <div className={styles.songWrapper}>
                {props.isCorrect? 
                 <div>{props.name}</div>  
                :
                <div>******</div> }
                <audio id="pausedAudio" controls src={props.audio}>
                    
                </audio>
            </div>
        </div>
    )}
}



export default Question;