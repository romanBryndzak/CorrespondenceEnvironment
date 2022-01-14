import {combineReducers, createStore} from "redux";
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

const store = createStore(reducers)

window.store = store

export default store