import React from 'react';


const Victory = (props) => {
    return( 
        <>
            {props.score===30? <h1>Абсолютная победа!</h1>: <h1>Поздравляем!</h1>}  <br></br>
            <p>Вы прошли викторину и набрали <b>{props.score}</b> из <b>30</b> возможных баллов</p>
        </>
    )
}

export default Victory;