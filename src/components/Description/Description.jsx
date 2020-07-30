import React from 'react';
import styles from './Description.module.css'


const Description = () => {
    return (
        <>
            <div className={styles.descriptionWrapper}>
                <img src="https://image.flaticon.com/icons/svg/1629/1629330.svg" alt="current bird"/>
                <div className={styles.birdNameWrapper}>
                    <p>Клёст</p>
                    <p>Loxia curvirostra</p>
                    <div>Player</div>
                </div>
            </div>
            <p>Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.</p>
        </>
    )
}
export default Description;