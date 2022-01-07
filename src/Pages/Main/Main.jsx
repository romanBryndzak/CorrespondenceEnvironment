import React from "react";
import s from './Main.module.css'
import Post from './Posts/Post'
import {ava} from "../../img/img";
import {clearText} from "../../redux/auxiliaryTools";

function Main(props) {
    const post = props.postPage.posts.map(post => {
        return (
            <Post key={post.id} post={post.post} like={post.like}/>
        )
    })

    const onAddPost = () => {
        if (props.valueTextarea !== "Write to me!") {
            props.addPost()
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.ava}>
                <img src={ava} alt="ava"/>
            </div>
            <div className={s.content}>content</div>
            <div className={s.posts}>
                <textarea onChange={props.handleChange}
                          onClick={clearText}
                          value={props.valueTextarea}>
                </textarea>
                <button onClick={onAddPost} className={s.add}>Add</button>
                {post}
            </div>
        </div>
    );
}

export default Main;
