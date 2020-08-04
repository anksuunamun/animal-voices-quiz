import React from 'react';
import Question from './Question';
import { connect } from 'react-redux';
import { currentBirdAC } from '../../redux/WarmUp-reducer';


class QuestionContainer extends React.Component {
    
    render() {
        
        return (
            <Question {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        "setCurrentBird": currentBirdAC,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);


