import React from 'react';
import styles from './Question.module.css';



const Question = (props) => {
    console.log(props)
    props.setCurrentBird(props.id);
    return (
        <div className={styles.questionWrapper}>
            {props.isCorrect? <img src = {props.image} alt={`${props.name}фото`}/> :
            <img src="https://birds-quiz.netlify.app//static/media/bird.06a46938.jpg" alt="unknownBird"/>}
            <div className={styles.songWrapper}>
                {props.isCorrect? <div>{props.name}</div> :
                <div>******</div>}
                <audio controls>
                    <source src={props.audio} type="audio/mpeg"></source>
                </audio>
            </div>
        </div>
    )
}



export default Question;