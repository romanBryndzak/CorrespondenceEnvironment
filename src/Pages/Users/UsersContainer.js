import {connect} from "react-redux";
import Users from "./Users";
import {following, setCurrentPage, setUsers, totalCountUsers, unFollow} from "../../redux/messagePageReducer";

const mapStateToProps = (state) => {
    return {
        users: state.messagesPage.member,
        usersP: state.messagesPage
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
        },
        totalCountUsers: (amount) => {
            dispatch(totalCountUsers(amount))
        },
        setCurrentPage: (number) => {
            dispatch(setCurrentPage(number))
        }
    }

}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer