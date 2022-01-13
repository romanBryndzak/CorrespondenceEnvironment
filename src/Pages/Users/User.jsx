import React from "react";
import s from "./Users.module.css"
import {ava} from "../../img/img";
import {userAPI} from "../../api/api";
import Paginator from "../../auxiliaryTools/paginator";


function User(props) {

    const getFollowDisabled = (response, id, setD) => {
        if (response.data.resultCode === 0) {
            userAPI.getFollow(id)
                .then(response => {
                    if (response.status === 200) {
                        props.unFollow(id, response.data)
                        setD(id, false)
                    }
                })
        }
    }

    return (
        <div className={s.wrapperUsers}>
            <Paginator activePage={props.usersP.activePage} countItems={props.usersP.countUsers}
                       amountUsers={props.usersP.amountUsers} onSetCurrentPage={props.onSetCurrentPage}
                       portionSize={10}
            />
            {props.users.map(u => <div key={u.id} className={s.wrapperUser}>
                <div className={s.follow}>
                    <div><img src={u.photos.small ? u.photos.small : ava} alt=""/></div>
                    <div>
                        {u.followed ?
                            <button disabled={props.followStatus.some(id => id === u.id)}
                                    onClick={() => {
                                        props.disableFollowBut(u.id, true)
                                        userAPI.setUnfollow(u.id).then(response => {
                                            getFollowDisabled(response, u.id, props.disableFollowBut)
                                        })

                                    }}>follow</button>
                            : <button disabled={props.followStatus.some(id => id === u.id)}
                                      onClick={() => {
                                          props.disableFollowBut(u.id, true)
                                          userAPI.setFollow(u.id).then(response => {
                                              getFollowDisabled(response, u.id, props.disableFollowBut)
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