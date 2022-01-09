import React from "react";
import s from "./Users.module.css"
import {ava} from "../../img/img";


function User(props) {
    return (
        <div className={s.wrapperUsers}>
            {props.users.map(u => <div key={u.id} className={s.wrapperUser}>
                <div className={s.follow}>
                    <div><img src={u.photos.small ? u.photos.small : ava} alt=""/></div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.following(u.id)
                            }}>follow</button>
                            : <button onClick={() => {
                                props.unFollow(u.id)
                            }}>unfollow</button>}
                    </div>
                </div>
                <div className={s.info}>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div/>
            </div>)}
        </div>
    )
}

export default User