import React from 'react';
import styles from './BirdDescription.module.css';
import Audio from '../../common/Audio/Audio';

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
                    <Audio audio={props.audio} id={props.id} currentAudio={props.currentDescriptionAudio} setAudio ={props.setAudio}/>
                </div>
            </div>
            <p className={styles.textDescription}>{props.description}</p>
            </>
    )
}

export default BirdDescription;