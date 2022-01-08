import {connect} from "react-redux";
import Users from "./Users";
import {following, setUsers, unFollow} from "../../redux/messagePageReducer";

const mapStateToProps = (state) => {
    return {
        users: state.messagesPage.member
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
          dispatch(setUsers(users))
    },
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