import React, {useEffect} from "react";
import {connect, useDispatch} from "react-redux";
import Users from "./Users";
import {
    follow, getUsers, setActiveCurrentPage, UnFollow
} from "../../redux/usersPageReducer";

function UsersContainer(props) {
    const dispatch = useDispatch();

    const onSetCurrentPage = (numberPage) => {
        props.setActiveCurrentPage(numberPage, props.usersP.amountUsers);
    };

    useEffect(() => {
        dispatch(getUsers(props.usersP.activePage, props.usersP.amountUsers));
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
    follow, UnFollow, setActiveCurrentPage
})(UsersContainer);