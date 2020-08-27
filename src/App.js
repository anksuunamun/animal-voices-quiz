import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import {  BrowserRouter } from 'react-router-dom';
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