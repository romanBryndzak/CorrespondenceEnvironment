import {increaseId} from "../auxiliaryTools/auxiliaryTools";
import {profileAPI, userAPI} from "../api/api";
import {setUsers, switchIsFetching, totalCountUsers} from "./usersPageReducer";

const CHANGE_POST = "CHANGE_POST"
const ADD_POST = "ADD_POST"
const CHANGE_STATUS = "CHANGE_STATUS"
const SET_STATUS = "SET_STATUS"
const ADD_INFO_USER = "ADD_INFO_USER"

export const changePost = (newText) => ({type: CHANGE_POST, newText: newText})
export const addPost = () => ({type: ADD_POST})
export const changeStatus = (newText) => ({type: CHANGE_STATUS, newText: newText})
export const setStatus = (status) => ({type: SET_STATUS, newStatus: status})
export const addInfoUser = (infoUser) => ({type: ADD_INFO_USER, infoUser: infoUser})

const initialState = {
    status: "",

    infoUser: {
        aboutMe: "",
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: "",
        userId: null,
        photos: {
            small: null,
            large: null
        }
    },

    posts: [
        {id: 0, post: "Development in react is very interesting!", like: 5},
        {id: 1, post: "Yes bro, I support your opinion.", like: 2},
        {id: 2, post: "On my think, angular is better!", like: 0},
    ],
    newTextPost: "Write to me!"
}

const mainPageReducer = (mainPage = initialState, action) => {
    switch (action.type) {
        case CHANGE_POST:
            return {...mainPage, newTextPost: action.newText}

        case CHANGE_STATUS:
            return {...mainPage, status: action.newText}

        case SET_STATUS:
            return {...mainPage, status: action.newStatus}

        case ADD_INFO_USER:
            return {...mainPage, infoUser: action.infoUser}

        case ADD_POST:
            let text = mainPage.newTextPost
            let idNumber = increaseId(mainPage.posts.length)

            return {
                ...mainPage,
                newTextPost: "Write to me!",
                posts: [...mainPage.posts, {id: idNumber, post: text, like: 0}]
            }

        default:
            return mainPage
    }
}

export default mainPageReducer;


export const getProfile = (userId) => (dispatch) => {
    dispatch(switchIsFetching(true))
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(switchIsFetching(false))
            dispatch(addInfoUser(response.data))
        })

}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.putStatus(status).then(response => {
        if (response.status === 200) {
            dispatch(setStatus(status))
        }
    })
}