import warmupReducer from "./WarmUp-reducer";
import { combineReducers, createStore }  from 'redux';






let reducers = combineReducers( {
    warmupPage: warmupReducer,
})

const store = createStore(reducers);

export default store;