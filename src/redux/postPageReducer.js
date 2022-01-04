import {increaseId} from "./auxiliaryTools";

const CHANGE_POST = "CHANGE_POST"
const ADD_POST = "ADD_POST"

export const changePostAction = (newText) => ({type: CHANGE_POST, newText: newText})
export const addPostAction = () => ({type: ADD_POST})


const postPageReducer = (postPage, action) => {
    switch (action.type) {
        case CHANGE_POST:
            postPage.newTextPost = action.newText
            console.log(postPage)
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