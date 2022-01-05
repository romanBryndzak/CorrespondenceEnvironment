import Messages from "./Messages";
import {connect} from "react-redux";
import {addMessageAction, changeMessageAction} from "../../redux/messagePageReducer";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        valueTextarea: state.messagesPage.newTextMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageAction())
        },
        changeMessage: (event) => {
            let newText = event.target.value
            dispatch(changeMessageAction(newText))
            console.log(newText)
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;