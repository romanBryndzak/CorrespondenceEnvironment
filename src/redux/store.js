import messagePageReducer from "./usersPageReducer";
import mainPageReducer from "./MainPageReducer";

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

    dispatch(action) {
        messagePageReducer(this.state.messagesPage, action)
        mainPageReducer(this.state.postPage, action)

        this._callSubscriber(this.state)
    },

}

export default store