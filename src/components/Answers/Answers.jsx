import React from 'react';
import Answer from './Answer/Answer';
import styles from './Answers.module.css';

const Answers = (props) => {
    return (
        <div className={`${styles.answerOptions} rounded`}>
                {props.answers.map(
                    answer => {
                        return <Answer setStopClick={props.setStopClick} stopClick={props.stopClick} setIsClicked={props.setIsClicked} isClicked={props.isClicked} currentBirdName={props.currentBirdName} id={props.answers.indexOf(answer)+1} answer={answer} setDescriptionBirdId={props.setDescriptionBirdId} setScore={props.setScore} isCorrect={props.isCorrect}/>
                    }
                )}
        </div>
    )
}



export default Answers;