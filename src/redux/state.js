const CHANGE_POST = "CHANGE_POST"
const ADD_POST = "ADD_POST"
const ADD_MESSAGE = "ADD_MESSAGE"
const CHANGE_MESSAGE = "CHANGE_MESSAGE"


let store = {
    state: {
        messagesPage: {
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
        },

        postPage: {
            posts: [
                {id: 0, post: "Development in react is very interesting!", like: 5},
                {id: 1, post: "Yes bro, I support your opinion.", like: 2},
                {id: 2, post: "On my think, angular is better!", like: 0},
            ],
            newTextPost: "Write to me!"
        }

    },

    getState() {
        return this.state
    },

    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    increaseId(length) {
        return length++
    },

    addPost() {

    },

    addMessage(text) {

    },

    dispatch(action) {
        switch (action.type) {

            case CHANGE_MESSAGE:
                this.state.messagesPage.newTextMessage = action.newText

                this._callSubscriber(this.state)
                return this.state

            case  ADD_MESSAGE:
                let message = {
                    id: this.increaseId(this.state.messagesPage.messages.length),
                    message: this.state.messagesPage.newTextMessage,
                }
                this.state.messagesPage.messages.push(message)
                this.state.messagesPage.newTextMessage = "Write comment!"

                this._callSubscriber(this.state)
                return this.state

            case CHANGE_POST:
                this.state.postPage.newTextPost = action.newText

                this._callSubscriber(this.state)
                return this.state

            case ADD_POST:
                let text = this.state.postPage.newTextPost
                let post = {
                    id: this.increaseId(this.state.postPage.posts.length),
                    post: text,
                    like: 3
                }
                this.state.postPage.posts.push(post)
                this.state.postPage.newTextPost = "Write to me!"

                this._callSubscriber(this.state)
                return this.state

            default:
                return this.state
        }
    },
}

export const changePostAction = (newText) => ({type: CHANGE_POST, newText: newText})
export const addPostAction = () => ({type: ADD_POST})
export const changeMessageAction = (newText) => ({type: CHANGE_MESSAGE, newText: newText})
export const addMessageAction = () => ({type: ADD_MESSAGE})

export default store