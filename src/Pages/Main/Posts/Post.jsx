import s from './../Main.module.css'
import {ava} from "../../../img/img";

function Post(props) {
    return (
        <div className={s.post}>
            <img src={ava} alt="ava"/>
            <span className={s.comment}>{props.post}</span>
            <span className={s.like}>
                <i className="fa fa-thumbs-up"/> {props.like}
            </span>
        </div>
    )
}

export default Post;
