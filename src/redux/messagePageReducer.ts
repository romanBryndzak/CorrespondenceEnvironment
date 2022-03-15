import {increaseId} from "../auxiliaryTools/auxiliaryTools";

const ADD_MESSAGE = "ADD_MESSAGE";

type addMessageType = {
    type: typeof ADD_MESSAGE,
    newText: string,
};

export const addMessage = (newText: string): addMessageType => ({type: ADD_MESSAGE, newText: newText,});

type usersType = {
    id: number,
    name: string,
    lastName: string,
};

type messagesType = {
    id: number,
    message: string,
};

// const initialStateType = {
//     users: [] as Array<usersType>,
//     messages: [] as Array<messagesType>,
// };

/*const initialState: typeof initialStateType = {
    users: [
        {id: 1, name: "Roman", lastName: "Bryndzak"},
        {id: 2, name: "Maryna", lastName: "Bryndzak"},
        {id: 3, name: "Rostyslav", lastName: "Bryndzak"},
    ],
    messages: [
        {id: 0, message: "Hello people!"},
        {id: 1, message: "Hi friend!"},
    ]
};*/

const initialState = {
    users: [
        {id: 1, name: "Roman", lastName: "Bryndzak"},
        {id: 2, name: "Maryna", lastName: "Bryndzak"},
        {id: 3, name: "Rostyslav", lastName: "Bryndzak"},
    ] as Array<usersType>,
    messages: [
        {id: 0, message: "Hello people!"},
        {id: 1, message: "Hi friend!"},
    ] as Array<messagesType>
};

export type initialStateType = typeof initialState;

const messagePageReducer = (messagesPage = initialState, action: any): initialStateType => {

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