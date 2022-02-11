import s from "./Messages.module.css"
import {NavLink} from "react-router-dom"
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../auxiliaryTools/auxiliaryTools";
import {maxLength, requiredTextarea} from "../../auxiliaryTools/fieldValidator";


function User(props) {
    return (<NavLink to={"/messages/"}>{props.name}</NavLink>)
}

const maxLengthText = maxLength(100)

function MesForm(props) {
    return (<form onSubmit={props.handleSubmit}>
        <Field name='message' component={Textarea} type='text' placeholder='write me'
               validate={[requiredTextarea, maxLengthText]}
        />
        <button type='submit' className={s.add}>Add</button>
    </form>)
}

const ReduxForm = reduxForm({form: 'message'})(MesForm)

function MessageForm(props) {
    let onSubmit = formData => props.addMessage(formData.message)
    return (<ReduxForm onSubmit={onSubmit}/>)
}

function Message(props) {
    return (<div>{props.message}</div>)
}

function Messages(props) {

    const message = props.messagesPage.messages.map(message => {
        return (<Message key={message.id} message={message.message}/>)
    })
    const user = props.messagesPage.users.map(user => {
        return (<User key={user.id} name={user.name} id={user.id}/>)
    })

    return (<div className={s.wrapper}>
        <div className={s.users}>
            {user}
        </div>
        <div className={s.dialogs}>
            <MessageForm addMessage={props.addMessage}/>
            {message}
        </div>
    </div>)
}

export default Messages;