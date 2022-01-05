import s from "./Messages.module.css"
import {NavLink} from "react-router-dom"
import React from "react";
import {clearText} from "../../redux/auxiliaryTools";


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

    const message = props.messagePage.messages.map(message => {
        return (
            <Message key={message.id} message={message.message}/>
        )
    })
    const user = props.messagePage.users.map(user => {
        return (
            <User key={user.id} name={user.name} id={user.id}/>
        )
    })

    return (
        <div className={s.wrapper}>
            <div className={s.users}>
                {user}
            </div>
            <div className={s.dialogs}>
                 <textarea onChange={props.changeMessage}
                           onClick={clearText}
                           value={props.valueTextarea}
                 >
                </textarea>
                <button onClick={props.addMessage} className={s.add}>Add</button>
                {message}
            </div>
        </div>
    )
}

export default Messages;