import React from "react";
import s from './Main.module.css'
import Post from './Posts/Post'
import {ava} from "../../img/img";

function Main(props) {
    const post = props.posts.map(post => {
        return (
            <Post key={post.id} post={post.post} like={post.like}/>
        )
    })

    const valueTextarea = React.createRef()
    const addPost = () => {
       let text = valueTextarea.current.value
        props.addPost(text)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.ava}>
                <img src={ava} alt="ava"/>
            </div>
            <div className={s.content}>content</div>
            <div className={s.posts}>
                <textarea onClick={() => {valueTextarea.current.value = ""}}
                          ref={valueTextarea}>write to me
                </textarea>
                <button onClick={addPost} className={s.add}>Add</button>
                {post}
            </div>
        </div>
    );
}

export default Main;
