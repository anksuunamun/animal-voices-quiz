import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import QuestionContainer from './components/Question/QuestionContainer';
import AnswersContainer from './components/Answers/AnswersContainer';
import DescriptionContainer from './components/Description/DescriptionContainer';
import NextButtonContainer from './components/NextButton/NextButtonContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import WarmUp from './components/WarmUp/WarmUp';



const App = (props) => {
  return(
    <>
    <BrowserRouter>
      <div className="headerWrapper">
        <div className="contentWrapper">
          <HeaderContainer />
        </div>
      </div>
      <WarmUp />
      
    </BrowserRouter>
    </>
  )
}


export default App;