import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';




const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.topPannel}>
                <img className={styles.logo} src="https://birds-quiz.netlify.app//static/media/logo.4f82cd73.svg" alt="logo"/>
                <div className={styles.scorePannel}>Score: </div>
            </div>
            <div className={`${styles.questionPannel} rounded`}>
                <NavLink className={styles.pannelItem} to="/warmup" >Разминка</NavLink>
                <a className={styles.pannelItem} href="/#" >Воробьиные</a>
                <a className={styles.pannelItem} href="/#" >Лесные птицы</a>
                <a className={styles.pannelItem} href="/#" >Певчие птицы</a>
                <a className={styles.pannelItem} href="/#" >Хищные птицы</a>
                <a className={styles.pannelItem} href="/#" >Морские птицы</a>
            </div>
        </div>
    )
}




export default Header;