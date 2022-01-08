import {increaseId} from "./auxiliaryTools";

const ADD_MESSAGE = "ADD_MESSAGE"
const CHANGE_MESSAGE = "CHANGE_MESSAGE"
const FOLLOW = "FOLLOW"
const UN_FOLLOW = "UN_FOLLOW"
const SET_USERS = "SET_USERS"


export const changeMessageAction = (newText) => ({type: CHANGE_MESSAGE, newText: newText})
export const addMessageAction = () => ({type: ADD_MESSAGE})


export const following = (userId) => ({type: FOLLOW, id: userId})
export const unFollow = (userId) => ({type: UN_FOLLOW, id: userId})
export const setUsers = (users) => ({type: SET_USERS, users: users})


const initialState = {
    member: [ ],

    users: [
        {id: "1", name: "Roman"},
        {id: "2", name: "Maryna"},
        {id: "3", name: "Rostyslav"},
        {id: "4", name: "Snizhana"},
        {id: "5", name: "Illia"}
    ],
    messages: [
        {id: 0, message: "Hello people!"},
        {id: 1, message: "Hi friend!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "I am fine thanks. "},
    ],
    newTextMessage: "Write comment!"
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
        case UN_FOLLOW: {
            console.log('unfollow')
            return {
                ...messagesPage,
                member: messagesPage.member.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case  FOLLOW: {
            console.log('follow')
            return {
                ...messagesPage, member: messagesPage.member.map(user => {
                    if (user.id === action.id) {
                        console.log('followInit')
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        }
        case  SET_USERS: {
            return {...messagesPage, member: [...messagesPage.member, ...action.users]}
        }

        default:
            return messagesPage
    }
}

export default messagePageReducer