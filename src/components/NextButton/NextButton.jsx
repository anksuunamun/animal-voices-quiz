import React from 'react';
import styles from './NextButton.module.css'


const NextButton = (props) => {
    const onNextButtonClick = () => {
        props.nextLevelAC();
        if (props.setZeroScore) {
            props.setZeroScore();
        }
        
    }
    

    return(
            <>
            <button disabled={!props.isCorrect} className={`${styles.nextButton} rounded ${props.isCorrect?styles.activeButton:null}`} onClick = {onNextButtonClick}>{props.text||"Next Level"}</button>
            </>
    )
}
export default NextButton;