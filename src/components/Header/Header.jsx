import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';




const Header = (props) => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.topPannel}>
                <img className={styles.logo} src="https://birds-quiz.netlify.app//static/media/logo.4f82cd73.svg" alt="logo"/>
                <div className={styles.scorePannel}>Score: {props.score} </div>
            </div>
            <div className={`${styles.questionPannel} rounded`}>
                <div className={`${styles.pannelItem} ${props.counter===1?styles.currentTask:null}`}>Разминка</div>
                <div className={`${styles.pannelItem} ${props.counter===2?styles.currentTask:null}`}>Воробьиные</div>
                <div className={`${styles.pannelItem} ${props.counter===3?styles.currentTask:null}`}>Лесные птицы</div>
                <div className={`${styles.pannelItem} ${props.counter===4?styles.currentTask:null}`}>Певчие птицы</div>
                <div className={`${styles.pannelItem} ${props.counter===5?styles.currentTask:null}`}>Хищные птицы</div>
                <div className={`${styles.pannelItem} ${props.counter===6?styles.currentTask:null}`}>Морские птицы</div>
            </div>
        </div>
    )
}




export default Header;