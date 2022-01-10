import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from "axios";
import {switchIsFetching} from "../redux/messagePageReducer";
import {setUserAuthorization} from "../redux/AuthorizationReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.switchIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                this.props.switchIsFetching(false)
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data
                    this.props.setUserAuthorization(id, email, login)
                }
            })

    }

    render() {
        return (<Header {...this.props}/>);
    }
}

const mapStateToProps = (state) => {
    return {
        infoUser: state.postPage.infoUser,
        isFetching: state.messagesPage.isFetching
    }
}

export default connect(mapStateToProps, {
    switchIsFetching, setUserAuthorization
})(HeaderContainer);
