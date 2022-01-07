import {addPostAction, changePostAction} from "../../redux/postPageReducer";
import Main from "./Main";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postPage: state.postPage,
        valueTextarea:state.postPage.newTextPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (event) => {
            let newText = event.target.value
            dispatch(changePostAction(newText))
        },
        addPost: () => {
            dispatch(addPostAction())
        }
    }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainContainer;
