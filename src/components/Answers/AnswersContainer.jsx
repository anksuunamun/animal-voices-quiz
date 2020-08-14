import React from 'react'; 
import Answers from './Answers';
import { birdDescriptionIdAC } from '../../redux/WarmUp-reducer';
import { connect } from 'react-redux';


class AnswersContainer extends React.Component {
    
    render() {return (
        <Answers {...this.props}/>
    )}
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        "setDescriptionBirdId": (id) => dispatch(birdDescriptionIdAC(id)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AnswersContainer);