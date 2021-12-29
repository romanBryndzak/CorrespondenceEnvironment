let state = {
    messagesPage: {
        users: [
            {id: "1", name: "Roman"},
            {id: "2", name: "Maryna"},
            {id: "3", name: "Rostyslav"},
            {id: "4", name: "Snizhana"},
            {id: "5", name: "Illia"}
        ],
        messages: [
            {id: 0, message: "Hello peopel!"},
            {id: 1, message: "Hi freind!"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "I am fine thanks. "},
        ],
    },

    postPage: {
        posts: [
            {id: 0, post: "Development in react is very interesting!", like: 5},
            {id: 1, post: "Yes bro, I support your opinion.", like: 2},
            {id: 2, post: "On my think, angular is better!", like: 0},
        ],
        textTextarea: "Write to me!"
    }

}

let renderEntireTree = () => {}

export const subscribe = (observer) => {
    renderEntireTree = observer
}

function increaseId(length) {
    return length++
}

export function addPost() {
    let text = state.postPage.textTextarea
    let post = {
        id: increaseId(state.postPage.posts.length),
        post: text,
        like: 3
    }
    state.postPage.posts.push(post)
    state.postPage.textTextarea = "Write to me!"

    renderEntireTree(state)
}

export function changePost(text) {
    state.postPage.textTextarea = text
    renderEntireTree(state)
}

export function addMessage(text) {
    let message = {
        id: 0,
        message: text,
    }
    state.messagesPage.messages.push(message)
}

export default state