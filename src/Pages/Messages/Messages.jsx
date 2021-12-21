import s from "./Messages.module.css"
import {NavLink} from "react-router-dom"

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
                <User name="Roman" id="1"/>
                <User name="Maryna" id="2"/>
                <User name="Rostyslav" id="3"/>
                <User name="Snizhana" id="4"/>
                <User name="Illia" id="5"/>
            </div>
            <div className={s.dialogs}>
                <Message message='Hello peopel!'/>
                <Message message='Hi freind!'/>
                <Message message='How are you?'/>
            </div>
        </div>
    )
}

export default Messages;
