import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    following,
    setCurrentPage,
    setUsers,
    switchIsFetching,
    totalCountUsers,
    unFollow
} from "../../redux/messagePageReducer";
import * as axios from "axios";

class UsersContainer extends React.Component {

    onSetCurrentPage = (numberPage) => {
        this.props.switchIsFetching(true)
        this.props.setCurrentPage(numberPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count${this.props.usersP.amountUsers}`)
            .then(response => {
                this.props.switchIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    componentDidMount() {
        this.props.switchIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersP.activePage}&count${this.props.usersP.amountUsers}`)
            .then(response => {
                const users = response.data.items
                const amount = response.data.totalCount
                this.props.switchIsFetching(false)
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

export default connect(mapStateToProps, {
    setUsers, following, unFollow, totalCountUsers, setCurrentPage, switchIsFetching,
})(UsersContainer)