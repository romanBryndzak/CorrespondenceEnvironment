import React from "react";
import s from './Main.module.css'
import Post from './Posts/Post'
import {ava} from "../../img/img";
import {addPostAction, changePostAction} from "../../redux/postPageReducer";

function Main(props) {
    const post = props.postPage.posts.map(post => {
        return (
            <Post key={post.id} post={post.post} like={post.like}/>
        )
    })

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
    const clearText = (e) => {
        e.target.value = ""
    }

    return (
        <div className={s.wrapper}>
            <div className={s.ava}>
                <img src={ava} alt="ava"/>
            </div>
            <div className={s.content}>content</div>
            <div className={s.posts}>
                <textarea onChange={handleChange}
                          onClick={clearText}
                          value={valueTextarea}>
                </textarea>
                <button onClick={addPost} className={s.add}>Add</button>
                {post}
            </div>
        </div>
    );
}

export default Main;
