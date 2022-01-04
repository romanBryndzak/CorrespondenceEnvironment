import {increaseId} from "./auxiliaryTools";

const ADD_MESSAGE = "ADD_MESSAGE"
const CHANGE_MESSAGE = "CHANGE_MESSAGE"

export const changeMessageAction = (newText) => ({type: CHANGE_MESSAGE, newText: newText})
export const addMessageAction = () => ({type: ADD_MESSAGE})

const messagePageReducer = (messagesPage, action) => {

    switch (action.type) {

        case CHANGE_MESSAGE:
            messagesPage.newTextMessage = action.newText

            return messagesPage
        case  ADD_MESSAGE:
            let message = {
                id: increaseId(messagesPage.messages.length),
                message: messagesPage.newTextMessage,
            }
            messagesPage.messages.push(message)
            messagesPage.newTextMessage = "Write comment!"

            return messagesPage
        default:
            return messagesPage
    }
}

export default messagePageReducer