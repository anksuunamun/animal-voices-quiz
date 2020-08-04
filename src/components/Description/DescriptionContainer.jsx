import React from 'react'; 
import Description from './Description';
import { connect } from 'react-redux';


class DescriptionContainer extends React.Component {
    
    render() {
        return (
            <Description isCorrect = {this.props.isCorrect} bird={this.props.bird} birdDescriptionId={this.props.birdDescriptionId} descriptionBird={this.props.descriptionBird}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        "isCorrect": state.warmupPage.isCorrect,
        "bird": state.warmupPage.birds[state.warmupPage.questionNumber],
        "birdDescriptionId": state.warmupPage.birdDescriptionId,
        
    }
}


export default connect(mapStateToProps, {})(DescriptionContainer);