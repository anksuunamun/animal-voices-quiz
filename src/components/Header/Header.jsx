import React from 'react';
import styles from './Header.module.css';




const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.topPannel}>
                <img className={styles.logo} src="https://birds-quiz.netlify.app//static/media/logo.4f82cd73.svg" alt="logo"/>
                <div className={styles.scorePannel}>Score: </div>
            </div>
            <div className={`${styles.questionPannel} rounded`}>
                <div className={styles.pannelItem}>Разминка</div>
                <div className={styles.pannelItem}>Воробьиные</div>
                <div className={styles.pannelItem}>Лесные птицы</div>
                <div className={styles.pannelItem}>Певчие птицы</div>
                <div className={styles.pannelItem}>Хищные птицы</div>
                <div className={styles.pannelItem}>Морские птицы</div>
            </div>
        </div>
    )
}




export default Header;