import s from "./Messages.module.css"
import {NavLink} from "react-router-dom"
import React from "react";


function User(props) {
    // let path = "/messages/" + props.id
    return (
        <NavLink to={"/messages/"}>{props.name}</NavLink>
    )
}

function Message(props) {
    return (
        <div>{props.message}</div>
    )
}

function Messages(props) {
    const message = props.state.messages.map(message => {
        return (
            <Message key={message.id} message={message.message}/>
        )
    })
    const user = props.state.users.map(user => {
        return (
            <User key={user.id} name={user.name} id={user.id}/>
        )
    })

    const valueTextarea = React.createRef()
    const addMessage = () => {
        let text = valueTextarea.current.value
        props.addMessage(text)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.users}>
                {user}
            </div>
            <div className={s.dialogs}>
                 <textarea onClick={() => {valueTextarea.current.value = ""}}
                           ref={valueTextarea}>write comment
                </textarea>
                <button onClick={addMessage} className={s.add}>Add</button>
                {message}
            </div>
        </div>
    )
}

export default Messages;
