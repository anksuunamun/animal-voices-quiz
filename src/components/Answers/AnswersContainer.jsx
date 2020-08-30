import React from 'react'; 
import Answers from './Answers';
import { birdDescriptionIdAC, setScore, setIsClicked, setStopClick } from '../../redux/WarmUp-reducer';
import { connect } from 'react-redux';


class AnswersContainer extends React.Component {

    render() {return (
        <Answers {...this.props}/>
    )}
}

const mapStateToProps = (state) => {
    return {
        "isCorrect": state.warmupPage.isCorrect,
        "isClicked": state.warmupPage.isClicked,
        "stopClick": state.warmupPage.stopClick,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        "setDescriptionBirdId": (id) => dispatch(birdDescriptionIdAC(id)),
        "setScore": () => dispatch(setScore()),
        "setIsClicked": () => dispatch(setIsClicked()),
        "setStopClick": () => dispatch(setStopClick()),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AnswersContainer);