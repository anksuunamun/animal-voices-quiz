import React from 'react';
import QuestionContainer from '../Question/QuestionContainer';
import AnswersContainer from '../Answers/AnswersContainer';
import DescriptionContainer from '../Description/DescriptionContainer';
import { connect } from 'react-redux';
import NextButtonContainer from '../NextButton/NextButtonContainer';




const WarmUp = (props) => {
  let currentBird = props.birds[props.questionNumber];
  let answers =  props.birds.map((bird)=> { return [bird.name, bird.id]})
  
  return(
    <>
    <div className="questionWrapper">
        <div className="contentWrapper rounded blockBackgroundcolor">
          <QuestionContainer {...currentBird} isCorrect={props.isCorrect}/>
        </div>
    </div>
    <div className="answersWrapper">
      <div className="contentWrapper">
        <div className="rounded blockBackgroundcolor"><AnswersContainer answers={answers}/></div>
        <div className="rounded blockBackgroundcolor"><DescriptionContainer /></div>
      </div>
    </div>
    <div className="buttonWrapper">
        <div className="contentWrapper">
          <NextButtonContainer />
        </div>
      </div>


    </>
  )
}

const mapStateToProps = (state) => {
  return {
    "isCorrect": state.warmupPage.isCorrect,
    "birds": state.warmupPage.birds,
    "questionNumber": state.warmupPage.questionNumber,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}




export default connect(mapStateToProps, mapDispatchToProps)(WarmUp);