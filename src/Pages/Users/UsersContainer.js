import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    disableFollowBut,
    following,
    setCurrentPage,
    setUsers,
    switchIsFetching,
    totalCountUsers,
    unFollow
} from "../../redux/usersPageReducer";
import {userAPI} from "../../api/api";

class UsersContainer extends React.Component {

    onSetCurrentPage = (numberPage) => {
        this.props.switchIsFetching(true)
        this.props.setCurrentPage(numberPage)
        userAPI.getUser(numberPage, this.props.usersP.amountUsers).then(data => {
            this.props.switchIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    componentDidMount() {
        this.props.switchIsFetching(true)
        userAPI.getUser(this.props.usersP.activePage, this.props.usersP.amountUsers).then(data => {
            this.props.switchIsFetching(false)
            this.props.setUsers(data.items)
            this.props.totalCountUsers(data.totalCount)
        })
    }

    render() {
        return (
            <div>
                <Users {...this.props}
                       onSetCurrentPage={this.onSetCurrentPage}/>
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersP.member,
        usersP: state.usersP
    }
}

export default connect(mapStateToProps, {
    setUsers,
    following,
    unFollow,
    totalCountUsers,
    setCurrentPage,
    switchIsFetching,
    disableFollowBut,
})(UsersContainer)