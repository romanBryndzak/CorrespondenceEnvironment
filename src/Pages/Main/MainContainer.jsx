import React from "react";
import {addPostAction, changePostAction} from "../../redux/postPageReducer";
import Main from "./Main";

function MainContainer(props) {

    const valueTextarea = props.postPage.newTextPost
    const addPost = () => {
        if (valueTextarea !== "Write to me!") {
            props.dispatch(addPostAction())
        }
    }

    const handleChange = (event) => {
        let newText = event.target.value
        props.dispatch(changePostAction(newText))
    }

    return (
        <Main handleChange={handleChange} addPost={addPost}
              valueTextarea={valueTextarea}
              postPage={props.postPage}
        />
    );
}

export default MainContainer;
