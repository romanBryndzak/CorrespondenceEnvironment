import React from "react";
import {addMessageAction, changeMessageAction} from "../../redux/messagePageReducer";
import Messages from "./Messages";

function MessagesContainer(props) {

    const valueTextarea = props.messagePage.newTextMessage

    const addMessage = () => {
        if (valueTextarea !== "Write comment!") {
            props.dispatch(addMessageAction())
        }
    }

    const changeMessage = (event) => {
        let newText = event.target.value
        props.dispatch(changeMessageAction(newText))
    }

    return (
        <Messages addMessage={addMessage} changeMessage={changeMessage}
                  valueTextarea={valueTextarea} messagePage={props.messagePage}/>
    )
}

export default MessagesContainer;