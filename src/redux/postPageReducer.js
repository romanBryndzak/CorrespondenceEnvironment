import {increaseId} from "../auxiliaryTools/auxiliaryTools";

const CHANGE_POST = "CHANGE_POST"
const ADD_POST = "ADD_POST"
const ADD_INFO_USER = "ADD_INFO_USER"

export const changePost = (newText) => ({type: CHANGE_POST, newText: newText})
export const addPost = () => ({type: ADD_POST})
export const addInfoUser = (infoUser) => ({type: ADD_INFO_USER, infoUser: infoUser})

const initialState = {
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

const postPageReducer = (postPage = initialState, action) => {
    switch (action.type) {
        case CHANGE_POST:
            return {...postPage, newTextPost: action.newText}
        case ADD_INFO_USER:
            return {...postPage, infoUser: action.infoUser}

        case ADD_POST:
            let text = postPage.newTextPost
            let idNumber = increaseId(postPage.posts.length)

            return {
                ...postPage,
                newTextPost: "Write to me!",
                posts: [...postPage.posts, {id: idNumber, post: text, like: 0}]
            }

        default:
            return postPage
    }
}

export default postPageReducer;