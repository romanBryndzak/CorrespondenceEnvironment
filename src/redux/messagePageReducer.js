import {increaseId} from "../auxiliaryTools/auxiliaryTools";

const ADD_MESSAGE = "ADD_MESSAGE"
const CHANGE_MESSAGE = "CHANGE_MESSAGE"
const SWITCH_IS_FETCHING = "SWITCH_IS_FETCHING"

export const changeMessageAction = (newText) => ({type: CHANGE_MESSAGE, newText: newText})
export const addMessageAction = () => ({type: ADD_MESSAGE})
export const switchIsFetching = (isFetching) => ({type: SWITCH_IS_FETCHING, isFetching: isFetching})

const initialState = {
    isFetching: false,
    newTextMessage: "Write comment!",

    users: [
        {id: "1", name: "Roman"},
        {id: "2", name: "Maryna"},
        {id: "3", name: "Rostyslav"},
    ],
    messages: [
        {id: 0, message: "Hello people!"},
        {id: 1, message: "Hi friend!"},
    ]
}

const messagePageReducer = (messagesPage = initialState, action) => {

    switch (action.type) {
        case CHANGE_MESSAGE: {
            let stateCopy = {...messagesPage}
            stateCopy.newTextMessage = action.newText

            return stateCopy
        }
        case  ADD_MESSAGE: {
            let stateCopy = {...messagesPage}
            stateCopy.messages = [...messagesPage.messages]

            let message = {
                id: increaseId(messagesPage.messages.length),
                message: messagesPage.newTextMessage,
            }
            stateCopy.messages.push(message)
            stateCopy.newTextMessage = "Write comment!"

            return stateCopy
        }
        case
        SWITCH_IS_FETCHING: {
            return {...messagesPage, isFetching: action.isFetching}
        }

        default:
            return messagesPage
    }
}

export default messagePageReducer