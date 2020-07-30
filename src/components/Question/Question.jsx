import React from 'react';
import styles from './Question.module.css';



const Question = () => {
    return (
        <div className={styles.questionWrapper}>
            <img src="https://image.flaticon.com/icons/svg/1629/1629330.svg" alt="unknownBird"/>
            <div className={styles.songWrapper}>
                <div>******</div>
                <div>Player</div>
            </div>
        </div>
    )
}



export default Question;