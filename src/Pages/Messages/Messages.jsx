import s from "./Messages.module.css"
import {NavLink} from "react-router-dom"

const users = [
    {id: "1", name: "Roman"},
    {id: "2", name: "Maryna"},
    {id: "3", name: "Rostyslav"},
    {id: "4", name: "Snizhana"},
    {id: "5", name: "Illia"}
]

const user = users.map(user => {
    return (
        <User name={user.name} id={user.id}/>
    )
})

const messages = [
    {id: 0, message: "Hello peopel!"},
    {id: 1, message: "Hi freind!"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "I am fine thanks. "},
]

const message = messages.map(message => {
    return (
        <Message message={message.message}/>
    )
})

function User(props) {
    let path = "/messages/" + props.id
    return (
        <NavLink to={path}>{props.name}</NavLink>
    )
}

function Message(props) {
    return (
        <div>{props.message}</div>
    )
}

function Messages() {
    return (
        <div className={s.wrapper}>
            <div className={s.users}>
                {user}
            </div>
            <div className={s.dialogs}>
                {message}
            </div>
        </div>
    )
}

export default Messages;
