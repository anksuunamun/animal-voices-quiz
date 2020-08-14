import warmupReducer from "./WarmUp-reducer";
import { combineReducers, createStore, applyMiddleware }  from 'redux';
import thunkMiddleware from 'redux-thunk';






let reducers = combineReducers( {
    warmupPage: warmupReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;