import {applyMiddleware, combineReducers, createStore} from "redux";
import gameReducer from "./gameReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
    game: gameReducer
})


const store = createStore(reducers, applyMiddleware(thunk));

export default store