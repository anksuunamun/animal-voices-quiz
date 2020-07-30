import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import QuestionContainer from './components/Question/QuestionContainer';
import AnswersContainer from './components/Answers/AnswersContainer';
import DescriptionContainer from './components/Description/DescriptionContainer';
import NextButtonContainer from './components/NextButton/NextButtonContainer';



const App = (props) => {
  return(
    <>
    <div className="headerWrapper">
      <div className="contentWrapper">
        <HeaderContainer />
      </div>
    </div>
    <div className="questionWrapper">
        <div className="contentWrapper rounded blockBackgroundcolor">
          <QuestionContainer />
        </div>
    </div>
    <div className="answersWrapper">
      <div className="contentWrapper">
        <div className="rounded blockBackgroundcolor"><AnswersContainer /></div>
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


export default App;