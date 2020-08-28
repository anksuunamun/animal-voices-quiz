import React from 'react';
import styles from './Audio.module.css'
import { useState } from 'react';
import { useEffect } from 'react';

const Audio = (props) => {

    const [playAudio, setPlayAudio] = useState(true);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    let [firstPerc, setFirst] = useState(0);
    let [secondPerc, setSecond] = useState(0);
  //  const [isReplacing, setIsReplacing] = useState(false);

    const onAudioClick = () => {
        if (playAudio) {
            props.currentAudio.play();
            setPlayAudio(false);
        }
        else if (!playAudio) {
            props.currentAudio.pause();
            setPlayAudio(true);
        }
    }

    useEffect(() => {
        if (props.currentAudio) { setDuration(props.currentAudio.duration); }
    }, [props.currentAudio])


    useEffect(() => {
        if (props.currentAudio) {
            setProgress(props.currentAudio.currentTime);
        }

    }, [props.currentAudio])
    useEffect(() => {
        let perc = (progress * 100) / duration;
        setSecond(perc);
        setFirst(perc)
    }, [progress, duration])

    const onLoad = () => {
        props.setAudio(document.getElementById(props.id || "pausedAudio"))
    }

    const onCurrentTimeChange = () => {
        setProgress(props.currentAudio.currentTime)
    }

    const onDurCh = () => {
        setDuration(props.currentAudio.duration);
    }

    /* const onMouseClick = (e) => {
         console.log("1");
         console.log(e.clientX)
 
         setIsReplacing(true);
     } 
 
     const onMouOv = (e) => {
         if (isReplacing) {
             firstPerc = e.clientX;
             secondPerc = e.clientX;
         }
     } */

    const lineStyle = {
        background: 'linear-gradient(to right, #AE54D8 0%, #7E26A6 ' + firstPerc + '%, #73605B ' + secondPerc + '%, #73605B 100% )',
    }

    const circleStyle = {
        left: firstPerc + '%',
    }


    if (true) {
        return (

            <div className={styles.audioWrapper}>
                <div className={styles.playButton} onClick={onAudioClick}>

                    {playAudio && <svg viewBox="-200 0 1200 1000">
                        <path fill="#AE54D8" d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z"></path>
                    </svg>}

                    {!playAudio && <svg viewBox="0 0 47.607 47.607">
                        <path fill="#AE54D8" d="M17.991 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345zM42.877 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345z"></path>
                    </svg>}
                </div>
                <div>
                    <div className={styles.progressLine} style={lineStyle}>

                        <div className={styles.circle} style={circleStyle} /*onMouseDown={(e)=>{onMouseClick(e)}} onMouseOver={(e)=>{onMouOv(e)}}*/></div>
                        <div className={styles.timeStyle}>
                            <div>{progress ? ("00:" + (((progress).toFixed(0)).toString(10).length === 1 ? "0" + ((progress).toFixed(0)) :
                                ((progress).toFixed(0)))) :
                                "00:00"}
                            </div>
                            <div>{duration ? (
                                duration <= 59 ? ("00:" + (((duration).toFixed(0)).toString(10).length === 1 ? "0" + ((duration).toFixed(0)) :
                                    ((duration).toFixed(0)))) :
                                    ("0" + Math.floor(duration / 60) + ":" + ((Math.floor(duration - 60).toString(10).length === 1 ? ("0" + Math.floor(duration - 60)) : Math.floor(duration - 60))))
                            ) : "00:00"}</div>
                        </div>
                    </div></div>
                <audio id={props.id ? props.id : "pausedAudio"} controls src={props.audio} onLoadedData={onLoad} onTimeUpdate={onCurrentTimeChange} onDurationChange={onDurCh}>
                </audio>
            </div>

        )
    }
    else {
        return (
            <div>Loading...</div>
        )
    }



}

export default Audio;