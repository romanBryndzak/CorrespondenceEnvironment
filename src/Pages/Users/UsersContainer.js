import {connect} from "react-redux";
import Users from "./Users";
import {following, unFollow} from "../../redux/messagePageReducer";

const mapStateToProps = (state) => {
    return {
        memberApp: state.messagesPage.member
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        following: (userId) => {
            dispatch(following(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollow(userId))
        }
    }

}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer