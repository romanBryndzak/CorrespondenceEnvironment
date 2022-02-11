import Messages from "./Messages";
import {connect} from "react-redux";
import {compose} from "redux";
import WithAuthRedirect from "../../HOC/authRedirect";
import {addMessage} from "../../redux/messagePageReducer";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        valueTextarea: state.messagesPage.newTextMessage,
        authMe: state.authorization.authMe
    }
}

export default compose(connect(mapStateToProps, {addMessage}), WithAuthRedirect)(Messages)