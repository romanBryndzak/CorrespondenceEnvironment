import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"
import mainPageReducer from "./MainPageReducer";
import usersPageReducer from "./usersPageReducer";
import AuthorizationReducer from "./AuthorizationReducer";
import messagePageReducer from "./messagePageReducer";

let reducers = combineReducers({
    postPage: mainPageReducer,
    messagesPage: messagePageReducer,
    usersP: usersPageReducer,
    authorization: AuthorizationReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store