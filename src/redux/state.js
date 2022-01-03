let store = {
    state : {
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
        },

        postPage: {
            posts: [
                {id: 0, post: "Development in react is very interesting!", like: 5},
                {id: 1, post: "Yes bro, I support your opinion.", like: 2},
                {id: 2, post: "On my think, angular is better!", like: 0},
            ],
            textTextarea: "Write to me!"
        }

    },

    getState() {
        return this.state
    },

    _callSubscriber () {},

    subscribe (observer){
        this._callSubscriber = observer
    },

    increaseId(length) {
        return length++
    },

    addPost() {
        let text = this.state.postPage.textTextarea
        let post = {
            id: this.increaseId(this.state.postPage.posts.length),
            post: text,
            like: 3
        }
        this.state.postPage.posts.push(post)
        this.state.postPage.textTextarea = "Write to me!"

        this._callSubscriber(this.state)
    },

    changePost(text) {
        this.state.postPage.textTextarea = text
        this._callSubscriber(this.state)
    },

    addMessage(text) {
        let message = {
            id: 0,
            message: text,
        }
        this.state.messagesPage.messages.push(message)
    }
}

export default store