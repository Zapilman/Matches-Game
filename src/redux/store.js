import {applyMiddleware, combineReducers, createStore} from "redux";
import gameReducer from "./gameReducer";
import thunk from "redux-thunk";


let reducers = combineReducers({
    game: gameReducer
})


let store = createStore(reducers, applyMiddleware(thunk));

export default store