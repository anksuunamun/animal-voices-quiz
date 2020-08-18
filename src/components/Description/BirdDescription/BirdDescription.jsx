import React from 'react';
import styles from './BirdDescription.module.css'

const BirdDescription = (props) => {
    return (
        <>
            <div className={styles.descriptionWrapper}>
            
                <img src={props.image} alt="current bird" className="roundedImage"/>
                <div className={styles.birdNameWrapper}>
                    <p>{props.name}</p>
                    <p>{props.species}</p>
                    <audio controls>
                    <source src={props.audio} type="audio/mpeg"></source>
                </audio>
                </div>
            </div>
            <p>{props.description}</p>
            </>
    )
}

export default BirdDescription;