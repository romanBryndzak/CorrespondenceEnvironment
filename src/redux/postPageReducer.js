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
            postPage.newTextPost = action.newText

            return postPage

        case ADD_POST:
            let text = postPage.newTextPost
            let post = {
                id: increaseId(postPage.posts.length),
                post: text,
                like: 3
            }
            postPage.posts.push(post)
            postPage.newTextPost = "Write to me!"

            return postPage

        default:
            return postPage
    }
}

export default postPageReducer;