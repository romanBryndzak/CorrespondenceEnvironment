import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {switchIsFetching} from "../../redux/usersPageReducer";
import {getAuthMe, logout} from "../../redux/AuthorizationReducer";


function HeaderContainer(props) {

    return (<Header {...props}/>);

}

const mapStateToProps = (state) => {
    return {
        authMe: state.authorization.authMe,
        infoUser: state.postPage.infoUser,
        isFetchingAuth: state.messagesPage.isFetchingAuth,
    };
};

export default connect(mapStateToProps, {
    switchIsFetching, getAuthMe, logout,
})(HeaderContainer);
