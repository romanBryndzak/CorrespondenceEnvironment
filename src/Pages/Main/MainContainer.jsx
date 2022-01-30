import React, {useEffect} from "react";
import {addInfoUser, addPost, changePost, changeStatus} from "../../redux/MainPageReducer";
import Main from "./Main";
import {connect} from "react-redux";
import * as axios from "axios";
import {switchIsFetching} from "../../redux/usersPageReducer";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";


function MainContainer(props) {
    let {userId} = useParams()

    let navigate = useNavigate();
    const redirectToProfile = (id) => {
        navigate(`/profile/${id}`)
    }

    useEffect(() => {
        if (!userId) {
            userId = props.userId;
        }

        props.switchIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                props.switchIsFetching(false)
                props.addInfoUser(response.data)
            })
        redirectToProfile(userId)
    }, [])

    return (
        <Main {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        userId: state.authorization.userId,
        postPage: state.postPage,
        valueTextarea: state.postPage.newTextPost,
        isFetching: state.messagesPage.isFetching,
        status: state.postPage.status,
    }
}

export default connect(mapStateToProps, {
    changePost, addPost, addInfoUser, switchIsFetching, changeStatus
})(MainContainer)