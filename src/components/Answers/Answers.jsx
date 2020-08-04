import React from 'react';
import Answer from './Answer/Answer';
import styles from './Answers.module.css';

const Answers = (props) => {
    console.log(props)
    return (
        <div className={`${styles.answerOptions} rounded`}>
                {props.answers.map(
                    answer => {
                        return <Answer answer={answer} setDescriptionBirdId={props.setDescriptionBirdId}/>
                    }
                )}
        </div>
    )
}



export default Answers;