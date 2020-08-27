import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logoImage from '../../assets/logo.png'



const Header = (props) => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.topPannel}>
                <img className={styles.logo} src={logoImage} alt="logo"/>
                <div className={styles.scorePannel}>Score: {props.score} </div>
            </div>
            <div className={`${styles.questionPannel} rounded`}>
                <div className={`${styles.pannelItem} ${props.counter===1?styles.currentTask:null}`}>Хищные</div>
                <div className={`${styles.pannelItem} ${props.counter===2?styles.currentTask:null}`}>Насекомые</div>
                <div className={`${styles.pannelItem} ${props.counter===3?styles.currentTask:null}`}>Парнокопытные</div>
                <div className={`${styles.pannelItem} ${props.counter===4?styles.currentTask:null}`}>Приматы</div>
                <div className={`${styles.pannelItem} ${props.counter===5?styles.currentTask:null}`}>Птицы</div>
                <div className={`${styles.pannelItem} ${props.counter===6?styles.currentTask:null}`}>Случайный</div>
            </div>
        </div>
    )
}




export default Header;