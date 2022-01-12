import {increaseId} from "../auxiliaryTools/auxiliaryTools";

const ADD_MESSAGE = "ADD_MESSAGE"
const CHANGE_MESSAGE = "CHANGE_MESSAGE"
const FOLLOW = "FOLLOW"
const UN_FOLLOW = "UN_FOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const TOTAL_COUNT_USERS = "TOTAL_COUNT_USERS"
const SWITCH_IS_FETCHING = "SWITCH_IS_FETCHING"


export const changeMessageAction = (newText) => ({type: CHANGE_MESSAGE, newText: newText})
export const addMessageAction = () => ({type: ADD_MESSAGE})


export const following = (userId, followed) => ({type: FOLLOW, id: userId, followed:followed})
export const unFollow = (userId, followed) => ({type: UN_FOLLOW, id: userId, followed:followed})
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const totalCountUsers = (amount) => ({type: TOTAL_COUNT_USERS, amount: amount})
export const setCurrentPage = (number) => ({type: SET_CURRENT_PAGE, number: number})
export const switchIsFetching = (isFetching) => ({type: SWITCH_IS_FETCHING, isFetching: isFetching})


const initialState = {
    member: [],
    amountUsers: 10,
    countUsers: 0,
    activePage: 1,
    isFetching: false,

    users: [
        {id: "1", name: "Roman"},
        {id: "2", name: "Maryna"},
        {id: "3", name: "Rostyslav"},
    ],
    messages: [
        {id: 0, message: "Hello people!"},
        {id: 1, message: "Hi friend!"},
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
            return {
                ...messagesPage,
                member: messagesPage.member.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: action.followed}
                    }
                    return user
                })
            }
        }
        case  FOLLOW: {
            return {
                ...messagesPage, member: messagesPage.member.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: action.followed}
                    }
                    return user
                })
            }
        }
        case  SET_USERS: {
            return {...messagesPage, member: action.users}
        }
        case  TOTAL_COUNT_USERS: {
            return {...messagesPage, countUsers: action.amount}
        }
        case  SET_CURRENT_PAGE: {
            return {...messagesPage, activePage: action.number}
        }
        case  SWITCH_IS_FETCHING: {
            return {...messagesPage, isFetching: action.isFetching}
        }

        default:
            return messagesPage
    }
}

export default messagePageReducer