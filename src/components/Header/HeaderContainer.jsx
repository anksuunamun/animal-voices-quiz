import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';



const HeaderContainer = (props) => {
    return (
        <div>
            <Header score={props.score}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        "score": state.warmupPage.score,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);