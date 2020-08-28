import React from 'react';
import QuestionContainer from '../Question/QuestionContainer';
import AnswersContainer from '../Answers/AnswersContainer';
import DescriptionContainer from '../Description/DescriptionContainer';
import { connect } from 'react-redux';
import NextButtonContainer from '../NextButton/NextButtonContainer';
import { setZeroScore } from '../../redux/WarmUp-reducer';
import Victory from '../Victory/Victory';




const WarmUp = (props) => {

  if (!props.gameOver && props.birds) {
    let currentBird = props.birds[props.questionNumber];
    let answers = props.birds.map((bird) => { return [bird.name, bird.id] })
    return (

      <>
        <div className="questionWrapper">
          <div className="contentWrapper rounded blockBackgroundcolor">
            <QuestionContainer {...currentBird} />
          </div>
        </div>
        <div className="answersWrapper">
          <div className="contentWrapper">
            <div className="rounded blockBackgroundcolor answersWrap"><AnswersContainer answers={answers} currentBirdName={props.currentBirdName}/></div>
            <div className="rounded blockBackgroundcolor borderStyle descriptionWrap"><DescriptionContainer /></div>
          </div>
        </div>
        <div className="buttonWrapper">
          <div className="contentWrapper borderStyle rounded">
            <NextButtonContainer className="" />
          </div>
        </div>


      </>
    )
  }
  else {
    return (
      <div className=" contentWrapper">
        <div className="victoryWrapper rounded blockBackgroundcolor ">
          <Victory score={props.score} />
          <hr/>
          <div className="buttonWrapper">
            <div className="borderStyle rounded gameOverButton">
              <NextButtonContainer text="Попробовать ещё раз!" setZeroScore={props.setZeroScore} />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    "isCorrect": state.warmupPage.isCorrect,
    "birds": state.warmupPage.birds,
    "questionNumber": state.warmupPage.questionNumber,
    "gameOver": state.warmupPage.gameOver,
    "score": state.warmupPage.score,
    "currentBirdName": state.warmupPage.currentBirdName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    "setZeroScore": () => {
      dispatch(setZeroScore())
    }
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(WarmUp);