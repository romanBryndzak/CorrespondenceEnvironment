import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {switchIsFetching} from "../redux/usersPageReducer";
import {getAuthMe} from "../redux/AuthorizationReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthMe()
    }

    render() {
        return (<Header {...this.props}/>);
    }
}

const mapStateToProps = (state) => {
    return {
        infoUser: state.postPage.infoUser,
        isFetchingAuth: state.messagesPage.isFetchingAuth
    }
}

export default connect(mapStateToProps, {
    switchIsFetching, getAuthMe
})(HeaderContainer);
