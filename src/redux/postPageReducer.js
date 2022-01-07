import {increaseId} from "./auxiliaryTools";

const CHANGE_POST = "CHANGE_POST"
const ADD_POST = "ADD_POST"

export const changePostAction = (newText) => ({type: CHANGE_POST, newText: newText})
export const addPostAction = () => ({type: ADD_POST})

const initialState = {
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
            return {
                ...postPage,
                newTextPost: action.newText
            }

        case ADD_POST:
            let text = postPage.newTextPost
            let idNumber = increaseId(postPage.posts.length)

            return {
                ...postPage,
                newTextPost: "Write to me!",
                posts: [...postPage.posts,{id: idNumber, post: text,like: 0}]
            }

        default:
            return postPage
    }
}

export default postPageReducer;