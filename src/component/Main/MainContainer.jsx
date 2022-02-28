import React, {useEffect} from "react";
import {
    addPost,
    changeStatus,
    getProfile,
    getStatus,
    updateStatus,
} from "../../redux/MainPageReducer";
import Main from "./Main";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {GetAuthMe} from "../../redux/selectors";


function MainContainer(props) {
    let {userId} = useParams();

    let navigate = useNavigate();
    const redirectToProfile = (id) => {
        navigate(`/profile/${id}`);
    }

    useEffect(() => {
        if (!userId) {
            userId = props.userId;
        }

        props.getProfile(userId);
        props.getStatus(userId);
        redirectToProfile(userId);
    }, []);

    return (
        <Main {...props}/>
    );
}

const mapStateToProps = (state) => {
    return {
        authMe:GetAuthMe,
        userId: state.authorization.userId,
        profilePage: state.profilePage,
        posts: state.profilePage.posts,
        valueTextarea: state.profilePage.newTextPost,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status,
    };
}

export default connect(mapStateToProps, {
    addPost, changeStatus, getStatus, updateStatus, getProfile
})(MainContainer);