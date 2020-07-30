import React from 'react';


const Answers = (props) => {
    console.log(props)
    return (
        <>
            <ul>
                {props.answers.map(
                    answer => {
                        return <li>{answer}</li>
                    }
                )}
            </ul>
        </>
    )
}



export default Answers;