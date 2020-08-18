import React from 'react';
import Answer from './Answer/Answer';
import styles from './Answers.module.css';

const Answers = (props) => {
    return (
        <div className={`${styles.answerOptions} rounded`}>
                {props.answers.map(
                    answer => {
                        return <Answer id={props.answers.indexOf(answer)} answer={answer} setDescriptionBirdId={props.setDescriptionBirdId} setScore={props.setScore} isCorrect={props.isCorrect}/>
                    }
                )}
        </div>
    )
}



export default Answers;