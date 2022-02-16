import {increaseId} from "../auxiliaryTools/auxiliaryTools";

const ADD_MESSAGE = "ADD_MESSAGE";

export const addMessage = (newText) => ({type: ADD_MESSAGE, newText: newText});

const initialState = {
    users: [
        {id: "1", name: "Roman"},
        {id: "2", name: "Maryna"},
        {id: "3", name: "Rostyslav"},
    ],
    messages: [
        {id: 0, message: "Hello people!"},
        {id: 1, message: "Hi friend!"},
    ]
};

const messagePageReducer = (messagesPage = initialState, action) => {

    switch (action.type) {
        case  ADD_MESSAGE: {

            let stateCopy = {...messagesPage}
            stateCopy.messages = [...messagesPage.messages]

            let message = {
                id: increaseId(messagesPage.messages.length),
                message: action.newText,
            }
            stateCopy.messages.push(message)

            return stateCopy
        }

        default:
            return messagesPage
    }
};

export default messagePageReducer;