import React from "react";
import {addInfoUser, addPost, changePost} from "../../redux/postPageReducer";
import Main from "./Main";
import {connect} from "react-redux";
import * as axios from "axios";
import {switchIsFetching} from "../../redux/messagePageReducer";

class MainContainer extends React.Component {

    componentDidMount() {
        this.props.switchIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.switchIsFetching(false)
                this.props.addInfoUser(response.data)
            })
    }

    render() {
        return (
            <Main {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postPage: state.postPage,
        valueTextarea: state.postPage.newTextPost,
        isFetching: state.messagesPage.isFetching
    }
}

export default connect(mapStateToProps, {
    changePost, addPost, addInfoUser, switchIsFetching
})(MainContainer)