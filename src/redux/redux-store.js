import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"
import postPageReducer from "./postPageReducer";
import usersPageReducer from "./usersPageReducer";
import AuthorizationReducer from "./AuthorizationReducer";
import messagePageReducer from "./messagePageReducer";

let reducers = combineReducers({
    postPage: postPageReducer,
    messagesPage: messagePageReducer,
    usersP: usersPageReducer,
    authorization: AuthorizationReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store