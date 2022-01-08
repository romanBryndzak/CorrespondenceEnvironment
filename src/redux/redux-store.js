import {combineReducers, createStore} from "redux";
import postPageReducer from "./postPageReducer";
import messagePageReducer from "./messagePageReducer";

let reducers = combineReducers({
    postPage: postPageReducer,
    messagesPage: messagePageReducer
})

const store = createStore(reducers)

export default store