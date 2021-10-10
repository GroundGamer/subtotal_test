import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import missionsReducer from "./missionsReducer"; // Обрабатывает наши state через action.type
import { composeWithDevTools } from 'redux-devtools-extension'; // Позволяет отслеживать изменения наших state в браузере
import thunk from "redux-thunk"; // Библеотека для работы с асинхронными экшенами

const rootReducer = combineReducers( {
    repos: missionsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))