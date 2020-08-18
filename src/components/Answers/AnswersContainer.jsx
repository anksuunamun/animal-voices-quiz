import React from 'react'; 
import Answers from './Answers';
import { birdDescriptionIdAC, setScore } from '../../redux/WarmUp-reducer';
import { connect } from 'react-redux';


class AnswersContainer extends React.Component {

    render() {return (
        <Answers {...this.props}/>
    )}
}

const mapStateToProps = (state) => {
    return {
        "isCorrect": state.warmupPage.isCorrect,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        "setDescriptionBirdId": (id) => dispatch(birdDescriptionIdAC(id)),
        "setScore": () => dispatch(setScore()),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AnswersContainer);