import React from 'react';
import NextButton from './NextButton';
import { connect } from 'react-redux';
import { nextLevelAC } from '../../redux/WarmUp-reducer';


const NextButtonContainer = (props) => {
    return (
        <NextButton {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        "isCorrect": state.warmupPage.isCorrect,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        "nextLevelAC": () => {dispatch(nextLevelAC())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NextButtonContainer);