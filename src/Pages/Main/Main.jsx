import React from "react";
import s from './Main.module.css'
import Post from './Post'
import {clearText} from "../../auxiliaryTools/auxiliaryTools";
import ProfileInfo from "./ProfileInfo";
import Preloader from "../../auxiliaryTools/Preloader";
import {Route, Routes} from "react-router-dom";

function Main(props) {

    const post = props.postPage.posts.map(post => {
        return (
            <Post key={post.id} post={post.post} like={post.like}/>
        )
    })

    const onChangePost = (event) => {
        let newText = event.target.value
        props.changePost(newText)
    }

    const onAddPost = () => {
        if (props.valueTextarea !== "Write to me!") {
            props.addPost()
        }
    }

    return (
        <div className={s.wrapper}>
            {props.isFetching !== false
                ?
                <Preloader/>
                :
                <Routes>
                    <Route path=":userId" element={
                        <ProfileInfo infoUser={props.postPage.infoUser} status={props.status}
                                     changeStatus={props.changeStatus} updateStatus={props.updateStatus}/>}/>
                </Routes>
            }
            <div className={s.posts}>
                <textarea onChange={onChangePost}
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
