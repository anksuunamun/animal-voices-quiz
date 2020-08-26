import React from 'react';
import styles from './BirdDescription.module.css'

const BirdDescription = (props) => {
    return (
        <>
            <div className={styles.descriptionWrapper}>
            
                <img src={props.image} alt="current bird" className="roundedImage"/>
                <div className={styles.birdNameWrapper}>
                    <p className={styles.birdName}>{props.name}</p>
                    <hr className={styles.greyLine}></hr>
                    <p className={styles.speciesWrappper}>{props.species}</p>
                    <hr className={styles.greyLine}></hr>
                    <audio controls src={props.audio}>
                    </audio>
                </div>
            </div>
            <p className={styles.textDescription}>{props.description}</p>
            </>
    )
}

export default BirdDescription;