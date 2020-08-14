import React from 'react'; 
import Description from './Description';
import { connect } from 'react-redux';


class DescriptionContainer extends React.Component {
    state = {
        "birdDescriptionId": this.props.birdDescriptionId,
         "birdDescription": this.props.birdDescription,
         "isCorrect": this.props.isCorrect,
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.birdDescriptionId !== this.props.birdDescriptionId) {
            this.setState(
                {
                 "birdDescriptionId": this.props.birdDescriptionId,
                 "birdDescription": this.props.birdDescription,
                 "isCorrect": this.props.isCorrect,
                }
            )
        }
    }
    

    render() {
        return (
            <Description isCorrect = {this.state.isCorrect} bird={this.props.bird} birdDescriptionId={this.state.birdDescriptionId} birdDescription={this.state.birdDescription}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        "isCorrect": state.warmupPage.isCorrect,
        "bird": state.warmupPage.birds[state.warmupPage.questionNumber],
        "birdDescriptionId": state.warmupPage.birdDescriptionId,
        "birdDescription": state.warmupPage.birdDescription,
        
    }
}


export default connect(mapStateToProps, {})(DescriptionContainer);