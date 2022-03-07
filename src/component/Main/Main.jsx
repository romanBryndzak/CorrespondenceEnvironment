import React from "react";
import s from "./Main.module.css";
import Post from "./Post";
import ProfileInfo from "./ProfileInfo";
import Preloader from "../../auxiliaryTools/Preloader";
import {Route, Routes, useLocation} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredTextarea} from "../../auxiliaryTools/fieldValidator";
import {Textarea} from "../../auxiliaryTools/auxiliaryTools";
import {useSelector} from "react-redux";
import {GetAuthMe} from "../../redux/selectors";

function Main({posts, userId, ...props}) {

    const authMe = useSelector(GetAuthMe);
    const location = useLocation();
    const pathLocal = location.pathname;

    const maxLengthText = maxLength(15);
    const post = posts.map(post => {
        return (
            <Post key={post.id} post={post.post} like={post.like}/>
        );
    });

    function postF(props) {
        return (
            <form onSubmit={props.handleSubmit}>
                <Field name='post' component={Textarea} type='text' placeholder='write in me'
                       validate={[requiredTextarea, maxLengthText]}
                />
                <button type='submit' className={s.add}>Add</button>
            </form>
        );
    }

    const ReduxPost = reduxForm({form: 'postText'})(postF);

    function PostForm(props) {
        const onSubmit = data => {
            props.addPost(data.post);
        }
        return <ReduxPost onSubmit={onSubmit}/>;
    }

    return (
        <div className={s.wrapper}>
            {props.isFetching !== false
                ?
                <Preloader/>
                :
                <Routes>
                    <Route path=":userId" element={
                        <ProfileInfo
                            infoUser={props.profilePage.infoUser} status={props.status} authMe={authMe} pathLocal={pathLocal}
                            userId={userId} changeStatus={props.changeStatus} updateStatus={props.updateStatus}
                        />
                    }/>
                </Routes>
            }
            <div className={s.posts}>
                {pathLocal === `/profile/${userId}` && authMe
                    ? <PostForm addPost={props.addPost}/>
                    : null
                }
                {post}
            </div>
        </div>
    );
}

export default Main;
