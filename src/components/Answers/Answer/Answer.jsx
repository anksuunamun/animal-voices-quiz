import React from 'react';
import styles from './Answer.module.css'
import { setBirdThunk } from '../../../redux/WarmUp-reducer';

const Answer = (props) => {
    
    let onOptionClick = () => {
        props.setDescriptionBirdId(props.answer[1]);
        setBirdThunk(props.answer[1])
    }
    return(
        <>
        <div className={styles.optionItem} onClick={onOptionClick} >
            <span className={styles.circle} >&#x25CF;</span>
            {props.answer[0]}
        </div>
        </>
    )
}


export default Answer;