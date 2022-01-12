import {combineReducers, createStore} from "redux";
import postPageReducer from "./postPageReducer";
import messagePageReducer from "./messagePageReducer";
import AuthorizationReducer from "./AuthorizationReducer";

let reducers = combineReducers({
    postPage: postPageReducer,
    messagesPage: messagePageReducer,
    authorization: AuthorizationReducer,
})

const store = createStore(reducers)

window.store = store

export default store