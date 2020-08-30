import React from 'react';
import Question from './Question';
import { connect } from 'react-redux';
import { currentBirdAC, setAudio } from '../../redux/WarmUp-reducer';


class QuestionContainer extends React.Component {
  
   
    render() {
        
        return (
            <Question {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        "isCorrect": state.warmupPage.isCorrect,
        "currentAudio": state.warmupPage.currentAudio,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        "setCurrentBird": (id) => dispatch(currentBirdAC(id)),
        "setAudio": (audio) => dispatch(setAudio(audio)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);


