import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import missionsReducer from "./missionsReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers( {
    repos: missionsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))