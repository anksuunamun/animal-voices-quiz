import React from 'react';
import styles from './NextButton.module.css'


const NextButton = (props) => {
    const onNextButtonClick = () => {
        props.nextLevelAC();
    }

    return(
            <>
            <button disabled={!props.isCorrect} className={styles.nextButton} onClick = {onNextButtonClick}>Next Level</button>
            </>
    )
}
export default NextButton;