import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';



const HeaderContainer = (props) => {
    return (
        <div>
            <Header score={props.score} counter={props.counter}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        "score": state.warmupPage.score,
        "counter": state.warmupPage.counter,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);