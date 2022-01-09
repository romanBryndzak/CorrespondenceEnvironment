import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {following, setCurrentPage, setUsers, totalCountUsers, unFollow} from "../../redux/messagePageReducer";
import * as axios from "axios";

class UsersContainer extends React.Component {

    onSetCurrentPage = (numberPage) => {
        this.props.setCurrentPage(numberPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count${this.props.usersP.amountUsers}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersP.activePage}&count${this.props.usersP.amountUsers}`)
            .then(response => {
                const users = response.data.items
                const amount = response.data.totalCount

                this.props.setUsers(users)
                this.props.totalCountUsers(amount)
            })
    }

    render() {
        return (
            <div>
                <Users usersP={this.props.usersP} users={this.props.users}
                       following={this.props.following} unFollow={this.props.unFollow}
                       onSetCurrentPage={this.onSetCurrentPage}/>
            </div>)
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)