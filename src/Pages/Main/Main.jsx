import React from "react";
import s from './Main.module.css'
import Post from './Post'
import ProfileInfo from "./ProfileInfo";
import Preloader from "../../auxiliaryTools/Preloader";
import {Route, Routes} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

function Main(props) {

    const post = props.postPage.posts.map(post => {
        return (
            <Post key={post.id} post={post.post} like={post.like}/>
        )
    })

    function postF(props){
        return(
            <form onSubmit={props.handleSubmit}>
                <Field name='post' component='textarea' type='text' placeholder='write in me'/>
                <button type='submit' className={s.add}>Add</button>
            </form>
        )
    }
    const ReduxPost = reduxForm({form:'postText'})(postF)
    function PostForm(props){
        const onSubmit = data => {
            props.addPost(data.post)
        }
        return <ReduxPost onSubmit={onSubmit}/>
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
                <PostForm addPost={props.addPost}/>
                {post}
            </div>
        </div>
    );
}

export default Main;
