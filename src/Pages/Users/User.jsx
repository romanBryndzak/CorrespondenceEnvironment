import React from "react";
import s from "./Users.module.css"
import {ava} from "../../img/img";
import {userAPI} from "../../api/api";


function User(props) {
    const [disable, setDisable] = React.useState(false);
    const [disable1, setDisable1] = React.useState(false);

    const getFollowDisabled = (response, id, setD) => {
            if (response.data.resultCode === 0) {
            userAPI.getFollow(id)
                .then(response => {
                    if (response.status === 200) {
                        props.unFollow(id, response.data)
                        setD(false)
                    }
                })
        }
    }

    return (
        <div className={s.wrapperUsers}>
            {props.users.map(u => <div key={u.id} className={s.wrapperUser}>
                <div className={s.follow}>
                    <div><img src={u.photos.small ? u.photos.small : ava} alt=""/></div>
                    <div>
                        {u.followed ?
                            <button disabled={disable}
                                    onClick={() => { setDisable(true)
                                userAPI.setUnfollow(u.id).then(response => {
                                   getFollowDisabled(response, u.id, setDisable)
                                })

                            }}>follow</button>
                            : <button disabled={disable1} onClick={() => {setDisable1(true)
                                userAPI.setFollow(u.id).then(response => {
                                    getFollowDisabled(response, u.id, setDisable1)
                                })
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