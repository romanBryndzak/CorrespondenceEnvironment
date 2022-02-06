import s from "./Messages.module.css"
import {NavLink} from "react-router-dom"
import React from "react";
import {Field, reduxForm} from "redux-form";


function User(props) {
    return (
        <NavLink to={"/messages/"}>{props.name}</NavLink>
    )
}

function MesForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='message' component='textarea' type='text' placeholder='write me'/>
            <button type='submit' className={s.add}>Add</button>
        </form>
    )
}

const ReduxForm = reduxForm({form: 'message'})(MesForm)

function MessageForm(props) {
    let onSubmit = formData => props.addMessage(formData.message)
    return (
        <ReduxForm onSubmit={onSubmit}/>
    )
}

function Message(props) {
    return (
        <div>{props.message}</div>
    )
}

function Messages(props) {

    const message = props.messagesPage.messages.map(message => {
        return (
            <Message key={message.id} message={message.message}/>
        )
    })
    const user = props.messagesPage.users.map(user => {
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
                <MessageForm addMessage={props.addMessage}/>
                {message}
            </div>
        </div>
    )
}

export default Messages;