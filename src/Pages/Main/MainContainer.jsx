import React from "react";
import {addInfoUser, addPost, changePost} from "../../redux/postPageReducer";
import Main from "./Main";
import {connect} from "react-redux";
import * as axios from "axios";
import {switchIsFetching} from "../../redux/usersPageReducer";
import {useParams} from "react-router-dom";

const withRouter = WrappedComponent => props => {
    // useLocation
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};

class MainContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 7755;
        }

        this.props.switchIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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
        userId: state.authorization.userId,
        postPage: state.postPage,
        valueTextarea: state.postPage.newTextPost,
        isFetching: state.messagesPage.isFetching
    }
}

let WithRoute = withRouter(MainContainer)
export default connect(mapStateToProps, {
    changePost, addPost, addInfoUser, switchIsFetching
})(WithRoute)