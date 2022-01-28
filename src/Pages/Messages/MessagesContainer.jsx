import Messages from "./Messages";
import {connect} from "react-redux";
import {compose} from "redux";
import WithAuthRedirect from "../../HOC/authRedirect";
import {addMessageAction, changeMessageAction} from "../../redux/messagePageReducer";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        valueTextarea: state.messagesPage.newTextMessage,
        authMe: state.authorization.authMe
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
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Messages)