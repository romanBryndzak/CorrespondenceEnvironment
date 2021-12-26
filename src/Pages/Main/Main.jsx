import s from './Main.module.css'
import Post from './Posts/Post'
import {ava} from "../../img/img";

function Main(props) {
    const post = props.posts.map(post => {
        return (
            <Post key={post.id} post={post.post} like={post.like}/>
        )
    })

    return (
        <div className={s.wrapper}>
            <div className={s.ava}>
                <img src={ava} alt="ava"/>
            </div>
            <div className={s.content}>content</div>
            <div className={s.posts}>
                <textarea>write to me</textarea>
                <button className={s.add}>add</button>
                {post}
            </div>
        </div>
    );
}

export default Main;
