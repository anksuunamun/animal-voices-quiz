import React from 'react';
import styles from './Answer.module.css'
import { setBirdThunk } from '../../../redux/WarmUp-reducer';
import { useState } from 'react';

const Answer = (props) => {
    let onOptionClick = () => {
        props.setDescriptionBirdId(props.answer[1]);
        setBirdThunk(props.answer[1]);
        props.setScore();
        setClicked(true);
    }

    const [clicked, setClicked] = useState(props.clicked);
    return(
        <>
        <div className={styles.optionItem} onClick={onOptionClick} >
            <span className={`${styles.circle} 
            `}>&#x25CF;</span>
            {props.answer[0]}
        </div>
        </>
    )
}


export default Answer;