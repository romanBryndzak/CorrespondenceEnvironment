import React, {useEffect} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, getUsers, setActiveCurrentPage, UnFollow
} from "../../redux/usersPageReducer";
import {setDisableNavLinkSidebar} from "../../redux/MainPageReducer";

function UsersContainer(props) {

    const onSetCurrentPage = (numberPage) => {
        props.setActiveCurrentPage(numberPage, props.usersP.amountUsers);
    };

    useEffect(() => {
        props.getUsers(props.usersP.activePage, props.usersP.amountUsers);
    }, []);

    return (
        <div>
            <Users {...props}
                   onSetCurrentPage={onSetCurrentPage}/>
        </div>);
}

const mapStateToProps = (state) => {
    return {
        usersP: state.usersP,
    };
};

export default connect(mapStateToProps, {
    follow, UnFollow, getUsers, setActiveCurrentPage, setDisableNavLinkSidebar
})(UsersContainer);