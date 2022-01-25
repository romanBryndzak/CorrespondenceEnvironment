import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, getUsers, setActiveCurrentPage, UnFollow
} from "../../redux/usersPageReducer";

class UsersContainer extends React.Component {

    onSetCurrentPage = (numberPage) => {
        this.props.setActiveCurrentPage(numberPage, this.props.usersP.amountUsers)
    }

    componentDidMount() {
        this.props.getUsers(this.props.usersP.activePage, this.props.usersP.amountUsers)
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
        usersP: state.usersP,
    }
}

export default connect(mapStateToProps, {
    follow, UnFollow, getUsers, setActiveCurrentPage
})(UsersContainer)