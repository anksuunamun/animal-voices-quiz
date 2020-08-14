import React from 'react';
import Answer from './Answer/Answer';
import styles from './Answers.module.css';

const Answers = (props) => {
    return (
        <div className={`${styles.answerOptions} rounded`}>
                {props.answers.map(
                    answer => {
                        return <Answer answer={answer} setDescriptionBirdId={props.setDescriptionBirdId} setScore={props.setScore}/>
                    }
                )}
        </div>
    )
}



export default Answers;